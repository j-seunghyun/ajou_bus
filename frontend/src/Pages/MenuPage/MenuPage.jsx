import { Category } from "../../Components/MenuPage";
import { Header } from "../../Components/MenuPage/Header/Header";
import "./MenuPage.css";

const CATEGORY_LIST = [
  {
    src: "/assets/img/homebutton.png",
    title: "홈",
    route: "/",
  },
  {
    src: "/assets/img/loginbutton.png",
    title: "로그인",
    route: "/login",
  },
  {
    src: "/assets/img/noticebutton.png",
    title: "공지사항",
    route: "/notice",
  },
  {
    src: "/assets/img/infobutton.png",
    title: "학기 노선 정보",
    route: "/semester",
  },
  {
    src: "/assets/img/infobutton.png",
    title: "방학 노선 정보",
    route: "/vacation",
  },
  {
    src: "/assets/img/chatbutton.png",
    title: "아주 교통 채팅방",
    route: "/chat",
  },
];
export const MenuPage = () => {
  return (
    <div>
      <Header />
      <div className="Category__Container">
        {CATEGORY_LIST.map((category) => (
          <Category key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
};
