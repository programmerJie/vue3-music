import request from "../../utils/request";

export const searchApi = (data:any) => {
  return request({
    url: `/cloudsearch?keywords=${data}`,
    method: "GET",
  });
};
