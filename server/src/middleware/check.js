const response = require("../../config/response");
const session = require("../services/sessionService");
const user = require("../services/userService");

exports.checkLogin = async function(req,res,next){
    let token =  "asdasdasdasdasdasasdasd";
    console.log(token, typeof(token));
    const result = await session.checkToken(token);
    if(!result) return res.send(response.basicResponse(response.IS_NOT_LOGGEDIN));
    next();
};

exports.checkDriver = async function(req,res,next){
    let token = req.headers.token;
    const result = await session.checkToken(token);
    if(!result) return res.send(response.basicResponse(response.IS_NOT_LOGGEDIN));
    const driverFlag = await user.isDriver(token);
    if(!driverFlag) return res.send(response.basicResponse(response.NOT_DRIVER));
    next();
};