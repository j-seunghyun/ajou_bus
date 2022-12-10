import { useParams } from "react-router-dom";
import { useGetNoticeInfo } from "./AdminUpdate.hook";

export const AdminUpdate = () => {
  const { id } = useParams();
  const { loading, noticeInfo } = useGetNoticeInfo(id);
  if (loading) {
    return <div>...loading</div>;
  }
  const { category, context, updatedAt, title } = noticeInfo;
  return <div>AdminUpdate</div>;
};
