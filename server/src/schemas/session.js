const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const sessionSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: function () {
            return new ObjectId().toString()
        }
    },
    session: {
        type: String,
        required: true
    },
    expires: {
        type: Date,
        required: true
    }
},{timestamps: false}); 



const sessionModel = mongoose.model('Session', sessionSchema);

module.exports = sessionModel;