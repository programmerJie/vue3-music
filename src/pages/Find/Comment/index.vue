<template>
  <!--  导航栏-->
  <div class="navBar">
    <div>
      <span @click="btn"><i class="iconfont">&#xe697;</i></span>
      <span>评论({{ comment.total }})</span>
    </div>
    <div>
      <span><i class="iconfont">&#xe86e;</i></span>
    </div>
  </div>
  <!--  评论区-->
  <div class="commentTitle">
    <div class="left">
      <span>评论区</span>
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
      v-for="item in comment.hotComments"
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
      v-for="item in comment.hotComments"
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
      v-for="item in comment.comments"
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
import {useRouter, useRoute} from "vue-router";
import {songlistCommentApi} from "../../../api/Find/Comment";
import {onMounted, reactive} from "vue";
import {CommentType} from "../../../type/Find/Comment";

const router = useRouter();
const route = useRoute();
const comment: CommentType = reactive({
  total: 0,
  comments: [],
  hotComments: [],
});
let ifShow = reactive({
  btn1: true,
  btn2: false,
  btn3: false,
});
onMounted(async () => {
  const res = await songlistCommentApi(route.query.id as any);
  comment.total = res.data.total;
  comment.comments = res.data.comments;
  comment.hotComments = res.data.hotComments;
});
const btn = (): void => {
  router.go(-1);
};
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
@import "../../../assets/CSS/Find/Comment/index";
</style>
