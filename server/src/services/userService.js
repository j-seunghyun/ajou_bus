const { basicResponse, resultResponse } = require("../../config/response");
const User = require('../schemas/user');
const Auth = require('../schemas/auth');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const secret = require('../../config/secret');
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

exports.signup = async function (studentID, nickname, email, password){
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
        const userInfo = await User.findOne({
            email: email
        });
        console.log(userInfo);
        if(userInfo){ //이메일에 해당하는 유저가 있음
            const isEqualPw = await bcrypt.compare(password, userInfo.password);
            if(isEqualPw) {
                let userData = { email, nickname: userInfo.nickname, studentID: userInfo.studentID};
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
        if(authInfo.token === token){
            await Auth.remove({
                email: email
            }); 
            return 0;
        }
        else return 1;
    }catch(error){
        console.error(error);
        return 2;
    }
}