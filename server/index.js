const express = require("./config/express");
const secret = require("./config/secret");

express().listen(secret.db.port, () => console.log(`API Server Start At Port ${secret.db.port}`));
module.exports = express();