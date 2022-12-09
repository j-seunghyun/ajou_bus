const app = require("./config/express")();
const secret = require("./config/secret");

const server = app.listen(secret.port, () => {
    console.log(`API Server Start At Port ${secret.port}`)
});
const io = require('socket.io')(server);

let rooms = [];

io.on('connection', (socket) => {
    console.log("hi");
    socket.on('req_msg', (msg) => {
        console.log("메세지 받기", msg);
        io.emit('res_msg', msg);
    });

    // 채팅방 참여
    socket.on('req_join_room', async (msg) => {
        let roomName = 'Room_' + msg;
        // room 없으면
        if(!rooms.includes(roomName)) rooms.push(roomName);
        socket.join(roomName);
        io.to(roomName).emit('notice_join_msg', "방에 입장하였습니다.");
    });

    // 채팅방에 채팅 요청
    socket.on('req_room_msg', async(msg) => {
        // msg의 room 확인
        let userCurrentRoom = getUserCurrentRoom(socket);
        io.to(userCurrentRoom).emit('notice_room_msg', msg);
    });

    socket.on('disconnect', async () => {
        console.log('user disconnected');
    });
});

function getUserCurrentRoom(socket) {
    let currentRoom = '';
    let socketRooms = Object.keys(socket.rooms);

    for( let i = 0 ; i < socketRooms.length; i ++ ){
        if(socketRooms[i].indexOf('Room_') !== -1){
            currentRoom = socketRooms[i];
            break;
        } 
    }
    return currentRoom;
}

module.exports = app;