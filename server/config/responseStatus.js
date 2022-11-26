module.exports = {
	SUCCESS: { isSuccess: true, code: 1000, message: "성공" },
    DB_ERROR: { isSuccess: false, code: 9000, message: "데이터 베이스 에러" },
	SERVER_ERROR: { isSuccess: false, code: 8000, message: "서버 에러" },
};