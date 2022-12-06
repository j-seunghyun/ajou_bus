import "./AdminLogin.css";
import { useLogin } from "../../LoginPage/LoginPage.hook";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const { state, handleLoginInput, postLogin } = useLogin();
  const navigate = useNavigate();
  return (
    <div>
      <p id="login_page_intro">교통 관리자 페이지</p>

      <div id="login_outer_frame">
        <p id="login_text">Login to your Account</p>
        <div id="login_inner_frame">
          <label id="login_label">Email</label>
          <input
            type="text"
            id="login_textfield"
            name="email"
            value={state.email}
            onChange={handleLoginInput}
          />

          <label id="login_label">Password</label>
          <input
            type="password"
            id="login_textfield"
            name="password"
            value={state.password}
            onChange={handleLoginInput}
          />

          <button id="login_button" onClick={postLogin(navigate)}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
