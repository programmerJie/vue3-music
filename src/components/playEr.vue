<template>
  <div class="playEr">
    <div class="left" @click="showPopup">
      <span>
        <van-image
            :src="store.music.al.picUrl"
            round
            lazy-load
            class="img rotate1"
            :class="{ play: store.ifShow.ifFalse}"
        >
          <template v-slot:loading>
            <van-loading/>
          </template>
        </van-image>
      </span>
      <span>{{ store.music.name }}</span>
      <span>-</span>
      <span>{{ store.music.ar[0].name }}</span>
    </div>
    <div class="right">
      <span v-if="store.ifShow.ifTrue" @click="store.play()"
      ><i class="iconfont">&#xe624;</i></span
      >
      <span v-if="store.ifShow.ifFalse" @click="store.pause()"
      ><i class="iconfont">&#xe629;</i></span
      >
      <span><i class="iconfont">&#xe640;</i></span>
    </div>
  </div>
  <van-popup
      v-model:show="show"
      position="bottom"
      :style="{ height: '100%' }"
      class="popup"
  >
    <van-image :src="store.music.al.picUrl" lazy-load class="img">
      <template v-slot:loading>
        <van-loading type="spinner" size="20"/>
      </template>
    </van-image>
    <div class="top">
      <div @click="btn">
        <span><i class="iconfont">&#xe69b;</i></span>
      </div>
      <div>
        <span>{{ store.music.name }}</span>
        <span>{{ store.music.ar[0].name }}</span>
      </div>
      <div>
        <span><i class="iconfont">&#xe86e;</i></span>
      </div>
    </div>
    <div class="content1" v-if="store.lyricIfShow.ifTrue" @click="store.lyricTrue()">
      <div>
        <img
            src="../assets/images/needle.png"
            alt=""
            :class="{ rotate3: store.ifShow.ifFalse }"
        />
      </div>
      <div>
        <img
            src="../assets/images/disc.png"
            alt=""
            class="rotate2"
            :class="{ play: store.ifShow.ifFalse }"
        />
        <img
            :src="store.music.al.picUrl"
            alt=""
            class="rotate2"
            :class="{ play: store.ifShow.ifFalse }"
        />
      </div>
    </div>
    <div class="content2" v-if="store.lyricIfShow.ifFalse" @click="store.lyricFalse()">
      <div v-for="item in store.lyrics" :key="item">{{ item }}</div>
    </div>
    <div class="footer">
      <div>
        <span><i class="iconfont">&#xe60e;</i></span>
        <span><i class="iconfont">&#xe668;</i></span>
        <span><i class="iconfont">&#xe607;</i></span>
        <span><i class="iconfont">&#xe763;</i></span>
        <span><i class="iconfont">&#xe8c4;</i></span>
      </div>
      <div>
        <span><i class="iconfont">&#xe61f;</i></span>
        <span><i class="iconfont">&#xe78a;</i></span>
        <span v-if="store.ifShow.ifTrue" @click="store.play()"
        ><i class="iconfont">&#xe624;</i></span
        >
        <span v-if="store.ifShow.ifFalse" @click="store.pause()"
        ><i class="iconfont">&#xe629;</i></span
        >
        <span><i class="iconfont">&#xe7a5;</i></span>
        <span><i class="iconfont">&#xe637;</i></span>
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import {reactive, ref} from "vue";
import {storeData} from "../store";

const store = storeData();
const route = useRoute();
const show = ref(false);
const showPopup = () => {
  show.value = true;
};
const btn = () => {
  show.value = false;
};
//解析戒烟的歌词
let arr = store.lyric.lrc.lyric.split(/\n/)
arr.forEach(item => {
  if (item === '') return
  let time = item.match(/\[(.+?)\]/g)
  let lyric = item.slice(10)
  if (lyric[0] === ']' || lyric[0] === '') {
    lyric = lyric.slice(1)
  }
  store.times.push(time)
  store.lyrics.push(lyric)

})
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
    width: 520px;

    span:nth-child(1) {
      .rotate1 {
        animation: rotate 18s linear 0s infinite forwards;
        animation-play-state: paused;
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

.popup {
  .img {
    height: 100%;
    position: absolute;
    z-index: -1;
    filter: blur(100px);
  }

  .top {
    display: flex;
    justify-content: space-between;
    margin: 29px;
    height: 90px;
    //background: red;
    div:nth-child(1) {
      //background: blue;
      height: 90px;
      width: 60px;
      line-height: 90px;

      span {
        i {
          font-size: 50px;
          color: white;
        }
      }
    }

    div:nth-child(2) {
      display: flex;
      flex: 1;
      text-align: center;
      flex-direction: column;

      span:nth-child(1) {
        color: white;
      }

      span:nth-child(2) {
        color: #f5f2f0;
        margin-top: 5px;
      }
    }

    div:nth-child(3) {
      //background: blue;
      height: 90px;
      width: 60px;
      line-height: 90px;

      i {
        font-size: 50px;
        color: white;
      }
    }
  }

  .content1 {
    text-align: center;
    //background: #000;
    height: 870px;

    .rotate2 {
      animation: rotate 18s linear 0s infinite;
      animation-play-state: paused;
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


    .rotate3 {
      transform-origin: 0 0;
      transform: rotate(0deg) !important;
      transition: all 2s;
    }

    div:nth-child(1) {
      position: relative;
      z-index: 2;
      padding-left: 130px;

      img {
        width: 200px;
        transform-origin: 0 0;
        transform: rotate(-26deg);
        transition: all 2s;
      }
    }

    div:nth-child(2) {
      //background: blue;
      position: relative;
      top: -150px;

      img:nth-child(1) {
        width: 530px;
        position: relative;
      }

      img:nth-child(2) {
        width: 330px;
        height: 330px;
        border-radius: 165px;
        position: relative;
        top: -430px;
      }
    }
  }

  .content2 {
    color: white;
    font-size: 30px;
    text-align: center;
    height: 870px;
    overflow: auto;
    //background: red;
    div {
      margin: 30px;
    }
  }

  .footer {
    position: fixed;
    width: 100%;
    bottom: 0;

    div:nth-child(1) {
      display: flex;
      justify-content: center;
      text-align: center;
      height: 100px;
      //background: red;
      line-height: 100px;

      span {
        width: 20%;

        i {
          font-size: 50px;
          color: white;
        }
      }

      span:nth-child(3) {
        //background: #000;
      }
    }

    div:nth-child(2) {
      display: flex;
      justify-content: center;
      text-align: center;
      height: 100px;
      //background: red;
      line-height: 100px;
      margin-top: 60px;

      span {
        width: 20%;

        i {
          font-size: 50px;
          color: white;
        }
      }

      span:nth-child(3) {
        i {
          font-size: 80px;
        }
      }
    }
  }
}
</style>
