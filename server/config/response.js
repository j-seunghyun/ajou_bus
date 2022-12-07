const basicResponse = ({isSuccess, code, message}) => {
    return {
        isSuccess: isSuccess,
        code: code,
        message: message
    }
};

const resultResponse = ({isSuccess, code, message}, result) => {
    return {
        isSuccess: isSuccess,
        code: code,
        message: message,
        result: result
    }
};
module.exports = {
    basicResponse,
    resultResponse,
    SUCCESS: { isSuccess:true, code: 200, message: "성공"},
    loginSUCCESS: { isSuccess:true, code: 200, message: "로그인 성공"},
    DB_ERROR: { isSuccess: false, code: 500, message: "데이터 베이스 에러"},
    USER_PARAMS_EMPTY: { isSuccess:false, code:400, message:"유저 데이터 누락"},
    USER_EXISTS: {isSuccess:false, code:400, message:"유저가 이미 존재합니다."},
    FAIL: { isSuccess: false, code: 400, message:"실패" },
    USER_DUP: {isSuccess: false, code: 400, message: "중복된 회원입니다."},
    NOT_AJOU_EMAIL : {isSuccess: false, code: 400, message: "아주대 이메일 형식이 아닙니다."},
    SIGNUPSUCCESS : {isSuccess: true, code: 200, message:"회원가입이 완료되었습니다."},
    EMAIL_SUCCESS: {isSuccess: true, code: 200, message: "인증번호를 해당메일로 전송하였습니다."},
    AJOU_STUDENT: {isSuccess: true, code: 200, message: "아주대학생 인증이 완료되었습니다."},
    FALSE_TOKEN : {isSuccess: false, code: 400, message: "인증번호 오류입니다."},
    ALL_SEME_STATION : {isSuccess: true, code: 200, message: "모든 학기 버스 노선 정보를 가져왔습니다."},
    ALL_VACA_STATION : {isSuccess: true, code: 200, message: "모든 방학 버스 노선 정보를 가져왔습니다."},
    NOTICE_PARAMS_EMPTY: { isSuccess:false, code:400, message:"공지사항 데이터 누락"},
    CREATE_NOTICE: { isSuccess: false, code: 200, message: "공지사항 등록 완료!"},
    IS_NOT_LOGGEDIN : { isSuccess:false, code: 400, message: "로그인이 되어있지 않습니다."},
    NOTICE_NONE : { isSuccess:false, code: 404, message: "해당번호의 공지사항이 없습니다."},
    NOT_DRIVER : { isSuccess: false, code: 403, message: "글쓰기 권한이 없습니다."},
    MODIFY_SUCCESS: { isSuccess: true, code: 200, message: "글을 수정하였습니다."},
    DELETE_SUCCESS: { isSuccess: true, code: 200, message: "글을 삭제하였습니다."},
    NO_USER: { isSuccess: false, code: 400, message: "회원을 찾을 수 없습니다."},
    DELETE_USER : { isSuccess: true, code: 200, message: "회원을 삭제하였습니다."}
};