const mongoose = require("mongoose");
const autoIncrement = require('mongoose-sequence')(mongoose);
const noticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    context: {
        type: String,
        required: true
    },
    category: {
        type: Number,
        ref: 'Station' // station 외래키 지정
    },
    noticeId : {
        type: Number,
        required: false,
        unique: true
    }
},{timestamps: true}); //createdAt, updatedAt 생성


noticeSchema.plugin(autoIncrement, {inc_field: "noticeId"})
const noticeModel = mongoose.model('Notice', noticeSchema);

module.exports = noticeModel;