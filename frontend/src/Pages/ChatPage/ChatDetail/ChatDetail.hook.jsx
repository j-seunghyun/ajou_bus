import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserId } from "../../../Util/LocalStorage";
import ClientSocket from "../../../Util/Socket";

export const useJoinChat = ({ handleAddMessage }) => {
  const naivgate = useNavigate();
  const { id: roomId } = useParams();

  const handleExitChat = () => {
    const userName = getUserId();
    const socket = new ClientSocket(userName);
    socket.socket.emit("exit");
    naivgate("/chat");
  };
  useEffect(() => {
    const userName = getUserId();
    if (!userName) return;
    const socket = new ClientSocket(userName);
    socket.socket.emit("join_room", { userName, roomId });
    socket.socket.on("room_msg", handleAddMessage);

    return () => {
      ClientSocket.instance = null;
      socket.socket.emit("leave_room", { userName, roomId });
      socket.socket.off("room_msg", handleAddMessage);
      socket.socket.disconnect();
    };
  }, []);

  return handleExitChat;
};

export const useChatMessage = () => {
  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = (message) =>
    setMessageList((prev) => [...prev, message]);

  const handleSendMessage = (userName, msg) => () => {
    const socket = new ClientSocket(userName);
    socket.socket.emit("req_room_msg", { userName, msg });
  };
  return { messageList, handleAddMessage, handleSendMessage };
};
