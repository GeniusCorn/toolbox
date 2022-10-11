<script setup lang="ts"></script>

<template>
  <Suspense>
    <div>
      <NavBar />

      <div flex="~ col" gap-4 p-6>
        <GetIP />

        <Base64Encoder />
      </div>

      <FooterBottom />
    </div>
  </Suspense>
</template>

<style scoped></style>
