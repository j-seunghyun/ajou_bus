const response = require("../../config/response");
const check = require("../services/userService");
exports.checkLogin = function(req,res,next){
    if(!req.session.is_LoggedIn) return res.send(response.basicResponse(response.IS_NOT_LOGGEDIN));
    next();
};

exports.checkDriver = async function(req,res,next){
    console.log(req.session);
    if(!req.session.is_LoggedIn) return res.send(response.basicResponse(response.IS_NOT_LOGGEDIN));
    const userid = req.session.loginData.id;
    console.log(userid);
    const driverFlag = await check.isDriver(userid);
    if(!driverFlag) return res.send(response.basicResponse(response.NOT_DRIVER));
    next();
}