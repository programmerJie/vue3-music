import request from "../../utils/request";

//获取mv地址
export const MvApi = (data: number) => {
  return request({
    url: `/mv/url?id=${data}`,
    method: "GET",
  });
};
//获取mv评论
export const MvCommentApi = (data: number) => {
  return request({
    url: `/comment/mv?id=${data}`,
    method: "GET",
  });
};
