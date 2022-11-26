const userService = require("../services/userService");
const status = require("../../config/responseStatus");
const { basicResponse, resultResponse } = require("../../config/response");

// request파라미터 여부확인 -> 에러처리 -> 비즈니스로직작성
exports.signup = async function (req, res, err) {
    try {
        const { studentID, nickname, email, password} = req.body;
        if(!studentID || !nickname || !email || !password) return res.send(basicResponse(response.USER_PARAMS_EMPTY));
        const userFlag = await userService.userCheck(studentID, nickname, email); // true면 중복 false면 진행
        if(userFlag) return res.send(resultResponse(baseResponse.FAIL));
        const isSignup = await userService.signup(studentID, nickname, email, password);
        if(isSignup) return res.send(resultResponse(baseResponse.SUCCESS, isSignup));
        else return res.send(resultResponse(status.DB_ERROR));
        
    } catch (error) {
        console.log(error);
        return res.send(basicResponse(status.SERVER_ERROR));
    }
};