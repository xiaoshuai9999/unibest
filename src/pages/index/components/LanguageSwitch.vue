<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/store'
import languages from '../config/languages'

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
  <picker range-key="name" :value="currentLanguage" :range="languages" @change="switchLang">
    <view class="flex-center justify-center w-screen c-9 font-size-3 mt-8">{{ $t('login.changeLanguage') }}</view>
  </picker>
</template>

<style scoped lang="scss"></style>
