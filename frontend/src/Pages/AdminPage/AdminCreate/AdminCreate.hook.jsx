import axios from "../../../Util/axios";
import { useState } from "react";
import { useSelectCategory } from "../../MainPage/MainPage.hook";

export const useHandleNotice = () => {
  const { category, handleSelectCategory } = useSelectCategory();
  const [noticeState, setNoticeState] = useState({
    title: "",
    context: "",
  });
  const handleNoticeInput = (e) => {
    const { name, value } = e.target;
    setNoticeState({
      ...noticeState,
      [name]: value,
    });
  };
  const handleNoticeCreate = () => {
    axios
      .post("/api/notice", {
        ...noticeState,
        category,
      })
      .then(console.log);
  };

  return {
    noticeState,
    handleNoticeInput,
    handleNoticeCreate,
    handleSelectCategory,
  };
};
