<template>
  <div class="navBar">
    <div class="left">
      <i class="iconfont" @click="btn">&#xe697;</i>
      <video autoplay controls="controls" :src="mv.url"></video>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, onMounted} from "vue";
import {MvApi} from "../../../api/Mv";
import {useRouter, useRoute} from "vue-router";

const router = useRouter()
const route = useRoute()

let mv: any = reactive({
  id: 0,
  url: ''
})
onMounted(async () => {
  mv.id = route.query.id
  const res = await MvApi(mv.id)
  console.log(res.data.data)
  mv.url = res.data.data.url
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
  .left {
    video{
      width: 750px;
    }
  }
}
</style>