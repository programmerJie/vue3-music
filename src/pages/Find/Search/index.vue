<template>
  <div class="navbar">
    <div>
      <i class="iconfont" @click="btn">&#xe697;</i>
    </div>
    <div>
      <div><i class="iconfont">&#xe622;</i></div>
      <div>
        <input @click="hello" type="text" :placeholder="store.search" v-model="song"
               style="color:#666666">
      </div>
    </div>

    <div @click="search(song)">搜索</div>
  </div>
  <play-er></play-er>
</template>

<script lang="ts" setup>
import PlayEr from "../../../components/playEr.vue";
import {useRouter} from "vue-router";
import {useRoute} from "vue-router";
import {searchApi} from "../../../api/Find/Search";
import {reactive, ref, watch} from "vue";
import {storeData} from "../../../store";

const store = storeData();
let song = '';
const route = useRoute();
const router = useRouter();
const btn = () => {
  router.go(-1);
};
const search = async (data: any) => {
  //如果值为空就用pinia默认的搜索关键字,否则就是用户输入的搜索关键字
  if (data === null) {
    const res = await searchApi(store.search as any);
    console.log(res);
  } else {
    const res = await searchApi(data);
    console.log(res);
  }
}
const hello = () => {
  store.search = null
}
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
  flex-wrap: nowrap;

  div:nth-child(1) {
    i {
      font-size: 40px;
    }
  }

  div:nth-child(2) {
    display: flex;

    div:nth-child(1) {
      background: #f5f2f0;
      height: 70px;
      width: 80px;
      border-top-left-radius: 35px;
      border-bottom-left-radius: 35px;
      text-align: center;

      i {
        font-size: 30px;
        color: #666666;
        vertical-align: middle;
      }
    }

    div:nth-child(2) {
      input {
        width: 500px;
        outline: none;
        height: 70px;
        border: none;
        border-top-right-radius: 35px;
        border-bottom-right-radius: 35px;
        background: #f5f2f0;
        font-size: 25px;
        display: block;
      }
    }
  }


  div:nth-child(3) {
    font-size: 28px;
  }
}
</style>
