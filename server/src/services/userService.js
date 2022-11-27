const { basicResponse, resultResponse } = require("../../config/response");
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
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
                msg:"해당 이메일을 데이터베이스에서 찾을 수 없습니다."
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