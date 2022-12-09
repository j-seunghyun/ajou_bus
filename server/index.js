const app = require("./config/express")();
const secret = require("./config/secret");

const server = app.listen(secret.port, () => {
    console.log(`API Server Start At Port ${secret.port}`)
});
const io = require('socket.io')(server);

let rooms = [];
let userRoom = {};
let roomIdx = 1;
let roomInfo = {};
// const roomInfo = {
//     roomId : {
//         title : '사당에서 택시타실분',
//         users : ['kimyoungjin',]
//     }
// }

// const userRoom = {
//     kimyoungjin : roomId,
// }

app.get('/api/chat', (req, res) => {
    res.send(roomInfo);
});

// 새로운 채팅방 생성 api
app.post('/api/chat', (req, res) => {
    const { userName, title } = req.body;
    roomInfo[roomIdx] = { title, users: [userName] };
    console.log("채팅방 개설 : ", title);
    res.send({
        isSuccess: true,
        code: 200,
        message: "채팅방 개설 성공",
        roomId: roomIdx++
    });
});

io.on('connection', (socket) => {
    console.log("소켓연결 : ", socket.id);
    socket.on('req_msg', (msg) => {
        console.log("메세지 받기", msg);
        io.emit('res_msg', msg);
    });
    
    // 새로운 채팅방 생성
    // socket.on('create_room', async({ userName, title }) => {
    //     roomInfo[roomIdx] = { title: title, users: [userName] };
    //     console.log("채팅방 개설 : ", title);
    //     joinRoom(socket, roomIdx, userName);
    //     roomIdx++;
    // }

    // 채팅방 참여
    socket.on('join_room', async ({ userName, roomId }) => {
        socket.join(roomId);
        console.log("현재 채팅방: ", roomInfo);
        console.log("roomId : ", roomId);
        roomInfo[roomId].users.push(userName);
        userRoom[userName] = roomId;
        console.log(`${userName} 채팅방 ${roomId} 참여`);
        io.to(roomId).emit('room_msg', { userName, msg: "방에 입장하였습니다." });
    });

    // 채팅방에 client 채팅 요청
    socket.on('req_room_msg', async({userName, msg}) => {
        // room 확인
        console.log("userName : ", userName);
        const roomId = userRoom[userName];
        console.log("current Room : ", roomId);
        io.to(roomId).emit('room_msg', { userName, msg });
    });

    // 채팅방 나가기
    socket.on('leave_room', async ({ userName, roomId }) => {
        socket.leave(roomId);
        delete userRoom[userName];
        roomInfo[roomId].users = roomInfo[roomId].users.filter((e) => e != userName);
        if (roomInfo[roomId].users.length === 0) {
            delete roomInfo[roomId];
            console.log(`${roomId} 채팅방 폭파`);
        }
        console.log(`${userName} 채팅방 ${roomId} 나감`);
    });

    socket.on('disconnect', async () => {
        console.log('user disconnected');
    });
});

module.exports = app;