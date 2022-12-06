import axios from "../../Util/axios";
import { useState } from "react";

export const useRegister = () => {
  const [state, setState] = useState({
    schoolID: "",
    nickname: "",
    email: "",
    password: "",
  });

  const handleRegisterInfo = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const postRegister = (flag) => () => {
    if (!flag) return;
    axios.post("/api/signup", state).then(console.log);
  };

  return {
    state,
    handleRegisterInfo,
    postRegister,
  };
};

let validation;
export const useEmailValidation = () => {
  const [check, setCheck] = useState(false);
  const postEamilValidation = (email) => () => {
    axios.post(`/api/email?email=${email}`).then((res) => {
      console.log(res);
      validation = res;
    });
  };
  const postCheckEamilValidation = (email, token) => () => {
    axios
      .post(`/api/email/valid`, {
        email,
        token,
      })
      .then((res) => {
        console.log(res);
        setCheck(true);
      });
  };

  return { check, postEamilValidation, postCheckEamilValidation };
};
