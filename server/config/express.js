const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const secret = require('./secret');
const app = express();
const userRouter = require('../src/routes/userRoutes');
const stationRouter = require('../src/routes/stationRoutes');
const noticeRouter = require('../src/routes/noticeRoutes');
const connect = require('../src/schemas/index');

module.exports =  () => {


    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({
        origin: '*',
        credential: true
    }));
    app.use(cookieParser());
    app.use(session({
        key: secret.sessionKey.key,
        secret: secret.sessionKey.secret,
        resave: false,
        store: MongoStore.create({
            mongoUrl: secret.db.atlas
            ,dbName: 'ajou_bus'
        }),
        saveUninitialized: false,
        cookie:{
            expires: 60 * 60 * 12
        }
    }));

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
    // 여기에 라우팅 추가
    app.use('/', userRouter);
    app.use('/', stationRouter);
    app.use('/', noticeRouter);

    connect();
    
    return app;
};
