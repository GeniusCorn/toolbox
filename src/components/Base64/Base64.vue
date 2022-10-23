<script setup lang="ts">
import { encodeText, decodeText } from './base64'

let leftText = $ref('')
let rightText = $ref('')

function encodeLeftText() {
  rightText = encodeText(leftText)
}

function decodeLeftText() {
  rightText = decodeText(leftText)
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
        v-model="leftText"
        autocomplete="off"
        class="textarea"
      ></textarea>

      <div flex="~ col" gap-2>
        <button
          w-20
          flex="~ row"
          justify-evenly
          items-center
          @click="encodeLeftText"
        >
          <div i-mdi-lock-plus-outline />
          加密
        </button>
        <button
          w-20
          flex="~ row"
          justify-evenly
          items-center
          @click="decodeLeftText"
        >
          <div i-mdi-lock-remove-outline />
          解密
        </button>
        <button w-20 flex="~ row" justify-evenly items-center @click="clearAll">
          <div i-mdi-delete-outline />
          清空
        </button>
      </div>

      <textarea
        v-model="rightText"
        class="textarea"
        autocomplete="off"
      ></textarea>
    </div>
  </div>
</template>

<style scoped>
.textarea {
  @apply h-full w-full resize-none box-border p-4 rounded;
}
</style>
