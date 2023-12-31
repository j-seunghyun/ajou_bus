import axios from "axios";
import { getCookie } from "./LocalStorage";

const _ = axios.create({
  baseURL: "http://ec2-43-200-4-177.ap-northeast-2.compute.amazonaws.com:4000",
  headers: {
    token: getCookie(),
  },
});

export default _;
