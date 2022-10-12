<script setup lang="ts">
let celsius: number = $ref()

let fahrenheit: number = $ref()

const celsiusToFahrenheit: number = $computed(() =>
  parseFloat(((celsius * 9) / 5 + 32).toFixed(2))
)

const fahrenheitToCelsius: number = $computed(() =>
  parseFloat((((fahrenheit - 32) * 5) / 9).toFixed(2))
)

watch(
  () => celsius,
  () => {
    fahrenheit = celsiusToFahrenheit
  }
)

watch(
  () => fahrenheit,
  () => {
    celsius = fahrenheitToCelsius
  }
)
</script>

<template>
  <div flex="~ col" gap-4>
    <div>温度转换</div>

    <table w-fit>
      <thead>
        <tr>
          <th>摄氏度</th>
          <th>
            <div i-mdi-arrow-left-right />
          </th>
          <th>华氏度</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              class="input"
              v-model="celsius"
              type="text"
              autocomplete="off"
            />
          </td>

          <td></td>

          <td>
            <input
              class="input"
              v-model="fahrenheit"
              type="text"
              autocomplete="off"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.input {
  @apply border p-2 rounded;
}
</style>
