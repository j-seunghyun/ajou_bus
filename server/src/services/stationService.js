const { basicResponse, resultResponse } = require("../../config/response");
const Station = require('../schemas/station');

exports.getSemester = async function(){
    try{
        const data = await Station.find({ kind : 0}); //학기 노선 정보 찾기
        return data;
    }catch(error){
        console.error(error);
        return false;
    }
};

exports.getVacation = async function(){
    try{
        const data = await Station.find({ kind: 1 }); //방학 노선 찾기
        return data;
    }catch(error){
        console.error(error);
        return false;
    }
}