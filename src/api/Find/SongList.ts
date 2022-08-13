import request from "../../utils/request";
//获取推荐歌单的详情
export const songListDetailsApi = (data: number | string) => {
  return request({
    url: `/playlist/detail?id=${data}`,
    method: "GET",
  });
};
//获取歌单列表
export const songListApi = (data: number) => {
  return request({
    url: `/playlist/track/all?id=${data}&limit=10&offset=1`,
    method: "GET",
  });
};
//获取音乐url
export const musicUrlApi = (data: number) => {
  return request({
    url: `/song/url?id=${data}`,
    method: "GET",
  });
};
//获取音乐是否可用
export const musicIfUseApi = (data: any) => {
  return request({
    url: `/check/music?id=${data}`,
    method: "GET",
  });
};
