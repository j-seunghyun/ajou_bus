const response = require("../../config/response");
const Session = require('../schemas/session');

exports.checkToken = async function(token){
    try{
        const session = await Session.findOne({
                _id : token
        });
        return session;
    }catch(error){
        console.error(error)
        return false;
    }
};

