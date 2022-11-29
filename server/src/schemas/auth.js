const mongoose = require("mongoose");

//학번, 이메일, 닉네임, 비밀번호,
const authSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    token: {
        type: String,
        required: true,
        unique: true
    }
},{timestamps: true}); //createdAt, updatedAt 생성

const authModel = mongoose.model('Auth', authSchema);

module.exports = authModel;