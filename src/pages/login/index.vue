<route lang="json5"></route>
<script lang="ts" setup>
import languages from '@/pages/login/config/languages'
import { useAppStore } from '@/store'
import { useI18n } from 'vue-i18n'
import Login from './Login.vue'

const appStore = useAppStore()

const currentLanguage = ref(0)

const { locale } = useI18n()
const switchLang = (event: { detail: { value: number } }) => {
  currentLanguage.value = event.detail.value
  locale.value = languages[currentLanguage.value].value
  appStore.setLanguage(locale.value)
}
</script>
<template>
  <view class="h-screen w-full bg-full-auto bg-no-repeat overflow-hidden" style="background-image: url('../../static/img/login/decoration_bg.png')">
    <view flex-center flex-col mt-18vh>
      <image w-50vw h-12 src="/static/img/login/login_logo.png" alt=""></image>
      <image w-12vh h-6 mt src="/static/img/login/supplier_platform.png" alt=""></image>
    </view>
    <Login>
      <picker range-key="name" :value="currentLanguage" :range="languages" @change="switchLang">
        <view class="flex-center justify-center w-screen c-9 font-size-3 mt-8">{{ $t('login.changeLanguage') }}</view>
      </picker>
    </Login>
  </view>
</template>

<style lang="scss" scoped></style>
