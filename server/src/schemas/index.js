const mongoose = require('mongoose');
const secret = require('../../config/secret');
const station = require('./station');
const auth = require('./auth');
/*const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const station = require('./station');
station.plugin(autoIncrement.plugin, {
    model: station,
    field: stationId,
    startAt: 1,
    increment: 1
});*/

const connect = async() => {
    await mongoose.connect(secret.db.atlas, { 
        dbName: 'ajou_bus'
    }).then(() => {
        mongoose.set('debug', true);
        console.log('몽고디비 연결 성공');
    }).catch((err) => {
        console.log('몽고디비 연결 에러', err);
    });
};

mongoose.connection.on('error', (error) => {
    console.error('몽고디비 연결 에러', error);
});

mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊어졌습니다. 연결을 재시도합니다.');
    //connect();
})

module.exports = connect;