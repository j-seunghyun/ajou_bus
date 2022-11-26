module.exports = (app) => {
    const board = require("../controller/boardController");

    // 게시판 전체 조회 API
    app.get("/api/board", board.getAllBoard);
};