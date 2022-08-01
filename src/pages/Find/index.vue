<template>
  <div class="navbar">
    <div>
      <i class="iconfont" @click="showPopup">&#xe60c;</i>
      <van-popup v-model:show="show" position="left" :style="{ width:'80%',height:'100%'}">
        目录
      </van-popup>
    </div>
    <div><input type="search" :placeholder="searchKwords.name"/></div>
    <div><i class="iconfont">&#xe7e8;</i></div>
  </div>
  <div class="bannar">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="item in banners.img" :key="item">
        <img :src="item['pic']"/>
      </van-swipe-item>
    </van-swipe>
  </div>
  <div class="tabBar">
    <van-swipe :loop="false" :width="70" :show-indicators="false">
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe65b;</i></p>
          <p>每日推荐</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe636;</i></p>
          <p>私人FM</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe637;</i></p>
          <p>歌单</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe6c5;</i></p>
          <p>排行榜</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe601;</i></p>
          <p>有声书</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe6b5;</i></p>
          <p>数字专辑</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe74f;</i></p>
          <p>直播</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe8bc;</i></p>
          <p>关注新歌</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe602;</i></p>
          <p>歌房</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div>
          <p><i class="iconfont">&#xe67e;</i></p>
          <p>游戏专区</p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
  <div class="recommendMUsic">
    <div class="recommendMusicTitle">
      <div>推荐歌单</div>
      <div>更多 ></div>
    </div>
    <div class="recommendMusicContent">
      <van-swipe :loop="false" :show-indicators="false" class="style" :width="120">
        <van-swipe-item v-for="item in recommendMusicList.data" :key="item">
          <router-link :to="{path:'/jump',query:{id:item['id']}}">
            <p><span><i class="iconfont">&#xe600;</i></span><span>{{ count(item['playCount']) }}</span></p>
            <img :src="item['picUrl']" alt="" style="width: 105px;">
            <p>{{ ellipsis(item['name']) }}</p>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, onMounted, onBeforeMount, reactive} from 'vue';
import {BannerApi, recommendMusicApi, searchKwordsApi} from "../../api/Find";
import {FindType} from "../../type/Find";
import {useRouter} from "vue-router";

const router = useRouter()
const show = ref(false);
const banners = reactive({
  img: [],
})
const recommendMusicList = reactive({
  data: []
})
const searchKwords = reactive({
  name: ''
})
const showPopup = (): void => {
  show.value = true;
};
onMounted(async () => {
  const a = await BannerApi()
  banners.img = a.data.banners
  const b = await recommendMusicApi()
  recommendMusicList.data = b.data.result
  const c = await searchKwordsApi()
  searchKwords.name = c.data.data.showKeyword
})
//把数字单位转成文字单位
const count = (data: number): string | number => {
  if (data >= 100000000) {
    return (data / 100000000).toFixed(1) + '亿'
  } else if (data >= 100000) {
    return (data / 10000).toFixed(1) + '万'
  } else {
    return data
  }
}
//大于等于8个字符的用省略号表示
const ellipsis = (data: string): string => {
  if (data.length >= 8) {
    return data.slice(1, 8) + '...'
  } else {
    return data
  }
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
  overflow: hidden;

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
    }
  }

  div:nth-child(3) {
    i {
      font-size: 40px;
    }
  }
}

.bannar {
  margin: 29px;
  height: 250px;

  img {
    width: 750px;
    height: 250px;
  }
}

.tabBar {
  margin: 29px;
  text-align: center;

  div {
    p:nth-child(1) {
      .iconfont {
        font-size: 50px;
        color: red;
      }
    }

    p:nth-child(2) {
      margin-top: 10px;
      font-size: 25px;
      color: gray;
    }
  }
}

.recommendMUsic {
  margin: 29px;

  .recommendMusicTitle {
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding-top: 10px;

    div:nth-child(1) {
      font-size: 33px;
      font-weight: 500;
    }

    div:nth-child(2) {
      border: 1px solid #666666;
      border-radius: 20px;
      width: 110px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 25px;
    }
  }

  .recommendMusicContent {
    width: 692px;
    margin-top: 30px;

    p {
      font-size: 25px;
    }

    p:nth-child(1) {
      position: absolute;
      right: 13%;
      color: white;
      z-index: 99;
      top: -4%;
      border: 1px solid gray;
      box-shadow: gray;
      margin-top: 18px;
      border-radius: 15px;
      background: #666666;
      filter: blur(0.8);

      span:nth-child(1) {

        i {
          font-size: 20px;
          vertical-align: middle;
          display: inline-block;
          margin-top: -4px;
        }
      }

      span:nth-child(2) {
        font-size: 20px;
      }
    }

    p:nth-child(3) {
      position: relative;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: black;
    }

    img {
      border-radius: 20px;
    }
  }
}
</style>
