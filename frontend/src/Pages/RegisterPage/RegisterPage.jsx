import { useState } from "react";
import "./RegisterPage.css";
import { useEmailValidation, useRegister } from "./RegisterPage.hook";

export const RegisterPage = () => {
  const { state, handleRegisterInfo, postRegister } = useRegister();
  const { check, postEamilValidation, postCheckEamilValidation } =
    useEmailValidation();
  const [token, setToken] = useState("");
  const handleToken = (e) => setToken(e.target.value);
  return (
    <div>
      <h1 id="register_main_title">아주 교통</h1>
      <div id="register_main_page_outer_frame">
        <div id="register_main_body_frame">
          <input
            type="text"
            id="register_id_field"
            name="schoolID"
            placeholder="학번을 입력해주세요."
            value={state.schoolID}
            onChange={handleRegisterInfo}
          />
          <input
            type="text"
            id="register_id_field"
            name="nickname"
            placeholder="닉네임을 입력해주세요"
            value={state.nickname}
            onChange={handleRegisterInfo}
          />
          <div id="register_email_authentication_frame">
            <input
              type="text"
              id="register_email_field"
              name="email"
              placeholder="email을 입력해주세요"
              value={state.email}
              onChange={handleRegisterInfo}
            />
            <button
              id="register_email_authentication_button"
              onClick={postEamilValidation}
            >
              인증번호 받기
            </button>
          </div>
          <div id="register_email_authentication_frame">
            <input
              type="text"
              id="register_email_authentication_number"
              onChange={handleToken}
              value={token}
            />
            <button
              id="register_email_authentication_button"
              onClick={postCheckEamilValidation(state.email, token)}
            >
              인증번호 검증
            </button>
          </div>
          <input
            type="password"
            id="register_password_field"
            name="password"
            value={state.password}
            onChange={handleRegisterInfo}
          />
          <button id="register_button" onClick={postRegister(check)}>
            회원 가입
          </button>
        </div>
      </div>
    </div>
  );
};
