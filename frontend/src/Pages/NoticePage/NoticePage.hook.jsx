import { useEffect } from "react";
import { useState } from "react";
import axios from "../../Util/axios";

const INIT_NOTICE = {
  noticeId: 0,
  title: "",
  context: "",
  category: "",
  createdAt: "",
};

export const useGetNotice = (id) => {
  const [notice, setNotice] = useState(INIT_NOTICE);

  useEffect(() => {
    axios
      .get(`/api/notice/${id}`)
      .then((res) => {
        const [data] = res.data.result;
        return data;
      })
      .then(setNotice)
      .catch(() => setNotice(INIT_NOTICE));
  }, [id]);

  return notice;
};
