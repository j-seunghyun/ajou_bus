module.exports = (app) => {
    const user = require("../controller/userController");
    // 회원가입 API 작성
    app.post("/api/signup", user.signup);
};