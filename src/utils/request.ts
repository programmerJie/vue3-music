import axios from "axios";

const request = axios.create({
  baseURL: "https://netease-cloud-music-api-theta-ecru.vercel.app",
});
export default request;
