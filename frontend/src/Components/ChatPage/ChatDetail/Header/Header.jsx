import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div id="head_outer_div">
      <div id="main_head_frame">
        <button id="head_menu_button">
          <Link to="/menu">
            <img alt="menu_button" src="assets/img/menubuttonimage.png" />
          </Link>
        </button>
        <h1>아주 chat</h1>
        <div />
      </div>
    </div>
  );
};
