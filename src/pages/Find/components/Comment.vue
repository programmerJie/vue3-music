<template>
  <div class="navBar">
    <div>
      <span @click="btn"><i class="iconfont">&#xe697;</i></span>
      <span>评论({{ comment.total }})</span>
    </div>
    <div>
      <span><i class="iconfont">&#xe86e;</i></span>
    </div>
  </div>
  <div class="commentTitle">
    <div class="left">
      <span>评论区</span>
    </div>
    <div class="right">
      <span>推荐</span>
      <span>最热</span>
      <span>最新</span>
    </div>
  </div>
  <div class="commentContentTop" v-for="item in comment.hotComments" :key="item">
    <div class="left">
      <span><img :src="item['user']['avatarUrl']" alt=""></span>
      <div>
        <span>{{ item['user']['nickname'] }}</span>
        <span>{{ item['timeStr'] }}</span>
      </div>
    </div>
    <div class="right">
      <span v-if="item['likedCount']!==0">{{ item['likedCount'] }}</span>
      <span><i class="iconfont">&#xec7f;</i></span>
    </div>
    <div class="footer">{{ item.content }}</div>
  </div>
</template>

<script lang="ts" setup>
import {useRouter, useRoute} from "vue-router";
import {songlistCommentApi} from "../../../api/Find";
import {onMounted, reactive} from "vue";

const router = useRouter()
const route = useRoute()
let comment: any = reactive({
  id: route.query.id,
  total: 0,
  comments: [],
  hotComments: []

})
onMounted(async () => {
  const res = await songlistCommentApi(comment.id)
  console.log(res.data)
  comment.total = res.data.total
  comment.comments = res.data.comments
  comment.hotComments = res.data.hotComments
})
const btn = () => {
  router.go(-1)
}
</script>

<style scoped lang="less">
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.navBar {
  display: flex;
  justify-content: space-between;
  padding: 29px;

  div:nth-child(1) {
    span {
      vertical-align: middle;
    }

    span:nth-child(1) {
      i {
        font-size: 40px;
      }
    }

    span:nth-child(2) {
      font-size: 30px;
      margin-left: 20px;
    }

  }

  div:nth-child(2) {
    span {
      i {
        font-size: 40px;
      }
    }
  }
}

.commentTitle {
  display: flex;
  justify-content: space-between;
  padding: 29px;


  .left {
    span {
      font-weight: 500;
    }
  }

  .right {
    span:nth-child(3) {
      color: #666666;
    }

    span:nth-child(2) {
      padding-right: 30px;
      color: #666666;
    }

    span:nth-child(1) {
      padding-right: 30px;
      font-weight: 500;
    }
  }
}

.commentContentTop {
  display: flex;
  justify-content: space-between;
  padding: 29px;
  flex-wrap: wrap;
  border-bottom: 1px solid #666666;

  .left {
    display: flex;
    width: 580px;

    span:nth-child(1) {
      img {
        width: 70px;
        height: 70px;
        border-radius: 35px;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      margin-left: 10px;

      span:nth-child(1) {
        padding-top: 10px;
        font-size: 25px;
      }

      span:nth-child(2) {
        font-size: 20px;
        padding-top: 5px;
      }
    }
  }

  .right {

    span:nth-child(1) {
      color: #666666;
      font-size: 20px;
      padding-right: 5px;
    }

    span:nth-child(2) {
      i {
        font-size: 30px;
      }
    }
  }
  .footer{
    margin-top: 20px;

  }
}
</style>