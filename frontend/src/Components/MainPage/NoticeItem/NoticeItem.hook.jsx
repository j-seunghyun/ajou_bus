import { useEffect } from "react";
import { useState } from "react";
import axios from "../../../Util/axios";

export const useGetNotice = ({ category }) => {
  const [allNoticeList, setAllNoticeList] = useState([]);
  const [noticeList, setNoticeList] = useState([]);
  useEffect(() => {
    axios.get("/api/notice").then(console.log);
  }, []);

  useEffect(() => {
    setNoticeList(
      allNoticeList.filter((notice) => notice?.category === category)
    );
  }, [category]);

  return noticeList;
};
