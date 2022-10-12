<script setup lang="ts">
import router from '@/router'
import { useRoute } from 'vue-router'

const route = useRoute()
const path = $computed(() => route.path)
</script>

<template>
  <div flex="~ col" gap-4>
    <div
      class="menu-link"
      :class="[path === '/' ? 'underline' : '']"
      @click="router.push('/')"
    >
      加密解密
    </div>

    <div
      class="menu-link"
      :class="[path === '/unit-conversion' ? 'underline' : '']"
      @click="router.push('/unit-conversion')"
    >
      单位转换
    </div>
  </div>
</template>

<style scoped>
.menu-link {
  @apply cursor-pointer hover:text-gray;
}
</style>
