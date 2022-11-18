import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import secret from './secret.js';

export default () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
    // 여기에 라우팅 추가

    // DB connection
    async function connect() {
        await mongoose.connect(secret.atlas, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(err));
    }

    connect();
    return app;
}