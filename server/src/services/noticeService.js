const { basicResponse, resultResponse } = require("../../config/response");
const Notice = require('../schemas/notice');


exports.checkParam =  async function(title, context, category){
    try{
        if(!title || !context || !category){
            return 0;
        }
        return 1;
    }catch(error){
        console.error(error);
        return false;
    }
};

exports.postNotice =  async function(title, context, category){
    const flag = await Notice.create({
        title,
        context,
        category
    });
}