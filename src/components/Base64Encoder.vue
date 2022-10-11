<script setup lang="ts">
import { encode, decode } from 'js-base64'

let leftText = $ref('')
let rightText = $ref('')

function encodeLeftText() {
  rightText = encode(leftText)
}

function decodeLeftText() {
  rightText = decode(leftText)
}

function clearAll() {
  leftText = ''
  rightText = ''
}
</script>

<template>
  <div flex="~ col" gap-4>
    <div>base64 加密解密</div>
    <div flex="~ row" justify-around items-center gap-4 h-25>
      <textarea
        autocomplete="off"
        h-full
        w-full
        resize-none
        box-border
        p-4
        v-model="leftText"
      ></textarea>

      <div flex="~ col" gap-2>
        <button w-20 @click="encodeLeftText">加密</button>
        <button @click="decodeLeftText">解密</button>
        <button @click="clearAll">清空</button>
      </div>

      <textarea
        autocomplete="off"
        h-full
        w-full
        resize-none
        box-border
        p-4
        v-model="rightText"
      ></textarea>
    </div>
  </div>
</template>

<style scoped></style>
