import axios from "../../../Util/axios";
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
  return axios
    .get("/api/chat")
    .then((res) => res.data)
    .then((res) => {
      const keys = Object.keys(res);
      return keys.map((key) => ({
        id: key,
        title: res[key].title,
      }));
    });
}

export const useChatModal = () => {
  const [open, setOpen] = useState(false);

  const handleModalToggle = () => setOpen((prev) => !prev);

  return { open, handleModalToggle };
};
