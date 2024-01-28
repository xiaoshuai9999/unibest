// src/store/useAppStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore(
  'app',
  () => {
    const language = ref('zh-Hans')
    const setLanguage = (lang: string) => {
      language.value = lang
    }
    const token = ref('')
    const setToken = (tk: string) => {
      token.value = tk
    }
    return {
      language,
      setLanguage,
      token,
      setToken
    }
  },
  {
    persist: true
  }
)
