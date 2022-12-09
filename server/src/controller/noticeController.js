const noticeService = require("../services/noticeService");
const userService = require("../services/userService");
const response = require("../../config/response");
const { basicResponse, resultResponse } = require("../../config/response");

exports.posting = async function (req, res, err) {
        const {title, context, category} = req.body;
        const checkParam = await noticeService.checkParam(title, context, category);
        if(!checkParam) return res.send(response.basicResponse(response.NOTICE_PARAMS_EMPTY));
        await noticeService.postNotice(title, context, category);
        return res.send(response.basicResponse(response.CREATE_NOTICE));
};

exports.allNoticeInfo = async function (req, res) {
    console.log(req.session);
    const data = await noticeService.getAllNotice();
    return res.send(resultResponse(response.SUCCESS, data));
};

exports.noticeInfo = async function (req, res) {
    const noticeId = req.params.noticeId;
    const data = await noticeService.getNotice(noticeId);
    if(!data.length) return res.send(basicResponse(response.NOTICE_NONE));
    return res.send(resultResponse(response.SUCCESS, data));
};

exports.modify = async function(req, res){
    const noticeId = req.params.noticeId;
    const {title, content, category} = req.body;
    const userData = req.session.loginData;
    const checkUser = await userService.isDriver(userData.id);
    if(!checkUser) return res.send(basicResponse(response.NOT_DRIVER));
    const result = await noticeService.modify(noticeId, title, content, category);
    if(!result) return res.send(basicResponse(response.DB_ERROR));
    return res.send(basicResponse(response.MODIFY_SUCCESS));
};

exports.delete = async function (req, res){
    const noticeId = req.params.noticeId;
    const deleteResult = await noticeService.delete(noticeId);
    if(!deleteResult) return res.send(basicResponse(response.DB_ERROR));
    return res.send(basicResponse(response.DELETE_SUCCESS));
}