import express from 'express';
import cors from 'cors';

export default () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
    // 여기에 라우팅 추가

    return app;
}