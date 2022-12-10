import io from "socket.io-client";

const SERVER_URL =
  "http://ec2-43-201-20-174.ap-northeast-2.compute.amazonaws.com";
const PORT = "4000";

export default class ClientSocket {
  socket;

  // eslint-disable-next-line no-use-before-define
  static instance;

  constructor(id) {
    // eslint-disable-next-line no-constructor-return
    if (ClientSocket.instance) return ClientSocket.instance;
    this.connect();
    ClientSocket.instance = this;
    this.setUid(id);
  }

  connect() {
    this.socket = io(`${SERVER_URL}:${PORT}`, { transports: ["websocket"] });
  }

  setUid(id) {
    this.socket?.emit("setUid", id);
  }
}
