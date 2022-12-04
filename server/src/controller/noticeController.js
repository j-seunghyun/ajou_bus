const noticeService = require("../services/noticeService");
const response = require("../../config/response");
const { basicResponse, resultResponse } = require("../../config/response");

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

exports.allNoticeInfo = async function (req, res) {
    const data = await noticeService.getAllNotice();
    return res.send(resultResponse(response.SUCCESS, data));
};

exports.noticeInfo = async function (req, res) {
    const noticeId = req.params.noticeId;
    const data = await noticeService.getNotice(noticeId);
    if(!data.length) return res.send(basicResponse(response.NOTICE_NONE));
    return res.send(resultResponse(response.SUCCESS, data));
};