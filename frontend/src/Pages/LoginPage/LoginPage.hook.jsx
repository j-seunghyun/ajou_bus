import axios from "../../Util/axios";
import { useState } from "react";

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
    axios.post("/api/signin", state).then((res) => {
      console.log(res);
      navigate("/");
    });
  };

  return { state, handleLoginInput, postLogin };
};
