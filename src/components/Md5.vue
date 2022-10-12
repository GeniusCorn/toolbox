<script setup lang="ts">
import md5 from 'js-md5'

let leftText = $ref('')
let rightText = $ref('')

function encodeLeftText() {
  rightText = md5(leftText)
}

function clearAll() {
  leftText = ''
  rightText = ''
}
</script>

<template>
  <div flex="~ col" gap-4>
    <div>md5 加密</div>
    <div flex="~ row" justify-around items-center gap-4 h-25>
      <textarea
        autocomplete="off"
        class="textarea"
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
        <button w-20 flex="~ row" justify-evenly items-center @click="clearAll">
          <div i-mdi-delete-outline />
          清空
        </button>
      </div>

      <textarea
        autocomplete="off"
        class="textarea"
        v-model="rightText"
      ></textarea>
    </div>
  </div>
</template>

<style scoped>
.textarea {
  @apply h-full w-full resize-none box-border p-4 rounded;
}
</style>
