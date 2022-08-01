<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<template>
  <router-view/>

  <van-tabbar route class="tabbar" active-color="red" v-if="route.path!=='/jump'">
    <van-tabbar-item replace to="/">
      <div><i class="iconfont">&#xe63b;</i></div>
      <div>发现</div>
    </van-tabbar-item>
    <van-tabbar-item replace to="/mine">
      <div><i class="iconfont">&#xe60c;</i></div>
      <div></div>
    </van-tabbar-item>
  </van-tabbar>
</template>

<style scoped lang="less">
.iconfont {
  font-family: "iconfont" !important;
  font-size: 35px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.tabbar {
  height: 90px;
  text-align: center;
}

</style>
