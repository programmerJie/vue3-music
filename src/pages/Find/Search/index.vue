<template>
  <div class="navbar">
    <div>
      <i class="iconfont" @click="btn()">&#xe697;</i>
    </div>
    <div><input type="text" placeholder="hello" v-model="song"/></div>
    <div @click="search">搜索</div>
  </div>
  <play-er></play-er>
</template>

<script lang="ts" setup>
import PlayEr from "../../../components/playEr.vue";
import {useRouter} from "vue-router";
import {useRoute} from "vue-router";
import {searchApi} from "../../../api/Find/Search";
import {reactive, ref} from "vue";
const route = useRoute();
const router = useRouter();
const btn = () => {
  router.go(-1);
};
const song = ''
const search = async () => {
  const res = await searchApi(song);
  console.log(res)
};
</script>

<style scoped lang="less">
.iconfont {
  font-family: "iconfont" !important;
  font-size: 25px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.navbar {
  margin: 29px;
  height: 70px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;

  div:nth-child(1) {
    i {
      font-size: 40px;
    }
  }

  div:nth-child(2) {
    input {
      width: 580px;
      outline: none;
      height: 70px;
      border-radius: 35px;
      border: none;
      background: #f5f2f0;
      text-align: center;
      font-size: 25px;
      display: block;
    }
  }

  div:nth-child(3) {
    font-size: 28px;
  }
}
</style>
