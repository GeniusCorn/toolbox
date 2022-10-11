<script setup lang="ts">
import router from '@/router'
</script>

<template>
  <NavBar />

  <div flex="~ col" gap-4 p-6 justify-center items-center>
    <div>404 not found</div>
    <button @click="router.push('/')">返回</button>
  </div>

  <FooterBottom />
</template>

<style scoped></style>
