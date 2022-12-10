import { Category, Header, NoticeItem } from "../../Components/MainPage";
import "./MainPage.css";
import { useSelectCategory } from "./MainPage.hook";

export const MainPage = () => {
  const { category, handleSelectCategory } = useSelectCategory();
  return (
    <div>
      <Header />
      <Category handleSelectCategory={handleSelectCategory} />
      <NoticeItem category={category} />
    </div>
  );
};
