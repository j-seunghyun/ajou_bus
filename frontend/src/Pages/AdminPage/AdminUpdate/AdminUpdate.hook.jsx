import axios from "../../../Util/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useGetNoticeInfo = (id) => {
  const navigate = useNavigate();
  const [noticeInfo, setNoticeInfo] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`/api/notice/${id}`)
      .then((res) => {
        const [info] = res.data.result;
        setNoticeInfo(info);
        setLoading(false);
      })
      .catch((e) => {
        navigate("/admin");
      });
  }, [id]);

  return { loading, noticeInfo };
};
