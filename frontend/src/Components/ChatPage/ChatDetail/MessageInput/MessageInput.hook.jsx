import { useState } from "react";

export const useChatMessageInput = () => {
  const [message, setMessage] = useState("");

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleInitMessage = () => {
    setMessage("");
  };

  return { message, handleChangeMessage, handleInitMessage };
};
