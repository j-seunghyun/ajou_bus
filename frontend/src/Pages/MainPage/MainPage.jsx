import {
  Category,
  Footer,
  Header,
  NoticeItem,
} from "../../Components/MainPage";
import "./MainPage.css";

export const MainPage = () => {
  return (
    <div>
      <Header />
      <Category />
      <NoticeItem />
      <Footer />
    </div>
  );
};
