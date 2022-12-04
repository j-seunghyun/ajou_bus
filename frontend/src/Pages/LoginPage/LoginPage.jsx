import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useLogin } from "./LoginPage.hook";
export const LoginPage = () => {
  const { state, handleLoginInput, postLogin } = useLogin();
  const navigate = useNavigate();

  return (
    <div>
      <h1 id="login_main_page_title">아주 교통</h1>
      <div id="login_main_body_frame">
        <h1 id="login_page_welcome_text">Login to your Account</h1>
        <p id="login_sub_message">
          ------------- or Sign in with Email -------------
        </p>
        <div id="login_components_frame">
          <div>
            <p id="login_main_email_text">Email</p>
            <input
              type="text"
              id="login_main_email_textfield"
              name="email"
              value={state.email}
              onChange={handleLoginInput}
            />
          </div>
          <div>
            <p id="login_main_password_text">Password</p>
            <input
              type="password"
              id="login_main_password_textfield"
              name="password"
              value={state.password}
              onChange={handleLoginInput}
            />
          </div>
          <button id="login_main_button" onClick={postLogin(navigate)}>
            Login
          </button>
          <button id="sign_in_button" onClick={() => navigate("/register")}>
            Sign-in
          </button>
        </div>
      </div>
    </div>
  );
};
