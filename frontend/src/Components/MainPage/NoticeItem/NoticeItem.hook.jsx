import { useEffect } from "react";
import { useState } from "react";
import axios from "../../../Util/axios";

export const useGetNotice = ({ category }) => {
  const [allNoticeList, setAllNoticeList] = useState([]);
  const [noticeList, setNoticeList] = useState([]);
  const [refetch, setRefetch] = useState(0);

  const fetchData = () => {
    axios
      .get("/api/notice")
      .then((res) => res.data.result)
      .then(setAllNoticeList);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (allNoticeList.length === 0) return;

    if (category === "전체") setNoticeList(allNoticeList);
    else
      setNoticeList(
        allNoticeList.filter((notice) => notice?.category === category)
      );
  }, [category, allNoticeList]);

  useEffect(() => {
    fetchData();
  }, [refetch]);

  return { noticeList, setRefetch };
};
