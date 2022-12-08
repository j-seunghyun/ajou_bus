import "./NoticePage.css";
import "../MainPage/MainPage.css";
import { Link, useParams } from "react-router-dom";
import { useGetNotice } from "./NoticePage.hook";

export const NoticePage = () => {
  const { id } = useParams();
  const notice = useGetNotice(id);
  return (
    <div>
      <div id="head_outer_div">
        <div id="main_head_frame">
          <button id="head_menu_button">
            <img alt="menu_button" src="assets/img/menubuttonimage.png" />
          </button>
          <h1>공지사항</h1>
          <button id="head_login_button">
            <img alt="login_button" src="assets/img/user.png" />
          </button>
        </div>
      </div>
      <div id="notice_title_frame">
        <div id="notice_title_inner_frame">
          <p>{notice.title}</p>
        </div>
      </div>
      <div id="notice_title_sub_frame">
        <div id="notice_title_sub_inner_frame">
          <p id="notice_title_sub">
            {notice.category} | {notice.createdAt}
          </p>
        </div>
      </div>
      <div id="notice_content_frame">
        <div id="notice_content_inner_frame">
          <p id="main_notice_content">{notice.context}</p>
        </div>
      </div>
      <div id="notice_list_button_frame">
        <button id="notice_list_button">
          <Link to="/">목록</Link>
        </button>
      </div>
    </div>
  );
};
