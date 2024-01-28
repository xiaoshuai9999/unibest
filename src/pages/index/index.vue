<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home"></route>
<template>
  <view class="h-screen w-full bg-full-auto bg-no-repeat overflow-hidden" style="background-image: url('../../static/img/login/decoration_bg.png')">
    <view flex-center flex-col mt-18vh>
      <image w-50vw h-12 src="/static/img/login/login_logo.png" alt=""></image>
      <image w-12vh h-6 mt src="/static/img/login/supplier_platform.png" alt=""></image>
    </view>
    <Login />
    <LanguageSwitch />
  </view>
</template>

<script lang="ts" setup>
import LanguageSwitch from '@/pages/index/components/LanguageSwitch.vue'
import Login from './components/Login.vue'
</script>

<style lang="scss" scoped></style>
