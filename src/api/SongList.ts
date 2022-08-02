import request from "../utils/request";
//获取推荐歌单的详情
export const songListDetailsApi = (data: number | string) => {
    return request({
        url: `/playlist/detail?id=${data}`,
        method: 'GET'
    })
}
//获取歌单列表
export const songListApi = (data: number) => {
    return request({
        url: `/playlist/track/all?id=${data}&limit=10&offset=1`,
        method: 'GET'
    })
}