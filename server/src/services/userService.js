const { basicResponse, resultResponse } = require("../../config/response");
const User = require('../schemas/user');
const Auth = require('../schemas/auth');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const secret = require('../../config/secret');
const { Session } = require("inspector");
exports.userCheck = async function (studentID, nickname, email) {
    try {
        const userFlag = await User.findOne().or([{ studentID: studentID}, { nickname: nickname }, { email: email}]); //db에 이메일이나 학번 닉네임 중복확인
        if(userFlag){//중복인 경우 => 회원가입 못하게 만듬
            return true;
        }else{ // 중복아닌 경우 => 회원가입 진행
            return false;
        }
    } catch (error) {
        console.log(error);
        return {result: true, msg:"db오류"};
    }
};

exports.checkAjouEmail = function(email){
        var regExp = /^((\w|[\-\.])+)@ajou.ac.kr$/;
        if (email.length > 0 && email.search(regExp) == -1)
        {
            return false;
        }
        return true;
}

exports.signup = async function (studentID, nickname, email, password, station){
    try{
        const hashedpw = await bcrypt.hash(password, 12);
        const user = await User.create({
            studentID,
            nickname,
            email,
            password: hashedpw,
            level: 0,
            createdAt: Date.now()
        });
        return user;
    } catch(error){
        console.log(error);
        return false;
    }
};

exports.signin = async function (email, password){
    try{
        if(!email || !password) return {
            result: 0,
            msg: "이메일 혹은 패스워드가 누락되었습니다."
        }
        const userInfo = await User.findOne({
            email: email
        }, { createdAt:0, updatedAt: 0, __v: 0});
        if(userInfo){
            const isEqualPw = await bcrypt.compare(password, userInfo.password);
            if(isEqualPw) {
                let userData = {id: userInfo._id, email, nickname: userInfo.nickname, studentID: userInfo.studentID, level: userInfo.level};
                return {
                    result :1,
                    userData
                };
            } 
            else{
                return {
                    result: 0,
                    msg:"비번이 일치하지 않습니다."
                };
            }
        }else{
            return {
                result:0,
                msg:"해당 이메일은 존재하지 않습니다."
            };
        }
    }catch(error){
        console.error(error);
        return  {
            result:0,
            msg:"데이터베이스 오류"
        };
    }
}

exports.sendAjouEmail = async function(email){
    try{
        const findAuth = await Auth.remove({
            email: email
        }); //기존에 해당 메일의 인증번호는 다 삭제

        let transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.gmail.com",
            secrue: true,
            port: 465,
            auth: {
                user: secret.email.id,
                pass: secret.email.password
            }
        });
        const token = crypto.randomBytes(6).toString('hex');
        let tokenInfo = await transporter.sendMail({
            from: secret.email.id,
            to: email,
            subject: "[ajou_bus] 아주대학교 학생 인증을 위한 이메일입니다.",
            text: "아주대학교 학생임을 인증하기 위한 인증번호는 다음과 같습니다.\n" + token
        });
        const authFlag = await Auth.create({
            email,
            token
        });
        setTimeout(function(){
            Auth.deleteOne({
                email,
                token
            });
        }, 1000* 60* 5);  //인증번호 5분후 삭제
        if(authFlag) return true;
        else return false;
    }catch(error){
        console.error(error);
        return false;
    }
};

exports.checkToken = async function(email, token){
    try{
        const authInfo = await Auth.findOne({
            email: email
        });
        if(!authInfo){
            return 3;
        }
        if(authInfo.token === token){
            await Auth.deleteOne({
                email: email
            }); 
            return 0;
        }
        else return 1;
    }catch(error){
        console.error(error);
        return 2;
    }
};

exports.isDriver = async function(id){
    try{
        const driverFlag = await User.findOne({
            sessionid: id, level: 1
        });
        if(driverFlag == null) return false;
        return true;
    }catch(error){
        console.error(error);
    }
};

exports.delete = async function(id){
    try{
        const deleteFlag = await User.deleteOne({
            _id: id
        });
        if(deleteFlag == null) return 1;
        return 0;
    }catch(error){
        console.error(error);
        return 2;
    }
};

exports.saveSession= async function (email, token){
    try{
        await User.updateOne({
            email:email
        }, {
            sessionid:token
        });
    }catch{
        console.error(error);
    }
}




