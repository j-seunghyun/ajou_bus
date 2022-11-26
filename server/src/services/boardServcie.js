const status = require("../../config/responseStatus");
const { basicResponse, resultResponse } = require("../../config/response");

const boardModel = require('../models/boardModel');

exports.readAllBoard = async function () {
    try {
        // business logic
        return basicResponse(status.SUCCESS);
    } catch (error) {
        console.log(error);
        return basicResponse(status.DB_ERROR);
    }
};