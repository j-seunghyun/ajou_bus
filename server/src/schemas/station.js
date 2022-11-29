const mongoose = require("mongoose");


const stationSchema = new mongoose.Schema({
    station: {
        type: String,
        required: true
    },
    stationId: {
        type: Number,
        unique: true
    },
    round: {
        type: Number,
        required: true
    },
    areaImg: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    fee: {
        type: JSON, //카드가격, 현금가격 분리?
        required: true
    },
    carNumber: {
        type: String,
        required: true
    }
},{timestamps: true}); //createdAt, updatedAt 생성

const stationModel = mongoose.model('Station', stationSchema);

module.exports = stationModel;