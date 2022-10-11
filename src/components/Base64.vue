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
        rounded
        v-model="leftText"
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
        autocomplete="off"
        h-full
        w-full
        resize-none
        box-border
        p-4
        rounded
        v-model="rightText"
      ></textarea>
    </div>
  </div>
</template>

<style scoped></style>
