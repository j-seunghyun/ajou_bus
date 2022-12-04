const response = require("../../config/response");
exports.check = function(req,res,next){
    if(!req.session.is_LoggedIn) return res.send(response.basicResponse(response.IS_NOT_LOGGEDIN));
    next();
};
