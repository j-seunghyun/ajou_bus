import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const useGetChatList = () => {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    getChatList()
      .then(setChatList)
      .catch(() => setChatList([]));
  }, []);
  return chatList;
};

function getChatList() {
  return axios.get("/api/chat").then((res) => res.then);
}

export const useChatModal = () => {
  const [open, setOpen] = useState(false);

  const handleModalToggle = () => setOpen((prev) => !prev);

  return { open, handleModalToggle };
};
