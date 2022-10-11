import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetTagify,
  presetWebFonts
} from 'unocss'

export default defineConfig({
  shortcuts: [],
  presets: [presetUno(), presetAttributify(), presetIcons(), presetTagify()]
})
