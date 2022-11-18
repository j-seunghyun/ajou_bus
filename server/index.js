import express from './config/express.js';
import secret from './config/secret.js';

express().listen(secret.port, () => console.log(`API Server Start At Port ${secret.port}`));

export default express();