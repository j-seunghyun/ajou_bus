const stationService = require("../services/stationService");
const response = require("../../config/response");
const { basicResponse, resultResponse, ALL_STATION, DB_ERROR,  } = require("../../config/response");


exports.semesterInfo = async function(req, res){
    try{
        const data = await stationService.getSemester();
        if(!data) return res.send(basicResponse(DB_ERROR));
        return res.send(resultResponse(ALL_STATION, data));
        
    }catch(err){
        console.error(err);
        return res.send(basicResponse(DB_ERROR));
    }
}

exports.vacationInfo = async function(req, res){
    try{
        const data = await stationService.getVacation();
        if(!data) return res.send(basicResponse(DB_ERROR));
        return res.send(resultResponse(ALL_STATION, data));

    }catch(err){
        console.error(err);
        return res.send(basicResponse(DB_ERROR));
    }
}