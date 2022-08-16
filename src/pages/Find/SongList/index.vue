<template>
  <!--  歌单背景图片-->
  <div class="backgroundImg">
    <img :src="songListdetails.img" alt=""/>
  </div>
  <!--  导航栏-->
  <div class="navBar">
    <div>
      <span @click="btn"><i class="iconfont">&#xe697;</i></span>
      <span>歌单</span>
    </div>
    <div>
      <span><i class="iconfont">&#xe622;</i></span>
      <span><i class="iconfont">&#xe8c4;</i></span>
    </div>
  </div>
  <!--  歌单描述-->
  <div class="content">
    <div class="left">
      <p v-if="songListdetails.img!==''">
        <span><i class="iconfont">&#xe600;</i></span>
        <span>{{ count(songListdetails.palyCount) }}</span>
      </p>
      <van-image :src="songListdetails.img" lazy-load radius="9px" class="img">
        <template v-slot:loading>
          <van-loading/>
        </template>
      </van-image>
    </div>
    <div class="right">
      <p>
        <span>{{ result1(songListdetails.name) }} </span>
      </p>
      <p>
        <span>
          <van-image :src="songListdetails.userImg" lazy-load radius="50%" class="img">
        <template v-slot:loading>
            <van-loading/>
        </template>
          </van-image>
        </span>
        <span>{{ result2(songListdetails.nickName) }}</span>
        <span><i class="iconfont">&#xe625;</i></span>
      </p>
      <p>
        <span>{{ result3(songListdetails.description) }}</span>
        <span><i class="iconfont">&#xe625;</i></span>
      </p>
    </div>
  </div>
  <!--  清除浮动-->
  <div class="clear"></div>
  <!--  标签栏-->
  <div class="footer">
    <div>
      <span><i class="iconfont">&#xe60f;&nbsp;</i></span>
      <span>{{ subscribedCount(songListdetails.subscribedCount) }}</span>
    </div>
    <div>
      <router-link
          :to="{ path: '/comment', query: { id: route.query.id } }"
      >
        <span><i class="iconfont">&#xe763;&nbsp;</i></span>
        <span>{{ songListdetails.commentCount }}</span>
      </router-link>
    </div>
    <div @click="showShare = true">
      <span><i class="iconfont">&#xe86e;&nbsp;</i></span>
      <span>{{ songListdetails.shareCount }} </span>
    </div>
  </div>
  <!--  播放列表-->
  <div class="songListTitle">
    <div>
      <span><i class="iconfont">&#xe626;</i></span>
      <span>播放全部 </span>
      <span>({{ songListdetails.trackCount }})</span>
    </div>
    <div>
      <span><i class="iconfont">&#xe668;</i></span>
      <span><i class="iconfont">&#xe669;</i></span>
    </div>
  </div>
  <div
      class="songListMusic"
      v-for="(item, index) in songList.music"
      :key="item">
    <div class="click" @click="hello(item.id)">
      <div class="left" @click="store.musicId(item)">
        <span class="leftSpan">{{ index + 1 }}</span>
        <div class="leftDiv">
          <span>{{ result4(item.name) }}</span>
          <span>{{ item["ar"][0].name }}-{{ result5(item["al"].name) }}</span>
        </div>
      </div>
    </div>
    <div class="right">
      <router-link :to="{ path: '/mv', query: { id: item['mv'] } }">
        <span v-if="item['mv'] !== 0"><i class="iconfont">&#xe665;</i></span>
      </router-link>
      <span><i class="iconfont">&#xe8c4;</i></span>
    </div>
  </div>
  <!--  style用于与底部播放组件保持距离-->
  <div class="style"></div>
  <!--  播放组件-->
  <play-er></play-er>
</template>
<script lang="ts" setup>
import {useRouter, useRoute} from "vue-router";
import {onMounted, reactive, computed, ref} from "vue";
import {songListDetailsApi, songListApi, musicIfUseApi} from "../../../api/Find/SongList";
import PlayEr from "../../../components/playEr.vue";
import {storeData} from "../../../store";
import {SongListDetailsType, SongListType} from "../../../type/Find/SongList";

const router = useRouter();
const route = useRoute();
const store = storeData();
const btn = () => {
  router.go(-1);
};
let songListdetails: SongListDetailsType = reactive({
  img: "",
  palyCount: 0,
  name: "",
  userImg: "",
  nickName: "",
  description: "",
  subscribedCount: "",
  commentCount: "",
  shareCount: "",
  trackCount: "",
});
const hello = async (data: number) => {
  // const res = await musicIfUseApi(data)
  // console.log(res.data.message)
}
const songList: SongListType = reactive({
  music: [],
});
onMounted(async () => {
  const res = await songListDetailsApi(route.query.id as any);
  songListdetails.img = res.data.playlist.coverImgUrl;
  songListdetails.palyCount = res.data.playlist.playCount;
  songListdetails.name = res.data.playlist.name;
  songListdetails.userImg = res.data.playlist.creator.avatarUrl;
  songListdetails.nickName = res.data.playlist.creator.nickname;
  songListdetails.description = res.data.playlist.description;
  songListdetails.subscribedCount = res.data.playlist.subscribedCount;
  songListdetails.commentCount = res.data.playlist.commentCount;
  songListdetails.shareCount = res.data.playlist.shareCount;
  songListdetails.trackCount = res.data.playlist.trackCount;
  const res2 = await songListApi(route.query.id as any);
  songList.music = res2.data.songs;
});
//把播放次数的数字转换为汉字
const count = (data: number): string | number => {
  if (data >= 100000000) {
    return (data / 100000000).toFixed(1) + "亿";
  } else if (data >= 10000) {
    return (data / 10000).toFixed(1) + "万";
  } else {
    return data;
  }
};
//把订阅的人数的数字转换为汉字
const subscribedCount = (data: number): string | number => {
  if (data >= 100000) {
    return (data / 10000).toFixed(1) + "万";
  } else {
    return data;
  }
};
//判断歌单列表标题的长度,如果超过就省略
const result1 = (data: string): string => {
  if (data.length >= 14) {
    return data.slice(0, 14) + "...";
  } else {
    return data;
  }
};
//判断歌单列表用户名字的字符长度,如果超过就省略
const result2 = (data: string): string => {
  if (data.length >= 18) {
    return data.slice(0, 18) + "...";
  } else {
    return data;
  }
};
//判断歌单列表描述歌单的字符长度,如果超过就省略
const result3 = (data: string) => {
  if (data.length >= 16) {
    return data.slice(0, 16) + "...";
  } else if (data.length === 0) {
    return data + '介绍:无'
  } else {
    return data
  }
};
//判断歌单列表列歌名的字符长度,如果超过就省略
const result4 = (data: string): string => {
  if (data.length >= 16) {
    return data.slice(0, 16) + "...";
  } else {
    return data;
  }
};
//判断歌单列表里歌名的字符长度,如果超过就省略
const result5 = (data: string): string => {
  if (data.length >= 12) {
    return data.slice(0, 12) + "...";
  } else {
    return data;
  }
};
</script>

<style scoped lang="less">
@import "../../../assets/CSS/Find/SongList/index";
</style>
