const { json } = require("express");
const mongoose = require("mongoose");


const stationSchema = new mongoose.Schema({
    station: {
        type: String,
        required: true
    },
    kind:{
        type: Boolean,  //0이면 학기 노선, 1이면 방학 노선
        required: true
    },
    stationId: {
        type: Number,
        required: true
    },
    stationInfo:{ // 차량 하나에 대해서 출발 지점이 여러개 있는 경우가 있어서 array
        type: JSON,
        required: true
    },
    fee: {
        type: JSON, //카드가격, 현금가격 분리?
        required: false
    },
    carNumber: {
        type: String,
        required: true
    }
},{timestamps: true}); //createdAt, updatedAt 생성

const stationModel = mongoose.model('Station', stationSchema);

module.exports = stationModel;