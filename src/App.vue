<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, reactive, ref} from "vue";
import {storeData} from "./store";
import {lyricApi} from "./api/Find/Lyric";

const store = storeData();
const route = useRoute();
const yinyue = ref(null);
onMounted(async () => {
  store.audio = yinyue;
  console.log(store.lyric)
});
//解析戒烟的歌词
let arr = store.lyric.lrc.lyric.split(/\n/)
arr.forEach(item => {
  if (item === '') return
  let time = item.match(/\[(.+?)\]/g)
  let lyric = item.slice(10)
  if (lyric[0] === ']' || lyric[0] === '') {
    lyric = lyric.slice(1)
  }
  store.times.push(time)
  store.lyrics.push(lyric)

})
const show = ref(false);
const showPopup = () => {
  show.value = true;
};
const btn = () => {
  show.value = false;
};

</script>
<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive"/>
  </router-view>
  <audio
      :src="`https://music.163.com/song/media/outer/url?id=${store.music.id}.mp3`"
      controls
      @ended="store.ended()"
      @play="store.play()"
      @pause="store.pause()"
      ref="yinyue"
      v-show="false"
  ></audio>
  <div
      class="playEr"
      v-if="
      route.path !== '/comment' &&
      route.path !== '/songList' &&
      route.path !== '/mv' &&
      route.path !== '/search'
    "
  >
    <div class="left" @click="showPopup">
      <span>
        <van-image
            round
            :src="store.music.al.picUrl"
            class="img rotate1"
            :class="{ play: store.ifShow.ifFalse }"
        />
      </span>
      <span>{{ store.music.name }}</span>
      <span>-</span>
      <span>{{ store.music.ar[0].name }}</span>
    </div>
    <div class="right">
      <span v-if="store.ifShow.ifTrue" @click="store.play()"
      ><i class="iconfont">&#xe624;</i></span
      >
      <span v-if="store.ifShow.ifFalse" @click="store.pause()"
      ><i class="iconfont">&#xe629;</i></span
      >
      <span><i class="iconfont">&#xe640;</i></span>
    </div>
  </div>
  <van-tabbar
      route
      :border="false"
      class="tabBar"
      active-color="red"
      v-if="
      route.path !== '/songList' &&
      route.path !== '/comment' &&
      route.path !== '/mv' &&
      route.path !== '/search'
    "
  >
    <van-tabbar-item replace to="/" class="find">
      <div><i class="iconfont">&#xe63b;</i></div>
      <div>发现</div>
    </van-tabbar-item>
    <van-tabbar-item replace to="/blog" class="mine">
      <div><i class="iconfont">&#xe8b1;</i></div>
      <div>博客</div>
    </van-tabbar-item>
    <van-tabbar-item replace to="/mine" class="mine">
      <div><i class="iconfont">&#xe66d;</i></div>
      <div>我的</div>
    </van-tabbar-item>
    <van-tabbar-item replace to="/follow" class="mine">
      <div><i class="iconfont">&#xe8bc;</i></div>
      <div>关注</div>
    </van-tabbar-item>
    <van-tabbar-item replace to="/yuncun" class="mine">
      <div><i class="iconfont">&#xe635;</i></div>
      <div>云村</div>
    </van-tabbar-item>
  </van-tabbar>
  <van-popup
      v-model:show="show"
      position="bottom"
      :style="{ height: '100%' }"
      class="popup"
  >
    <van-image :src="store.music.al.picUrl" lazy-load class="img">
      <template v-slot:loading>
        <van-loading type="spinner" size="20"/>
      </template>
    </van-image>
    <div class="top">
      <div @click="btn">
        <span><i class="iconfont">&#xe69b;</i></span>
      </div>
      <div>
        <span>{{ store.music.name }}</span>
        <span>{{ store.music.ar[0].name }}</span>
      </div>
      <div>
        <span><i class="iconfont">&#xe86e;</i></span>
      </div>
    </div>
    <div class="content1" v-if="store.lyricIfShow.ifTrue" @click="store.lyricTrue()">
      <div>
        <img
            src="./assets/images/needle.png"
            alt=""
            :class="{ rotate3: store.ifShow.ifFalse }"
        />
      </div>
      <div>
        <img
            src="./assets/images/disc.png"
            alt=""
            class="rotate2"
            :class="{ play: store.ifShow.ifFalse }"
        />
        <img
            :src="store.music.al.picUrl"
            alt=""
            class="rotate2"
            :class="{ play: store.ifShow.ifFalse }"
        />
      </div>
    </div>
    <div class="content2" v-if="store.lyricIfShow.ifFalse" @click="store.lyricFalse()">
      <div v-for="item in store.lyrics" :key="item">{{ item }}</div>
    </div>
    <div class="footer">
      <div>
        <span><i class="iconfont">&#xe60e;</i></span>
        <span><i class="iconfont">&#xe668;</i></span>
        <span><i class="iconfont">&#xe607;</i></span>
        <span><i class="iconfont">&#xe763;</i></span>
        <span><i class="iconfont">&#xe8c4;</i></span>
      </div>
      <div>
        <span><i class="iconfont">&#xe61f;</i></span>
        <span><i class="iconfont">&#xe78a;</i></span>
        <span v-if="store.ifShow.ifTrue" @click="store.play()"
        ><i class="iconfont">&#xe624;</i></span
        >
        <span v-if="store.ifShow.ifFalse" @click="store.pause()"
        ><i class="iconfont">&#xe629;</i></span
        >
        <span><i class="iconfont">&#xe7a5;</i></span>
        <span><i class="iconfont">&#xe637;</i></span>
      </div>
    </div>
  </van-popup>
</template>
<style scoped lang="less">
@import "./assets/CSS/App";
</style>
