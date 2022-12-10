import { Link } from "react-router-dom";
import AdminNotice from "../../../Components/AdminPage/AdminMain/AdminNotice";
import { AdminSelect } from "../../../Components/AdminPage/AdminMain/Select/Select";
import { useSelectCategory } from "../../MainPage/MainPage.hook";
import "./AdminMain.css";

export const AdminMain = () => {
  const { category, handleSelectCategory } = useSelectCategory();
  return (
    <div>
      <h1 id="notice_head">아주 교통 관리자 페이지</h1>
      <p id="notice">공지사항</p>
      <div id="notice_menu_button_div">
        <AdminSelect handleSelectCategory={handleSelectCategory} />
        <Link to="/admin/create">
          <button id="create">글쓰기</button>
        </Link>
      </div>
      <div id="notices_div">
        <div id="notices_frame">
          <AdminNotice category={category} />
        </div>
      </div>
    </div>
  );
};
