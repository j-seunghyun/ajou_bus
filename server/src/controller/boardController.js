const boardService = require("../services/boardService");
const status = require("../../config/responseStatus");
const { basicResponse, resultResponse } = require("../../config/response");

exports.getAllBoard = async function (req, res) {
    try {
    // Controller단 에러처리 (필수 파라미터 부재 등)
    const result = await boardService.readAllBoard();
    return res.send(resultResponse(baseResponse.SUCCESS, result));
    } catch (error) {
        console.log(error);
        return res.send(basicResponse(status.SERVER_ERROR));
    }
};