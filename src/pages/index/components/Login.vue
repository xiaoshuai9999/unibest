<script setup lang="ts">
const nameFocus = ref(false)
const passwordFocus = ref(false)
const loginForm = reactive({
  name: '',
  password: ''
})
const loading = ref(false)
const login = () => {
  if (!loginForm.name) {
    uni.showToast({ title: '请输入用户名', icon: 'error' })
  } else if (!loginForm.password) {
    uni.showToast({ title: '请输入密码', icon: 'error' })
  } else {
    // TODO: 登录
    loading.value = true
    new Promise((resolve) => {
      setTimeout(() => {
        loading.value = false
        uni.showToast({ title: '登录成功' })
        resolve(true)
      }, 3000)
    })
  }
}
</script>

<template>
  <zero-loading v-if="loading"></zero-loading>
  <view flex-center flex-col mt-8 px-10vw>
    <view class="flex-center h-12 w-full pl mt-8" :class="nameFocus ? 'bg-#EFF4FF' : 'bg-#f7f7f7'">
      <image class="w-6 h-8" :src="nameFocus ? '/static/img/login/account_s.png' : '/static/img/login/account_ns.png'"> </image>
      <uni-easyinput class="h-full c-3" v-model="loginForm.name" :clearable="false" :placeholder="$t('login.accountPlaceholder')" @focus="nameFocus = true" @blur="nameFocus = false"> </uni-easyinput>
    </view>
    <view class="flex-center h-12 w-full pl mt-8" :class="passwordFocus ? 'bg-#EFF4FF' : 'bg-#f7f7f7'">
      <image class="w-6 h-8" :src="passwordFocus ? '/static/img/login/account_s.png' : '/static/img/login/password_ns.png'"> </image>
      <uni-easyinput
        class="h-full c-3"
        v-model="loginForm.password"
        :clearable="false"
        type="password"
        :placeholder="$t('login.passwordPlaceholder')"
        @focus="passwordFocus = true"
        @blur="passwordFocus = false"
      >
      </uni-easyinput>
    </view>
    <view class="w-full mt-8">
      <button class="w-full h-12 lh-12 bg-blue c-#fff font-size-4" @click="login">{{ $t('login.loginSoon') }}</button>
    </view>
  </view>
</template>

<style scoped lang="scss">
:deep(.uni-easyinput__content) {
  height: 100%;
  background: none !important;
  border: none;
  .uni-input-placeholder {
    color: #cccccc;
    font-size: 1rem !important;
  }
  .uni-input-input {
    font-size: 1.2rem;
    background: none !important;
  }
}
</style>
