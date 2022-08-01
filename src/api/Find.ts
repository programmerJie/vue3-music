import request from '../utils/request'

//获取轮播图
export const BannerApi = () => {
    return request({
        url: '/banner?type=2',
        method: 'GET'
    })
}
//获取推荐歌单
export const recommendMusicApi = () => {
    return request({
        url: '/personalized?limit=6',
        method: 'GET'
    })
}
//获取推荐歌单的详情
export const songListDetailsApi = (data: number | string) => {
    return request({
        url: `/playlist/detail?id=${data}`,
        method: 'GET'
    })
}
//获取默认搜索关键字
export const searchKwordsApi = () => {
    return request({
        url: '/search/default',
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
//获取歌单评论
export const songlistCommentApi = (data: number) => {
    return request({
        url: `/comment/playlist?id=${data}`,
        method: 'GET'
    })
}