import { useState } from "react";

export const useChatTitle = () => {
  const [title, setTitle] = useState("");

  const handleTitleValue = (e) => setTitle(e.target.value);

  return { title, handleTitleValue };
};
