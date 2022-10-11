import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },

  plugins: [
    Vue({ reactivityTransform: true }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],

      imports: [
        'vue',
        'vue-router',
        'vue/macros',
        {
          axios: [
            ['default', 'axios'] // import { default as axios } from 'axios',
          ]
        }
      ],

      dirs: [],

      dts: './auto-imports.d.ts',

      vueTemplate: true,

      resolvers: [],

      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    Components({
      dts: true
    }),
    Unocss()
  ]
})
