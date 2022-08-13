<template>
  <!--  导航栏-->
  <div class="navbar">
    <div>
      <i class="iconfont" @click="btn">&#xe697;</i>
    </div>
    <div>
      <div><i class="iconfont">&#xe622;</i></div>
      <div>
        <input type="search" :placeholder="store.search" v-model="song"
               style="color:#666666">
      </div>
    </div>
    <div @click="search(song)">搜索</div>
  </div>
  <!--  历史记录和删除-->
  <div class="delete" v-if="song!==''&&ifShow">
    <div>历史</div>
    <div @click="del"><i class="iconfont">&#xe8b6;</i></div>
  </div>
  <div class="addText">
    <span v-for="item in searchHistory.data" @click="click(item)">
      {{ item }}
    </span>
  </div>
  <div class="hotSearch" v-if="song===''">
    <div class="hotSearchTitle">
      <div>热搜榜</div>
      <div>
        <span><i class="iconfont">&#xe62b;</i></span>
        <span>播放</span>
      </div>
    </div>
    <div class="hotSearchContent" v-for="(item,index) in hotSearchList.data" :key="item"
         @click="clickName(item['searchWord'])">
      <div>{{ index + 1 }}</div>
      <div>{{ item['searchWord'] }}</div>
    </div>
  </div>
  <div class="songTitle" v-if="song!==''">
    <div>
      <span><i class="iconfont">&#xe624;</i></span>
      <span>播放全部</span>
    </div>
    <div><i class="iconfont">&#xe669;</i></div>
  </div>
  <div class="songContnet" v-for="item in SongList.data" :key="item" v-if="song!==''">
    <div @click="store.musicId(item)">
      <span>{{ result1(item['name']) }}</span>
      <span>{{ item['ar'][0]['name'] }}-{{ result2(item['al']['name']) }}</span>
    </div>
    <div>
      <router-link :to="{ path: '/mv', query: { id: item['mv'] } }">
        <span v-if="item['mv']!==0"><i class="iconfont">&#xe665;</i></span>
      </router-link>
      <span><i class="iconfont">&#xe8c4;</i></span>
    </div>
  </div>
  <div class="style"></div>
  <play-er></play-er>
</template>

<script lang="ts" setup>
import PlayEr from "../../../components/playEr.vue";
import {useRouter} from "vue-router";
import {useRoute} from "vue-router";
import {searchApi, hotSearchListApi} from "../../../api/Find/Search";
import {onMounted, onUpdated, reactive, ref, watch} from "vue";
import {storeData} from "../../../store";

const searchHistory: any = reactive({
  data: [],
})
const store = storeData();
let song = ref('');
const route = useRoute();
const router = useRouter();
const ifShow = ref(false)
const hotSearchList = reactive({
  data: []
})
const SongList = reactive({
  data: []
})
const btn = () => {
  router.go(-1);
};
const click = (data: any) => {
  song.value = data
}
//判断歌单列表列歌名的字符长度,如果超过就省略
const result1 = (data: string): string => {
  if (data.length >= 16) {
    return data.slice(0, 16) + "...";
  } else {
    return data;
  }
};
//判断歌单列表里歌名的字符长度,如果超过就省略
const result2 = (data: string): string => {
  if (data.length >= 12) {
    return data.slice(0, 12) + "...";
  } else {
    return data;
  }
};
const search = async (data: any) => {
  ifShow.value = true
  if (data === '') {
  } else {
    searchHistory.data.push(data)
  }
  //如果值为空就用pinia默认的搜索关键字,否则就是用户输入的搜索关键字
  if (data === '') {
    const res = await searchApi(store.search as any);
    console.log(res.data.result.songs)
    SongList.data = res.data.result.songs
  } else {
    const res = await searchApi(data);
    console.log(res.data.result.songs)
    SongList.data = res.data.result.songs
  }
}
const del = () => {
  searchHistory.data = []
  ifShow.value = false
  song.value = ''
}
const clickName = (data: any) => {
  song.value = data
}
onMounted(async () => {
  const res = await hotSearchListApi()
  hotSearchList.data = res.data.data
})
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
      line-height: 70px;
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
        line-height: 70px;
        border-top-right-radius: 35px;
        border-bottom-right-radius: 35px;
        background: #f5f2f0;
        font-size: 30px;
        display: block;
      }
    }
  }


  div:nth-child(3) {
    font-size: 28px;
  }
}

.delete {
  margin: 0 29px;
  display: flex;
  height: 40px;
  line-height: 40px;
  justify-content: space-between;
  background: #f5f2f0;

  div:nth-child(1) {
    font-size: 30px;
  }

  div:nth-child(2) {
    i {
      font-size: 35px;
      color: #666666;
    }
  }
}

.addText {
  margin: 0 29px;
  background: #f5f2f0;

  span {
    height: 50px;
    margin: 10px 30px 10px 0;
    color: #666666;
    padding: 0 20px;
    line-height: 50px;
    border-radius: 25px;
    background: #ffffff;
    font-size: 25px;
    border: 1px solid #ffffff;
    display: inline-block;
  }
}

.hotSearch {
  background: #f5f2f0;

  .hotSearchTitle {
    height: 90px;
    display: flex;
    line-height: 90px;
    justify-content: space-between;
    margin: 0 29px;
    background: #ffffff;

    div:nth-child(1) {
      font-size: 30px;
      margin-left: 25px;
    }

    div:nth-child(2) {
      border: 1px solid #666666;
      border-radius: 20px;
      width: 110px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 25px;
      margin: 25px 25px 0 0;

      span:nth-child(1) {
        display: inline-block;
        margin-right: 4px;
      }
    }
  }

  .hotSearchContent {
    display: flex;
    margin: 0 29px;
    background: #ffffff;

    div:nth-child(1) {
      height: 60px;
      width: 60px;
      text-align: center;
      line-height: 60px;
    }

    div:nth-child(2) {
      height: 60px;
      line-height: 60px;
    }
  }
}

.songTitle {
  margin: 0 29px;
  display: flex;
  justify-content: space-between;
  height: 70px;
  line-height: 70px;

  div:nth-child(1) {
    span:nth-child(1) {
      margin-right: 20px;
      vertical-align: middle;

      i {
        font-size: 40px;
        color: red
      }
    }

    span:nth-child(2) {
      font-size: 30px;
      display: inline-block;
    }
  }

  div:nth-child(2) {
    i {
      font-size: 40px;
    }
  }
}

.songContnet {
  margin: 0 29px;
  display: flex;
  height: 100px;
  justify-content: space-between;

  div:nth-child(1) {
    display: flex;
    flex-flow: column;

    span:nth-child(1) {
      margin-top: 10px;
      font-size: 27px;
    }

    span:nth-child(2) {
      font-size: 20px;
    }
  }

  div:nth-child(2) {
    span:nth-child(1) {
      height: 100px;
      width: 80px;
      display: inline-block;
      line-height: 100px;
      text-align: center;

      i {
        font-size: 40px;
        color: black;
      }
    }

    span:nth-child(2) {
      height: 100px;
      width: 80px;
      display: inline-block;
      line-height: 100px;
      text-align: center;

      i {
        font-size: 40px;
      }
    }
  }
}

.style {
  margin-top: 95px;
}
</style>
