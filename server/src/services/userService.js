const status = require("../../config/responseStatus");
const { basicResponse, resultResponse } = require("../../config/response");
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
exports.userCheck = async function (studentID, nickname, email) {
    try {
        const userFlag = User.findOne().or([{ studentID: studentID}, { nickname: nickname }, { email: email}]); //db에 이메일이나 학번 닉네임 중복확인
        if(userFlag){//중복인 경우 => 회원가입 못하게 만듬
            return true;
        }else{ // 중복아닌 경우 => 회원가입 진행
            return false;
        }
    } catch (error) {
        console.log(error);
        return basicResponse(status.DB_ERROR);
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