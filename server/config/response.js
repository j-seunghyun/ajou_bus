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
    DB_ERROR: { isSuccess: false, code: 400, message: "데이터 베이스 에러"},
    USER_PARAMS_EMPTY: { isSuccess:false, code:400, message:"유저 데이터 누락"},
    USER_EXISTS: {isSuccess:false, code:400, message:"유저가 이미 존재합니다."},
    FAIL: { isSuccess: false, code: 400, message:"실패" },
    USER_DUP: {isSuccess: false, code: 400, message: "중복된 회원입니다."}
};