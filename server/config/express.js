const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const secret = require("./secret");

module.exports = () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
    // 여기에 라우팅 추가
    const boardRouter = require("../src/controller/boardController")(app);

    // DB connection
    async function connect() {
        await mongoose.connect(secret.atlas, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(err));
    }

    connect();
    return app;
};