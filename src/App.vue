<script setup lang="ts">
import {useRoute} from "vue-router";
import {reactive} from "vue";
import {storeApi} from "./store";

const store = storeApi()

const route = useRoute()

</script>

<template>
  <router-view/>
  <div class="style"></div>
  <div class="playEr"
       v-if="route.path!=='/comment'
       &&route.path!=='/songList'&&route.path!=='/mv'">
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
  <van-tabbar route :border="false" class="tabBar" active-color="red"
              v-if="route.path!=='/songList'
              &&route.path!=='/comment'
              &&route.path!=='/mv'">
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
.style{
  margin-bottom: 200px;
}
.playEr {
  height: 90px;
  line-height: 90px;
  width: 750px;
  position: fixed;
  background: #ffffff;
  border-top: 1px solid #f5f2f0;
  left: 0;
  right: 0;
  bottom: 7%;
  display: flex;
  justify-content: space-between;
  background: red;

  .left {
    padding-left: 29px;

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
        width: 50px;
        height: 50px;
        border-radius: 25px;
        display: inline-block;
        padding-left: 17px;
        padding-top: 17px;
      }
    }

    span:nth-child(2) {
      display: inline-block;
      margin-left: 10px;
      font-size: 28px;
    }

    span:nth-child(3) {
      display: inline-block;
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
