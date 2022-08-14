<template>
  <van-popup
      v-model:show="show"
      position="left"
      :style="{ width: '80%', height: '100%' }"
  >
    目录
  </van-popup>
  <!--  导航栏-->
  <div class="navbar">
    <div>
      <i class="iconfont" @click="showPopup">&#xe60c;</i>
    </div>
    <div class="search">
      <router-link to="/search">
        <div>
          <span><i class="iconfont">&#xe622;</i></span>
          <span>{{ searchKwords.name }}</span>
        </div>
      </router-link>
    </div>
    <div><i class="iconfont">&#xe7e8;</i></div>
  </div>
  <!--  轮播-->
  <div class="bannar">
    <van-swipe
        :autoplay="3000"
        lazy-render
        indicator-color="white"
        :show-indicators="false"
        style="border-radius: 9px;height: 100%"
    >
      <van-swipe-item v-for="item in banners.data" :key="item">
        <van-image :src="item['pic']" lazy-load>
          <template v-slot:loading>
            <van-loading/>
          </template>
        </van-image>
      </van-swipe-item>
    </van-swipe>
  </div>
  <!--  标签栏-->
  <div class="tabBar">
    <van-swipe :loop="false" :width="70" :show-indicators="false">
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe65b;</i></p>
          <p>每日推荐</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe636;</i></p>
          <p>私人FM</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe637;</i></p>
          <p>歌单</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe6c5;</i></p>
          <p>排行榜</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe601;</i></p>
          <p>有声书</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe6b5;</i></p>
          <p>数字专辑</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe74f;</i></p>
          <p>直播</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe8bc;</i></p>
          <p>关注新歌</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe602;</i></p>
          <p>歌房</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe67e;</i></p>
          <p>游戏专区</p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
  <!--  虚线-->
  <div class="wire"></div>
  <!--  歌单列表-->
  <div class="recommendMUsic">
    <div class="recommendMusicTitle">
      <div>推荐歌单</div>
      <div>
        <span>更多</span>
        <span><i class="iconfont">&#xe625;</i></span>
      </div>
    </div>
    <div class="recommendMusicContent">
      <van-swipe
          :loop="false"
          :show-indicators="false"
          class="style"
          :width="120"
      >
        <van-swipe-item v-for="item in recommendMusicList.data" :key="item">
          <router-link :to="{ path: '/songList', query: { id: item['id'] } }">
            <p>
              <span><i class="iconfont">&#xe600;</i></span
              ><span>{{ count(item["playCount"]) }}</span>
            </p>
            <van-image :src="item['picUrl']" radius="10" style="width: 105px" lazy-load>
              <template v-slot:loading>
                <van-loading/>
              </template>
            </van-image>
            <p>{{ ellipsis(item["name"]) }}</p>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
  <!--  推荐歌曲-->
  <div class="recommendNewMusicTitle">
    <div>
      <span><i class="iconfont">&#xec08;</i></span>
      <span>推荐歌曲</span>
    </div>
    <div>
      <span><i class="iconfont">&#xe62b;</i></span>
      <span>播放</span>
    </div>
  </div>
  <div class="recommendNewMusicContent">
    <van-swipe class="my-swipe" :show-indicators="false">
      <van-swipe-item>
        <div class="song" v-for="item in recommendSong.data.slice(0,3)" :key="item">
          <div class="left" @click="store.recommendSong(item['picUrl'],item['name'],item['song']['artists'][0].name,item['id'])">
            <div>
              <img :src="item.picUrl" loading="lazy" alt="">
            </div>
            <div>
              <span>{{ item.name }}</span>
              <span>-</span>
              <span>{{ item['song']['artists'][0].name }}</span>
            </div>
          </div>
          <router-link :to="{ path: '/mv', query: { id: item['song']['mvid'] } }">
            <div class="right" v-if="item['song']['mvid']!==0"><i class="iconfont">&#xe665;</i></div>
          </router-link>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="song" v-for="item in recommendSong.data.slice(3,6)" :key="item" @click="store.recommendSong(item['picUrl'],item['name'],item['song']['artists'][0].name,item['id'])">
          <div class="left">
            <div>
              <img :src="item.picUrl" loading="lazy" alt="">
            </div>
            <div>
              <span>{{ item.name }}</span>
              <span>-</span>
              <span>{{ item['song']['artists'][0].name }}</span>
            </div>
          </div>
          <div class="right" v-if="item['song']['mvid']!==0">
            <i class="iconfont">&#xe665;</i>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="song" v-for="item in recommendSong.data.slice(6,9)" :key="item" @click="store.recommendSong(item['picUrl'],item['name'],item['song']['artists'][0].name,item['id'])">
          <div class="left">
            <div>
              <img :src="item.picUrl" loading="lazy" alt="">
            </div>
            <div>
              <span>{{ item.name }}</span>
              <span>-</span>
              <span>{{ item['song']['artists'][0].name }}</span>
            </div>
          </div>
          <router-link :to="{ path: '/mv', query: { id: item['song']['mvid'] } }">
            <div class="right"><i class="iconfont">&#xe665;</i></div>
          </router-link>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script setup lang="ts">
import {ref, onMounted, reactive} from "vue";
import {
  BannerApi,
  recommendMusicApi,
  searchKwordsApi,
} from "../../api/Find/Find";
import {useRouter} from "vue-router";
import {storeData} from "../../store";
import {recommendSongApi} from "../../api/Find/Find";
import {
  FindTypeBanners,
  FindTypeRecommendSong,
  FindTypeRecommendMusicList,
  FindTypeSearchKwords
} from "../../type/Find/Find";

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
</script>

<style scoped lang="less">
@import "../../assets/CSS/Find/index";
</style>
