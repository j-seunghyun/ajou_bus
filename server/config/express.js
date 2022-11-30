const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const secret = require('./secret');
const app = express();
const userRouter = require('../src/routes/userRoutes');
const stationRouter = require('../src/routes/stationRoutes');
const connect = require('../src/schemas/index');

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

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
    // 여기에 라우팅 추가
    app.use('/', userRouter);
    app.use('/', stationRouter);



    // 라우팅 부분

    connect();
    
    return app;
};
