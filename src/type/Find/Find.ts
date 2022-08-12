//定义轮播的数据类型
export interface FindTypeBanners {
    data: Array<string>;
}
//定义推荐歌单的数据类型
export interface FindTypeRecommendMusicList {
    data: Array<any>;
}
//定义搜索关键字的数据类型
export interface FindTypeSearchKwords {
    name: string
}
//定义推荐歌曲的数据类型
export interface FindTypeRecommendSong {
    data: any
}