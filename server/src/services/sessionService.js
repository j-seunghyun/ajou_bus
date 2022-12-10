const response = require("../../config/response");
const Session = require('../schemas/session');
exports.checkToken = async function(token){
    try{
        // console.log(token);
        const session = await Session.findById(token);
        return session;
    }catch(error){
        console.error(error)
        return false;
    }
};

