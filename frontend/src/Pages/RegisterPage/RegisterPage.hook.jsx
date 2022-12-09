import axios from "../../Util/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    studentID: "",
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
    axios.post("/api/signup", { ...state, level: 0 }).then((res) => {
      if (res.data.code !== 200) return;
      navigate("/login");
    });
  };

  return {
    state,
    handleRegisterInfo,
    postRegister,
  };
};

export const useEmailValidation = () => {
  const [check, setCheck] = useState(false);
  const postEamilValidation = (email) => () => {
    axios.post(`/api/email?email=${email}`).then((res) => {
      console.log(res);
    });
  };
  const postCheckEamilValidation = (email, token) => () => {
    axios
      .post(`/api/email/valid`, {
        email,
        token,
      })
      .then((res) => {
        if (res.data.code === 200) setCheck(true);
        return;
      });
  };

  return { check, postEamilValidation, postCheckEamilValidation };
};
