import { Link } from "react-router-dom";
import { timeToString } from "../../../Util/TimeParser";
import { useGetNotice } from "./NoticeItem.hook";

export const NoticeItem = ({ category }) => {
  const noticeList = useGetNotice({ category });

  return (
    <div id="main_notice_frames">
      <ul id="main_notice_frame">
        {noticeList.map((notice) => (
          <li id="main_notice" key={notice.noticeId}>
            <Link to={`/notice/${notice.noticeId}`}>
              <div id="main_notice_first">
                <p id="main_notice_text">[공지사항]</p>
                <p id="main_notice_context">{notice.title}</p>
              </div>
              <div id="main_notice_second">
                <p id="main_notice_category">
                  [{notice.category} : {timeToString(notice.updatedAt)}]
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
