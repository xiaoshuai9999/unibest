<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home"></route>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'

onLoad((option) => {
  console.log(option)
})
</script>

<template>
  <view flex-center>首页</view>
</template>

<style scoped lang="scss"></style>
