import axios from "axios";

const _ = axios.create({
  baseURL: "http://ec2-43-201-20-174.ap-northeast-2.compute.amazonaws.com:4000",
  withCredentials: true,
});

export default _;
