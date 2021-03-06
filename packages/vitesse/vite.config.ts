import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Inspect from 'vite-plugin-inspect'
import ViteRadar from 'vite-plugin-radar'
import viteSSR from 'vite-ssr/plugin'

const markdownWrapperClasses = 'prose prose-sm m-auto text-left'

export default defineConfig({

  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    viteSSR(),

    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

      // custom resolvers
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          componentPrefix: '',
          // enabledCollections: ['carbon']
        }),
      ],

      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unplugin-icons
    Icons({
      autoInstall: true,
    }),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      safelist: markdownWrapperClasses,
    }),

    ViteRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-XXXXX',
      },
    }),


    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt'],
      manifest: {
        name: 'Sayebam',
        short_name: 'Sayebam',
        theme_color: '#ffffff',
        icons: [
          {
            src: "/android-icon-36x36.png",
            sizes: "36x36",
            type: "image/png",
            density: "0.75"
          },
          {
            src: "/android-icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
            density: "1.0"
          },
          {
            src: "/android-icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            density: "1.5"
          },
          {
            src: "/android-icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            density: "2.0"
          },
          {
            src: "/android-icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            density: "3.0"
          },
          {
            src: "/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            density: "4.0"
          }
        ],
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect({
      // change this to enable inspect for debugging
      enabled: false,
    }),
  ],

  server: {
    fs: {
      strict: true,
    },
  },

  
  // https://github.com/antfu/vite-ssg
  // ssgOptions: {
  //   script: 'async',
  //   formatting: 'minify',
  // },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
    ],
    exclude: [
      'vue-demi',
    ],
  },

})
