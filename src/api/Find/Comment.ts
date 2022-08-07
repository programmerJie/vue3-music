//获取歌单评论
import request from "../../utils/request";

export const songlistCommentApi = (data: number) => {
    return request({
        url: `/comment/playlist?id=${data}`,
        method: "GET",
    });
};

