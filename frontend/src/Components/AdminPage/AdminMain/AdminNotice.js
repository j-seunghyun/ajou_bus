import axios from "../../../Util/axios";
import { Link } from "react-router-dom";
import { timeToString } from "../../../Util/TimeParser";
import { useGetNotice } from "../../MainPage/NoticeItem/NoticeItem.hook";

const AdminNotice = ({ category }) => {
  const noticeList = useGetNotice({ category });
  const handleDeleteNotice = (id) => () => {
    axios.delete(`/api/notice/${id}`).then(console.log);
  };
  return (
    <ul>
      {noticeList.map((notice) => (
        <li key={notice.noticeId} id="notice_frame">
          <span>[공지사항 : {notice.category}]</span>
          <span>{notice.title}</span>
          <span>{timeToString(notice.updatedAt)}</span>
          <div id="button_div">
            <Link to={`/admin/update/${notice.noticeId}`} id="modify">
              수정
            </Link>
            <button id="create" onClick={handleDeleteNotice(notice.noticeId)}>
              삭제
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AdminNotice;
