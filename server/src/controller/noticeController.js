const noticeService = require("../services/noticeService");
const response = require("../../config/response");
const { basicResponse } = require("../../config/response");

exports.posting = async function (req, res, err) {
    try {
        const {title, context, category} = req.body;
        const checkParam = await noticeService.checkParam(title, context, category);
        if(!checkParam) return res.send(response.basicResponse(response.NOTICE_PARAMS_EMPTY));
        await noticeService.postNotice(title, context, category);
        return res.send(response.basicResponse(response.CREATE_NOTICE));
    } catch (error) {
        console.log(error);
        return res.send(response(basicResponse(response.DB_ERROR)));
    }
};