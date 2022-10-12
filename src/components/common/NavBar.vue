<script setup lang="ts">
import router from '@/router/index'

const isDarkMode = ref(false)
function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
}

onMounted(() => {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    isDarkMode.value = true
  }
})

watch(isDarkMode, () => {
  const html = document.getElementsByTagName('html')[0]

  if (isDarkMode.value) html.classList.add('dark')
  else html.classList.remove('dark')
})
</script>

<template>
  <div flex="~ row" justify-between items-center p-4>
    <div
      flex="~ row"
      justify-center
      items-center
      gap-2
      cursor-pointer
      hover:text-gray
      @click="router.push('/')"
    >
      <div i-mdi-toolbox text-2xl dark:text-white />
      <div>
        <div>实用工具箱</div>
        <div text-xs text-gray-400>平平无奇的工具箱</div>
      </div>
    </div>
    <div flex="~ row" justify-center items-center gap-4 text-2xl>
      <!-- <div i-mdi-web /> -->
      <div
        i="mdi-white-balance-sunny dark:mdi-weather-night"
        hover:text-gray
        cursor-pointer
        @click="toggleDarkMode"
      />

      <a
        href="https://github.com/GeniusCorn/toolbox"
        text-black
        dark:text-white
      >
        <div i-mdi-github hover:text-gray />
      </a>
    </div>
  </div>
</template>

<style scoped></style>
