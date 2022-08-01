<template>
  <div class="backgroundImg">
    <img :src="songListdetails.img" alt="">
  </div>
  <div class="navBar">
    <div>
      <span @click="btn"><i class="iconfont">&#xe697;</i></span>
      <span>歌单</span>
    </div>
    <div>
      <span><i class="iconfont">&#xe622;</i></span>
      <span><i class="iconfont">&#xe8c4;</i></span>
    </div>
  </div>
  <div class="content">
    <div class="left">
      <p>
        <span><i class="iconfont">&#xe600;</i></span>
        <span>{{ count(songListdetails.palyCount) }}</span>
      </p>
      <img :src="songListdetails.img" alt="">
    </div>
    <div class="right">
      <p>{{ result1(songListdetails.name) }}</p>
      <p>
        <span><img :src="songListdetails.userImg" alt=""></span>
        <span>{{ result2(songListdetails.nickName) }} ></span>
      </p>
      <p>
        <span>{{ result3(songListdetails.description) }} ></span>
      </p>
    </div>
  </div>
  <div class="clear"></div>
  <div class="footer">
    <div>
      <span><i class="iconfont">&#xe60f;</i> </span>
      <span>{{ subscribedCount(songListdetails.subscribedCount) }}</span>
    </div>
    <div>
      <span><i class="iconfont">&#xe763;</i> </span>
      <span>{{ songListdetails.commentCount }}</span>
    </div>
    <div>
      <span><i class="iconfont">&#xe86e;</i> </span>
      <span>{{ songListdetails.shareCount }}</span>
    </div>
  </div>
  <div class="songListTitle">
    <div>
      <span><i class="iconfont">&#xe626;</i></span>
      <span>播放全部 </span>
      <span>({{ songListdetails.trackCount }})</span>
    </div>
    <div>
      <span><i class="iconfont">&#xe668;</i></span>
      <span><i class="iconfont">&#xe669;</i></span>
    </div>
  </div>
  <div class="songListMusic" v-for="(item,index) in songList.music" :key="item">
    <div class="left">
      <span class="leftSpan">{{ index + 1 }}</span>
      <div class="leftDiv">
        <span>{{ item.name }}</span>
        <span>{{ item['ar'][0].name }}-{{ item['al'].name }}</span>
      </div>
    </div>
    <div class="right">
      <span v-if="item.mv!==0"><i class="iconfont">&#xe665;</i></span>
      <span><i class="iconfont">&#xe8c4;</i></span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {useRouter, useRoute} from "vue-router";
import {onBeforeMount, onMounted, reactive} from "vue";
import {songListDetailsApi, songListApi} from "../../../api/Find";

const router = useRouter()
const route = useRoute()
const btn = () => {
  router.go(-1)
}
let songListdetails: any = reactive({
  id: 0,
  img: '',
  palyCount: 0,
  name: '',
  userImg: '',
  nickName: '',
  description: '',
  subscribedCount: '',
  commentCount: '',
  shareCount: '',
  trackCount: ''
})
let songList: any = reactive({
  music: []
})

onMounted(async () => {
  songListdetails.id = route.query.id
  const res = await songListDetailsApi(songListdetails.id)
  songListdetails.img = res.data.playlist.coverImgUrl
  songListdetails.palyCount = res.data.playlist.playCount
  songListdetails.name = res.data.playlist.name
  songListdetails.userImg = res.data.playlist.creator.avatarUrl
  songListdetails.nickName = res.data.playlist.creator.nickname
  songListdetails.description = res.data.playlist.description
  songListdetails.subscribedCount = res.data.playlist.subscribedCount
  songListdetails.commentCount = res.data.playlist.commentCount
  songListdetails.shareCount = res.data.playlist.shareCount
  songListdetails.trackCount = res.data.playlist.trackCount
  const res2 = await songListApi(songListdetails.id)
  songList.music = res2.data.songs
  console.log(res2.data)

})
const count = (data: number): string | number => {
  if (data >= 100000000) {
    return (data / 100000000).toFixed(1) + '亿'
  } else if (data >= 10000) {
    return (data / 10000).toFixed(1) + '万'
  } else {
    return data
  }
}
const result1 = (data: string): string => {
  if (data.length >= 15) {
    return data.slice(1, 15) + '...'
  } else {
    return data
  }
}
const result2 = (data: string): string => {
  if (data.length >= 18) {
    return data.slice(1, 18) + '...'
  } else {
    return data
  }
}
const result3 = (data: string): string => {
  if (data.length >= 18) {
    return data.slice(1, 18) + '...'
  } else {
    return data
  }
}
const subscribedCount = (data: number) => {
  if (data >= 100000) {
    return (data / 10000).toFixed(1) + '万'
  } else {
    return data
  }
}
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

.backgroundImg {

  img {
    width: 100%;
    height: 500px;
    position: absolute;
    z-index: -1;
    filter: blur(100px);
  }
}

.navBar {
  display: flex;
  justify-content: space-between;
  padding: 29px;

  div {
    color: white;

    span {
      vertical-align: middle;
      font-size: 30px;
    }

    span:nth-child(1) {
      margin-right: 20px;
    }
  }
}

.content {
  padding: 29px;

  .left {
    float: left;
    position: relative;

    p {
      color: white;
      position: absolute;
      z-index: 99;
      right: 4%;
      font-size: 20px;
      top: 2%;
      border: 1px solid gray;
      border-radius: 15px;
      background: #666666;

      span:nth-child(1) {
        i {
          font-size: 18px;
          vert-align: middle;
        }
      }
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: 20px;

    }
  }

  .right {
    //background: red;
    float: right;
    width: 460px;

    p:nth-child(1) {
      color: white
    }

    p:nth-child(2) {
      padding-top: 35px;

      span:nth-child(1) {
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          vertical-align: middle;
        }
      }

      span:nth-child(2) {
        color: white;
        font-size: 25px;
        padding-left: 10px;
      }
    }

    p:nth-child(3) {
      padding-top: 35px;

      span {
        color: white;
        font-size: 25px;
      }
    }
  }
}

.clear {
  clear: both;
}

.footer {
  margin-top: 60px;
  text-align: center;
  color: black;

  div:nth-child(1) {
    display: inline-block;
    width: 170px;
    height: 70px;
    line-height: 70px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    background: white;
    border-right: 1px solid black;

    span:nth-child(1) {
      i {
        font-size: 40px;
        display: inline-block;
        vertical-align: middle;
      }
    }

    span:nth-child(2) {
      font-size: 25px;
    }
  }

  div:nth-child(2) {
    display: inline-block;
    width: 170px;
    height: 70px;
    line-height: 70px;
    background: white;
    border-right: 1px solid black;

    span:nth-child(1) {
      i {
        font-size: 40px;
        display: inline-block;
        vertical-align: middle;
      }
    }

    span:nth-child(2) {
      font-size: 25px;
    }
  }

  div:nth-child(3) {
    display: inline-block;
    width: 170px;
    height: 70px;
    line-height: 70px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    background: white;

    span:nth-child(1) {
      i {
        font-size: 40px;
        display: inline-block;
        vertical-align: middle;
      }
    }

    span:nth-child(2) {
      font-size: 25px;
    }
  }
}

.songListTitle {
  margin-top: 50px;
  padding: 0 29px;
  background: white;
  display: flex;
  justify-content: space-between;
  line-height: 70px;
  height: 70px;

  div {
    span:nth-child(1) {
      padding-right: 30px;
    }
  }

  div:nth-child(1) {
    span:nth-child(1) {
      vertical-align: middle;
    }

    span:nth-child(2) {
      font-size: 28px;
      font-weight: 500;
    }

    span:nth-child(3) {
      font-size: 25px;
      color: #666666;
    }
  }
}

.songListMusic {
  display: flex;
  justify-content: space-between;
  background: white;

  .left {
    display: flex;
    height: 100px;

    .leftSpan {
      width: 80px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      color: #666666;
    }

    .leftDiv {
      display: flex;
      flex-direction: column;
      width: 486px;

      span:nth-child(1) {
        padding-top: 10px;
        font-size: 27px;
        font-weight: 500;
      }

      span:nth-child(2) {
        color: #666666;
        font-size: 20px;
      }
    }
  }

  .right {
    span:nth-child(1) {
      display: inline-block;
      height: 100px;
      width: 80px;
      line-height: 100px;
      color: #666666;
      text-align: center;
    }

    span:nth-child(2) {
      display: inline-block;
      height: 100px;
      width: 80px;
      line-height: 100px;
      color: #666666;
      text-align: center;
    }
  }
}
</style>