<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<template>
  <router-view/>

  <van-tabbar route class="tabBar" active-color="red" v-if="route.path!=='/songList'&& route.path!=='/comment'">
    <van-tabbar-item replace to="/" class="find">
      <div><i class="iconfont">&#xe63b;</i></div>
      <div>发现</div>
    </van-tabbar-item>
    <van-tabbar-item replace to="/mine" class="mine">
      <div><i class="iconfont">&#xe60c;</i></div>
      <div>我的</div>
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

.tabBar {
  height: 90px;
  text-align: center;

  .find {
    div:nth-child(1) {
      i {
        font-size: 50px;
      }
    }

    div:nth-child(2) {
      padding-top: 10px;
      font-size: 25px;
    }
  }

  .mine {
    div:nth-child(1) {
      i {
        font-size: 50px;
      }
    }

    div:nth-child(2) {
      padding-top: 10px;
      font-size: 25px;
    }
  }
}

</style>
