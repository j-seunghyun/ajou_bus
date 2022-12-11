const userService = require("../services/userService");
const sessionService = require("../services/sessionService");
const response = require("../../config/response");
const { basicResponse, resultResponse, NOT_AJOU_EMAIL, DB_ERROR, AJOU_STUDENT, FALSE_TOKEN, SIGNUPSUCCESS } = require("../../config/response");
exports.signup = async function (req, res, err) {

        const { studentID, nickname, email, password} = req.body;
        const isAjouEmail = userService.checkAjouEmail(email); //ajou email이면 true, 아니면 false
        if(!isAjouEmail) return res.send(basicResponse(NOT_AJOU_EMAIL));
        if(!studentID || !nickname || !email || !password) return res.send(basicResponse(response.USER_PARAMS_EMPTY));
        const userFlag = await userService.userCheck(studentID, nickname, email); // true면 중복 false면 진행

        if(userFlag) return res.send(basicResponse(response.USER_DUP));
        const isSignup = await userService.signup(studentID, nickname, email, password);

        if(isSignup) return res.send(basicResponse(SIGNUPSUCCESS));
        else return res.send(basicResponse(response.DB_ERROR));
};

exports.signin = async function (req, res) {
        const { email, password} = req.body;
        const loginFlag = await userService.signin(email, password);  //return이 0이면 이메일이 db에 없거나 비번오류, userData오면 성공
        if(loginFlag.result){
            req.session.save();
            let token = req.session.id;
            await userService.saveSession(loginFlag.userData.id,token);
            return res.send(resultResponse(response.loginSUCCESS, {token, level:loginFlag.userData.level}));
        }else{
            return res.send(basicResponse({isSuccess: false, code: 400, message: loginFlag.msg}));
        }
};

exports.logout = async function (req, res, next){
    let token = req.headers.token;
        if(token){
            await sessionService.destroy();
            return res.send(basicResponse({isSuccess: true, code: 200, message:"로그아웃 완료"}));
        }
        return res.send(basicResponse(IS_NOT_LOGGEDIN));
    
};

exports.sendEmail = async function(req, res){
    const email = req.query.email;
    const isAjouEmail = userService.checkAjouEmail(email);

    if(!isAjouEmail) return res.send(basicResponse(NOT_AJOU_EMAIL));

    const emailFlag = await userService.sendAjouEmail(email);
    if(emailFlag) return res.send(basicResponse(response.EMAIL_SUCCESS)); 
    else  return res.send(basicResponse(response.DB_ERROR)); 
};

exports.checkAuth = async function(req, res){
    const email = req.body.email;
    const token = req.body.token;
    const isAjouEmail = userService.checkAjouEmail(email);

    if(!isAjouEmail) return res.send(basicResponse(NOT_AJOU_EMAIL));
    if(!token) return res.send(basicResponse(false, 400, "빈 문자열의 인증번호를 입력하였습니다."));

    const checkToken = await userService.checkToken(email, token);
    if(!checkToken) return res.send(basicResponse(AJOU_STUDENT));
    else if(checkToken == 1) return res.send(basicResponse(FALSE_TOKEN));
    else if(checkToken == 3) return res.send(basicResponse(response.TOKEN_EXPIRED))
    else return res.send(basicResponse(DB_ERROR));
};

exports.delete = async function(req, res){
    const userid = req.session.loginData.id;
    const deleteFlag = await userService.delete(userid);
    if(deleteFlag == 1) return res.send(basicResponse(response.NO_USER));
    else if(deleteFlag == 2) return res.send(basicResponse(DB_ERROR));
    return res.send(basicResponse(response.DELETE_USER));
}