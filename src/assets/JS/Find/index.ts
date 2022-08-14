import {ref, onMounted, reactive} from "vue";
import {
    BannerApi,
    recommendMusicApi,
    searchKwordsApi,
} from "../../../api/Find/Find";
import {useRouter} from "vue-router";
import {storeData} from "../../../store";
import {recommendSongApi} from "../../../api/Find/Find";
import {
    FindTypeBanners,
    FindTypeRecommendSong,
    FindTypeRecommendMusicList,
    FindTypeSearchKwords
} from "../../../type/Find/Find";

const store = storeData();
const router = useRouter();
const show = ref(false);
const btns = () => {

}
//轮播图片
const banners: FindTypeBanners = reactive({
    data: [],
});
//推荐歌单
const recommendMusicList: FindTypeRecommendMusicList = reactive({
    data: [],
});
//搜索关键字
const searchKwords: FindTypeSearchKwords = reactive({
    name: "",
});
//vant组件库弹出层方法
const showPopup = (): void => {
    show.value = true;
};
//推荐歌曲
const recommendSong: FindTypeRecommendSong = reactive({
    data: [],

})
onMounted(async () => {
    const Banner = await BannerApi();
    banners.data = Banner.data.banners;
    const RecommendMusicList = await recommendMusicApi();
    recommendMusicList.data = RecommendMusicList.data.result;
    const Search = await searchKwordsApi();
    searchKwords.name = Search.data.data.realkeyword;
    store.search = Search.data.data.realkeyword
    const song = await recommendSongApi()
    recommendSong.data = song.data.result
    console.log(song.data.result)
});
//把推荐歌单的音乐播放次数转换为文字单位
const count = (data: number): string | number => {
    if (data >= 100000000) {
        return (data / 100000000).toFixed(1) + "亿";
    } else if (data >= 100000) {
        return (data / 10000).toFixed(1) + "万";
    } else {
        return data;
    }
};
//判断歌单列表描述歌单的字符长度,如果超过就省略
const ellipsis = (data: string): string => {
    if (data.length >= 9) {
        return data.slice(0, 9) + "...";
    } else {
        return data;
    }
};