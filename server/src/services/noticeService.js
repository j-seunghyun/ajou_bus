const response = require("../../config/response");
const Notice = require('../schemas/notice');
const { basicResponse, resultResponse } = require("../../config/response");

exports.getAllNotice = async function() {
    try {
        const data = await Notice.find({});
        return data;
    } catch(error) {
        console.error(error);
        return false;
    }
};

exports.getNotice = async function(noticeId) {
    try {
        const data = await Notice.find({noticeId: noticeId});
        return data;
    } catch(error) {
        console.error(error);
        return false;
    }
};

exports.checkParam = async function(title, context, category){
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

exports.postNotice = async function(title, context, category){
    try{
        const flag = await Notice.create({
            title,
            context,
            category
        });
        return true;
    }catch(error){
        console.error(error);
        return false;
    }
};


exports.modify =  async function(id, title, context, category){
    try{
        await Notice.updateOne(
            {_id : id},{title, context, category}
        );
        return true;
    }catch(error){
        console.error(error);
        return false;
    }
};

exports.delete = async function(noticeId){
    try{
        await Notice.deleteOne({
            _id: noticeId
        });
        return true;
    }catch(error){
        console.error(error);
        return false;
    }
}