const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const secret = require('./secret');
const app = express();
const signupRouter = require('../src/routes/userRoutes');
// DB connection
async function connect() {
        await mongoose.connect(secret.atlas, { dbName: 'ajou_bus' })
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(err));
};

module.exports =  () => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    //app.set('port', process.env.PORT || 80); //express 포트번호 80으로 set
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
    // 여기에 라우팅 추가
    app.use('/', signupRouter);
    /*app.listen(app.get("port"), () => {
        console.log(app.get("port"), "번 포트에서 대기중");
    });*/


    connect();
    return app;
};
