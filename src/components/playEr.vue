<template>
  <div class="playEr">
    <div class="left">
      <span>
        <van-image
            round
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            class="img"/>
      </span>
      <span>再次爱上你-</span>
      <span>阿里郎</span>
    </div>
    <div class="right">
      <span v-if="store.ifTrue" @click="store.btn1()"><i class="iconfont">&#xe624;</i></span>
      <span v-if="store.ifFalse" @click="store.btn2()"><i class="iconfont">&#xe629;</i></span>
      <span><i class="iconfont">&#xe640;</i></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import {reactive} from "vue";
import {storeApi} from "../store";

const store = storeApi()
const route = useRoute()
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
  background:#ffffff;
  border-top: 1px solid #f5f2f0;

  .left {
    padding-left: 29px;

    span {
      vertical-align: middle;
    }

    span:nth-child(1) {
      background: #000;
      .img {
        width: 90px;
        height: 90px;
      }
    }

    span:nth-child(2) {
      display: inline-block;
      margin-top: -30px;
      margin-left: 10px;
      font-size: 28px;
    }

    span:nth-child(3) {
      display: inline-block;
      margin-top: -30px;
      font-size: 20px;
      color: #666666;
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