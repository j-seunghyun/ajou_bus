const mongoose = require("mongoose");
const sessionSchema = new mongoose.Schema({
    session:{
        type:String,
        required: true
    },
    expires:{
        type: Date,
        required: true
    }
},{timestamps: false}); 


const sessionModel = mongoose.model('Session', sessionSchema);

module.exports = sessionModel;