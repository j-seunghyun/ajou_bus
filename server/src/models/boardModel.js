const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
    boardIdx: {
        type: Number,
        required: true,
        unique: true
    },
    boardTitle: {
        type: String
    },
    boardBody: {
        type: String
    },
    status: {
        type: String,
    },
    createdAt: {
        type: String
    },
    updatedAt: {
        type: String
    },
});

const boardModel = mongoose.model('Board', boardSchema);

module.exports = boardModel;