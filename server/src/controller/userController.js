const userService = require("../services/userService");
const response = require("../../config/response");
const { basicResponse, resultResponse, NOT_AJOU_EMAIL, DB_ERROR, AJOU_STUDENT, FALSE_TOKEN, SIGNUPSUCCESS } = require("../../config/response");

// request파라미터 여부확인 -> 에러처리 -> 비즈니스로직작성
exports.signup = async function (req, res, err) {

        const { studentID, nickname, email, password, station} = req.body;
        //console.log(studentID, "+", nickname, "+", email, "+", password);
        const isAjouEmail = userService.checkAjouEmail(email); //ajou email이면 true, 아니면 false
        //console.log(isAjouEmail);
        if(!isAjouEmail) return res.send(basicResponse(NOT_AJOU_EMAIL));
        if(!studentID || !nickname || !email || !password) return res.send(basicResponse(response.USER_PARAMS_EMPTY));
        const userFlag = await userService.userCheck(studentID, nickname, email); // true면 중복 false면 진행

        if(userFlag) return res.send(basicResponse(response.USER_DUP));
        const isSignup = await userService.signup(studentID, nickname, email, password, station);

        if(isSignup) return res.send(basicResponse(SIGNUPSUCCESS));
        else return res.send(basicResponse(response.DB_ERROR));
};

exports.signin = async function (req, res) {
        const { email, password} = req.body;
        const loginFlag = await userService.signin(email, password);  //return이 0이면 이메일이 db에 없거나 비번오류, userData오면 성공
        if(loginFlag.result){
            req.session.loginData = loginFlag.userData;
            req.session.is_LoggedIn = true;
            return res.send(basicResponse(response.loginSUCCESS));
        }else{
            return res.send(basicResponse({isSuccess: false, code: 400, message: loginFlag.msg}));
        }
};

exports.logout = async function (req, res, next){
    let session = req.session;
        if(session.loginData){
            await session.destroy(function(err){
                if(err) console.error(err);
                else{
                    return res.send('로그아웃 성공');
                }
            })
        }
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
    else return res.send(basicResponse(DB_ERROR));
};

exports.delete = async function(req, res){
    const userid = req.session.loginData.id;
    const deleteFlag = await userService.delete(userid);
    if(deleteFlag == 1) return res.send(basicResponse(response.NO_USER));
    else if(deleteFlag == 2) return res.send(basicResponse(DB_ERROR));
    return res.send(basicResponse(response.DELETE_USER));
}