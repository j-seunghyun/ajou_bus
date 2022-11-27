const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const secret = require('./secret');
const app = express();
const userRouter = require('../src/routes/userRoutes');

async function connect() {
        await mongoose.connect(secret.db.atlas, { dbName: 'ajou_bus' })
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(err));
};

module.exports =  () => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use(cookieParser());
    app.use(session({
        key: secret.sessionKey.key,
        secret: secret.sessionKey.secret,
        resave: false,
        saveUninitialized: false,
        cookie:{
            expires: 60 * 60 * 3
        }
    }));

    //app.set('port', process.env.PORT || 80); //express 포트번호 80으로 set
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
    // 여기에 라우팅 추가
    app.use('/', userRouter);
    /*app.listen(app.get("port"), () => {
        console.log(app.get("port"), "번 포트에서 대기중");
    });*/


    connect();
    return app;
};
