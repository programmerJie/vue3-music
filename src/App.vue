<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, reactive, ref} from "vue";
import {storeData} from "./store";

const store = storeData();
const route = useRoute();
const yinyue = ref(null);
onMounted(() => {
  store.audio = yinyue;
});
</script>
<template>
  <router-view/>
  <audio :src="`api/song/media/outer/url?id=${store.music.id}.mp3`" controls ref="yinyue"
         v-show="false"></audio>
  <div
      class="playEr"
      v-if="
      route.path !== '/comment' &&
      route.path !== '/songList' &&
      route.path !== '/mv'
    "
  >
    <div class="left">
      <span>
        <van-image
            round
            :src="store.music.al.picUrl"
            class="img"
            :class="{ rotate: store.ifShow.ifFalse,paused:store.ifShow.ifTrue }"
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
  <van-tabbar
      route
      :border="false"
      class="tabBar"
      active-color="red"
      v-if="
      route.path !== '/songList' &&
      route.path !== '/comment' &&
      route.path !== '/mv'
    "
  >
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

  .left {
    padding-left: 29px;

    span:nth-child(1) {
      .rotate {
        animation: rotate 18s linear 0s infinite;
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      }

      .play {
        animation-play-state: running;
      }

      .paused {
        animation-play-state: paused;
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
