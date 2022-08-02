import request from '../utils/request'

//获取默认搜索关键字
export const searchKwordsApi = () => {
    return request({
        url: '/search/default',
        method: 'GET'
    })
}

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



