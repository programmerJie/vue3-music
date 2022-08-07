<template>
  <div class="playEr">
    <div class="left">
      <span>
        <van-image
          round
          :src="store.music.al.picUrl"
          class="img"
          :class="{ rotate: store.ifShow.ifFalse }"
        />
      </span>
      <span>{{ store.music.al.name }}</span>
      <span>-</span>
      <span>{{ store.music.ar[0].name }}</span>
    </div>
    <div class="right">
      <span v-if="store.ifShow.ifTrue" @click="store.btn1()"
        ><i class="iconfont">&#xe624;</i></span
      >
      <span v-if="store.ifShow.ifFalse" @click="store.btn2()"
        ><i class="iconfont">&#xe629;</i></span
      >
      <span><i class="iconfont">&#xe640;</i></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { reactive } from "vue";
import { storeData } from "../store";
const store = storeData();
const route = useRoute();
</script>
<style scoped lang="less">
.iconfont {
  font-family: "iconfont" !important;
  font-size: 40px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.playEr {
  height: 90px;
  line-height: 90px;
  width: 750px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  border-top: 1px solid #f5f2f0;

  .left {
    padding-left: 29px;
    span:nth-child(1) {
      .rotate {
        animation: rotate 18s linear 0s infinite forwards;
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      }
    }
    span {
      vertical-align: middle;
    }

    span:nth-child(1) {
      background: #000;
      height: 84px;
      width: 84px;
      border-radius: 42px;
      display: inline-block;

      .img {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        display: inline-block;
        margin-left: 15%;
        margin-top: 15%;
      }
    }

    span:nth-child(2) {
      display: inline-block;
      margin-left: 10px;
      font-size: 28px;
    }

    span:nth-child(3) {
      display: inline-block;
      font-size: 25px;
      margin: 0 5px;
    }

    span:nth-child(4) {
      display: inline-block;
      font-size: 20px;
      color: #666666;
      padding-top: 3px;
    }
  }

  .right {
    span {
      vertical-align: middle;
    }

    span:nth-child(1) {
      margin-right: 30px;

      i {
        font-size: 50px;
      }
    }

    span:nth-child(2) {
      i {
        font-size: 50px;
      }
    }
  }

  .right {
    padding-right: 29px;
  }
}
</style>
