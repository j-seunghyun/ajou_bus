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

export {
    basicResponse,
    resultResponse,
}