<template>
  <!--  导航栏-->
  <div class="navBar">
    <div>
      <span @click="btn"><i class="iconfont">&#xe697;</i></span>
      <span>mv</span>
    </div>
    <div>
      <span><i class="iconfont">&#xe86e;</i></span>
    </div>
  </div>
  <!--  视频播放-->
  <div class="video">
    <video controls autoplay :src="mv.url"></video>
  </div>
  <!--  评论区-->
  <div class="commentTitle">
    <div class="left">
      <span>评论区({{ mv.total }})</span>
    </div>
    <div class="right">
      <span @click="btn1" :class="{ style1: ifShow.btn1 }">推荐</span>
      <span @click="btn2" :class="{ style2: ifShow.btn2 }">最热</span>
      <span @click="btn3" :class="{ style2: ifShow.btn3 }">最新</span>
    </div>
  </div>
<!--  top1,top2,top3用于点击切换推荐,最热,最新-->
  <div
      class="commentContentTop1"
      v-for="item in mv.hotComments"
      :key="item"
      v-if="ifShow.btn1"
  >
    <div class="left">
      <span><img :src="item['user']['avatarUrl']" alt=""/></span>
      <div>
        <span>{{ item["user"]["nickname"] }}</span>
        <span>{{ item["timeStr"] }}</span>
      </div>
    </div>
    <div class="right">
      <span v-if="item['likedCount'] !== 0">{{ item["likedCount"] }}</span>
      <span><i class="iconfont">&#xec7f;</i></span>
    </div>
    <div class="footer">{{ item.content }}</div>
  </div>
  <div
      class="commentContentTop2"
      v-for="item in mv.hotComments"
      :key="item"
      v-if="ifShow.btn2"
  >
    <div class="left">
      <span><img :src="item['user']['avatarUrl']" alt=""/></span>
      <div>
        <span>{{ item["user"]["nickname"] }}</span>
        <span>{{ item["timeStr"] }}</span>
      </div>
    </div>
    <div class="right">
      <span v-if="item['likedCount'] !== 0">{{ item["likedCount"] }}</span>
      <span><i class="iconfont">&#xec7f;</i></span>
    </div>
    <div class="footer">{{ item.content }}</div>
  </div>
  <div
      class="commentContentTop3"
      v-for="item in mv.comments"
      :key="item"
      v-if="ifShow.btn3"
  >
    <div class="left">
      <span><img :src="item['user']['avatarUrl']" alt=""/></span>
      <div>
        <span>{{ item["user"]["nickname"] }}</span>
        <span>{{ item["timeStr"] }}</span>
      </div>
    </div>
    <div class="right">
      <span v-show="item['likedCount'] !== 0">{{ item["likedCount"] }}</span>
      <span><i class="iconfont">&#xec7f;</i></span>
    </div>
    <div class="footer">{{ item.content }}</div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, onMounted} from "vue";
import {MvApi, MvCommentApi} from "../../../api/Find/Mv";
import {useRouter, useRoute} from "vue-router";
import {MvType} from "../../../type/Find/Mv";

const router = useRouter();
const route = useRoute();
let mv: MvType = reactive({
  mvId: 0,
  url: "",
  comments: [],
  hotComments: [],
  total: 0,
});
onMounted(async () => {
  const res1 = await MvApi(route.query.id as any);
  mv.mvId = res1.data.data.id;
  mv.url = res1.data.data.url;
  const res2 = await MvCommentApi(route.query.id as any);
  mv.comments = res2.data.comments;
  mv.hotComments = res2.data.hotComments;
  mv.total = res2.data.total;
});
const btn = (): void => {
  router.go(-1);
};
let ifShow = reactive({
  btn1: true,
  btn2: false,
  btn3: false,
});
const btn1 = (): void => {
  ifShow.btn1 = true;
  ifShow.btn2 = false;
  ifShow.btn3 = false;
};
const btn2 = (): void => {
  ifShow.btn1 = false;
  ifShow.btn2 = true;
  ifShow.btn3 = false;
};
const btn3 = (): void => {
  ifShow.btn1 = false;
  ifShow.btn2 = false;
  ifShow.btn3 = true;
};
</script>

<style scoped lang="less">
@import "index";
</style>
