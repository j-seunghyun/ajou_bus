import axios from "../../Util/axios";
import { useState } from "react";
import { setCookie, setLevel, setUserId } from "../../Util/LocalStorage";

export const useLogin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleLoginInput = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const postLogin = (navigate) => () => {
    axios.post("/api/login", state).then((res) => {
      console.log(res.data);
      if (res.data.code !== 200) return;
      setCookie(res.data.result.token);
      setLevel(res.data.result.level);
      setUserId(state.email);
      navigate("/");
    });
  };

  return { state, handleLoginInput, postLogin };
};
