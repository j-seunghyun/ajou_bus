import { AdminSelect } from "../../../Components/AdminPage/AdminMain/Select/Select";
import "./AdminCreate.css";
import { useHandleNotice } from "./AdminCreate.hook";

export const AdminCreate = () => {
  const {
    noticeState,
    handleNoticeInput,
    handleNoticeCreate,
    handleSelectCategory,
  } = useHandleNotice({ _title: "", _context: "" });
  return (
    <div>
      <h1 id="notice_head">아주 교통 관리자 페이지</h1>
      <h1 id="notice">공지사항 등록</h1>
      <div id="notice_categories_frame">
        <p id="notice_route">공지사항 노선 설정</p>
        <AdminSelect handleSelectCategory={handleSelectCategory} />
      </div>
      <div id="notice_inputfields_frame">
        <p id="notice_name">공지사항 이름</p>
        <input
          type="text"
          id="notice_name_field"
          value={noticeState.title}
          name="title"
          onChange={handleNoticeInput}
        />
        <p id="notice_content">공지사항 내용</p>
        <textarea
          type="text"
          id="notice_content_field"
          value={noticeState.context}
          name="context"
          onChange={handleNoticeInput}
        />
      </div>

      <div id="notice_register_button_div">
        <button id="notice_register_button" onClick={handleNoticeCreate}>
          등록하기
        </button>
      </div>
    </div>
  );
};
