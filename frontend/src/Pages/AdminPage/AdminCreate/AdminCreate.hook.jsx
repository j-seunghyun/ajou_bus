import axios from "../../../Util/axios";
import { useState } from "react";
import { useSelectCategory } from "../../MainPage/MainPage.hook";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useHandleNotice = ({ _title, _context }) => {
  const navigate = useNavigate();
  const { category, handleSelectCategory } = useSelectCategory();
  const [noticeState, setNoticeState] = useState({
    title: _title ?? "",
    context: _context ?? "",
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

  const handleNoticeUpdate = (id) => () => {
    axios
      .put(`/api/notice/${id}`, {
        ...noticeState,
        category,
      })
      .then(console.log);
  };

  useEffect(() => {
    setNoticeState({
      title: _title,
      context: _context,
    });
  }, [_title, _context]);
  return {
    noticeState,
    handleNoticeInput,
    handleNoticeCreate,
    handleSelectCategory,
    handleNoticeUpdate,
  };
};
