<script setup lang="ts"></script>

<template>
  <NavBar />

  <GetIP px-6 />

  <div flex="~ row">
    <LeftMenu flex-none p-6 />

    <div flex="1 ~ col" gap-4 p-6>
      <RouterView />
    </div>
  </div>

  <FooterBottom />
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
