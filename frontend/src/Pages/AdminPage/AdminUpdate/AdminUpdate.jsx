import { useParams } from "react-router-dom";
import { useGetNoticeInfo } from "./AdminUpdate.hook";
import { AdminSelect } from "../../../Components/AdminPage/AdminMain/Select/Select";
import { useHandleNotice } from "../AdminCreate/AdminCreate.hook";

export const AdminUpdate = () => {
  const { id } = useParams();
  const { loading, noticeInfo } = useGetNoticeInfo(id);
  const { context, title } = noticeInfo ?? { context: "", title: "" };
  const {
    noticeState,
    handleNoticeInput,
    handleNoticeUpdate,
    handleSelectCategory,
  } = useHandleNotice({ _title: title, _context: context });

  if (loading) {
    return <div>...loading</div>;
  }
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
        <button id="notice_register_button" onClick={handleNoticeUpdate(id)}>
          수정하기
        </button>
      </div>
    </div>
  );
};
