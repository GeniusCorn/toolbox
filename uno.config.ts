import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetTagify,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  shortcuts: [],
  presets: [presetUno(), presetAttributify(), presetIcons(), presetTagify()],
  transformers: [transformerDirectives()]
})
