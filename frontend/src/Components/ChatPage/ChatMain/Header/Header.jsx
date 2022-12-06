import { Link } from "react-router-dom";
import "./Header.css";
export const Header = () => {
  return (
    <div id="head_outer_div">
      <div id="main_head_frame">
        <Link to="/menu" id="head_menu_button">
          <img alt="menu_button" src="assets/img/menubuttonimage.png" />
        </Link>
        <h1>아주 chat</h1>
        <button id="head_login_button">
          <img alt="login_button" src="assets/img/user.png" />
        </button>
      </div>
    </div>
  );
};
