const userService = require("../services/userService");
const response = require("../../config/response");
const { basicResponse, resultResponse, NOT_AJOU_EMAIL, DB_ERROR, AJOU_STUDENT, FALSE_TOKEN } = require("../../config/response");

// request파라미터 여부확인 -> 에러처리 -> 비즈니스로직작성
exports.signup = async function (req, res, err) {
    try {
        const { studentID, nickname, email, password} = req.body;
        //console.log(studentID, "+", nickname, "+", email, "+", password);
        const isAjouEmail = await userService.checkAjouEmail(email); //ajou email이면 true, 아니면 false
        //console.log(isAjouEmail);
        if(!isAjouEmail) return res.send(basicResponse(NOT_AJOU_EMAIL));
        if(!studentID || !nickname || !email || !password) return res.send(basicResponse(response.USER_PARAMS_EMPTY));
        const userFlag = await userService.userCheck(studentID, nickname, email); // true면 중복 false면 진행

        if(userFlag) return res.send(basicResponse(response.USER_DUP));
        const isSignup = await userService.signup(studentID, nickname, email, password);

        if(isSignup) return res.send(resultResponse(true, 200, "회원가입이 완료되었습니다.", 1 ));
        else return res.send(resultResponse(response.DB_ERROR));

    } catch (error) {
        console.log(error);
        return res.send(basicResponse(response.DB_ERROR));
    }
};

exports.signin = async function (req, res, err) {
    try{
        const { email, password} = req.body;
        const loginFlag = await userService.signin(email, password);  //return이 0이면 이메일이 db에 없거나 비번오류, userData오면 성공
        if(loginFlag.result){
            req.session.loginData = loginFlag.userData;
            return res.send(basicResponse(response.loginSUCCESS));
        }else{
            return res.send(basicResponse({isSuccess: false, code: 400, message: loginFlag.msg}));
        }
    }catch(error){
        return res.send(basicResponse(response.DB_ERROR));
    }
};

exports.logout = async function (req, res, next){
    let session = req.session;
    try{
        if(session.loginData){
            await req.session.destroy(function(err){
                if(err) console.error(err);
                else{
                    res.redirect('/');
                }
            })
        }
    }catch(err){
        console.error(err);
    }
    res.redirect('/');
};

exports.sendEmail = async function(req, res, err){
    const email = req.query.email;
    const isAjouEmail = await userService.checkAjouEmail(email);

    if(!isAjouEmail) return res.send(basicResponse(NOT_AJOU_EMAIL));

    const emailFlag = await userService.sendAjouEmail(email);
    if(emailFlag) return res.send(basicResponse(response.EMAIL_SUCCESS)); 
    else  return res.send(basicResponse(response.DB_ERROR)); 
};

exports.checkAuth = async function(req, res, err){
    const email = req.query.email;
    const token = req.query.token;
    const isAjouEmail = await userService.checkAjouEmail(email);

    if(!isAjouEmail) return res.send(basicResponse(NOT_AJOU_EMAIL));
    if(!token) return res.send(basicResponse(false, 400, "빈 문자열의 인증번호를 입력하였습니다."));


    const checkToken = await userService.checkToken(email, token);
    if(!checkToken) return res.send(resultResponse(AJOU_STUDENT));
    else if(checkToken == 1) return res.send(resultResponse(FALSE_TOKEN));
    else return res.send(basicResponse(DB_ERROR));
}