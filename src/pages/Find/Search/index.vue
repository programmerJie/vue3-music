<template>
  <!--  导航栏-->
  <div class="navbar">
    <div>
      <i class="iconfont" @click="btn">&#xe697;</i>
    </div>
    <div>
      <div><i class="iconfont">&#xe622;</i></div>
      <div>
        <input type="search" :placeholder="store.search" v-model="song"
               style="color:#666666">
      </div>
    </div>
    <div @click="search(song)">搜索</div>
  </div>
  <!--  历史记录和删除-->
  <div class="delete" v-if="song!==''&&ifShow">
    <div>历史</div>
    <div @click="del"><i class="iconfont">&#xe8b6;</i></div>
  </div>
  <div class="addText">
    <span v-for="item in searchHistory.data" @click="click(item)">
      {{ item }}
    </span>
  </div>
  <div class="hotSearch" v-if="song===''">
    <div class="hotSearchTitle">
      <div>热搜榜</div>
      <div>
        <span><i class="iconfont">&#xe62b;</i></span>
        <span>播放</span>
      </div>
    </div>
    <div class="hotSearchContent" v-for="(item,index) in hotSearchList.data" :key="item"
         @click="clickName(item['searchWord'])">
      <div>{{ index + 1 }}</div>
      <div>{{ item['searchWord'] }}</div>
    </div>
  </div>
  <div class="songTitle" v-if="song!==''">
    <div>
      <span><i class="iconfont">&#xe624;</i></span>
      <span>播放全部</span>
    </div>
    <div><i class="iconfont">&#xe669;</i></div>
  </div>
  <div class="songContnet" v-for="item in SongList.data" :key="item" v-if="song!==''">
    <div @click="store.musicId(item)">
      <span>{{ result1(item['name']) }}</span>
      <span>{{ item['ar'][0]['name'] }}-{{ result2(item['al']['name']) }}</span>
    </div>
    <div>
      <router-link :to="{ path: '/mv', query: { id: item['mv'] } }">
        <span v-if="item['mv']!==0"><i class="iconfont">&#xe665;</i></span>
      </router-link>
      <span><i class="iconfont">&#xe8c4;</i></span>
    </div>
  </div>
  <div class="style"></div>
  <play-er></play-er>
</template>

<script lang="ts" setup>
import PlayEr from "../../../components/playEr.vue";
import {useRouter} from "vue-router";
import {useRoute} from "vue-router";
import {searchApi, hotSearchListApi} from "../../../api/Find/Search";
import {onMounted, onUpdated, reactive, ref, watch} from "vue";
import {storeData} from "../../../store";

const searchHistory: any = reactive({
  data: [],
})
const store = storeData();
let song = ref('');
const route = useRoute();
const router = useRouter();
const ifShow = ref(false)
const hotSearchList = reactive({
  data: []
})
const SongList = reactive({
  data: []
})
const btn = () => {
  router.go(-1);
};
const click = (data: any) => {
  song.value = data
}
//判断歌单列表列歌名的字符长度,如果超过就省略
const result1 = (data: string): string => {
  if (data.length >= 16) {
    return data.slice(0, 16) + "...";
  } else {
    return data;
  }
};
//判断歌单列表里歌名的字符长度,如果超过就省略
const result2 = (data: string): string => {
  if (data.length >= 12) {
    return data.slice(0, 12) + "...";
  } else {
    return data;
  }
};
const search = async (data: any) => {
  ifShow.value = true
  if (data === '') {
  } else {
    searchHistory.data.push(data)
  }
  //如果值为空就用pinia默认的搜索关键字,否则就是用户输入的搜索关键字
  if (data === '') {
    const res = await searchApi(store.search as any);
    SongList.data = res.data.result.songs
  } else {
    const res = await searchApi(data);
    SongList.data = res.data.result.songs
  }
}
const del = () => {
  searchHistory.data = []
  ifShow.value = false
  song.value = ''
}
const clickName = (data: any) => {
  song.value = data
}
onMounted(async () => {
  const res = await hotSearchListApi()
  hotSearchList.data = res.data.data
})
</script>

<style scoped lang="less">
@import "../../../assets/CSS/Find/Search/index";
</style>
