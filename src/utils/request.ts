import axios from "axios";

const request = axios.create({
  baseURL: "https://music-api-theta-henna.vercel.app",
});
export default request;
