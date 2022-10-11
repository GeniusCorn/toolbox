<script setup lang="ts">
const apiKey = '63150f4295328ee3cc91ef4cbd2021b03820f96f2b2c646ee059edf0'
const url = `https://api.ipdata.co?api-key=${apiKey}`

async function getIPFromAPI() {
  return fetch(url).then((res) => res.json().then((data) => data))
}

const data = await getIPFromAPI()

// eslint-disable-next-line camelcase
const { ip, city, country_name } = data
</script>

<template>
  <div flex="~ row" gap-4 text-sm>
    <div>当前 IP：{{ ip }}</div>
    <div>国家：{{ country_name }}</div>
    <div>城市：{{ city }}</div>
  </div>
</template>

<style scoped></style>
