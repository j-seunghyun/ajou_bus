import axios from "../../../Util/axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const AdminUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [noticeInfo, setNoticeInfo] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`/api/notice/${id}`)
      .then((res) => {
        const info = res.data.result;
        setNoticeInfo(info);
        setLoading(false);
      })
      .catch((e) => {
        navigate("/admin");
      });
  }, [id]);
  if (loading) {
    return <div>...loading</div>;
  }
  const { category, context, updatedAt, title } = noticeInfo;
  return <div>AdminUpdate</div>;
};
