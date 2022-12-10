import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div id="head_outer_div">
      <div id="main_head_frame">
        <Link to="/" id="head_menu_button">
          <img alt="menu_button" src="assets/img/closebutton.png" />
        </Link>
        <h1>아주교통</h1>
        <div />
      </div>
    </div>
  );
};
