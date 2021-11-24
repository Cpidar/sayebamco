// vite.config.ts
import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import WindiCSS from "vite-plugin-windicss";
import { VitePWA } from "vite-plugin-pwa";
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import Inspect from "vite-plugin-inspect";
import ViteRadar from "vite-plugin-radar";
import vitedge from "vitedge/plugin.js";
var markdownWrapperClasses = "prose prose-sm m-auto text-left";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve("D:\\Projects\\Website\\Sayebam\\lerna-repo\\packages\\vitesse", "src")}/`
    }
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vitedge(),
    Pages({
      extensions: ["vue", "md"]
    }),
    Layouts.default(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "@vueuse/head",
        "@vueuse/core"
      ],
      dts: "src/auto-imports.d.ts"
    }),
    Components.default({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: ""
        })
      ],
      dts: "src/components.d.ts"
    }),
    Icons.default({
      autoInstall: true
    }),
    WindiCSS.default({
      safelist: markdownWrapperClasses
    }),
    ViteRadar.default({
      analytics: {
        id: "G-XXXXX"
      }
    }),
    VitePWA.default({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt"],
      manifest: {
        name: "Sayebam",
        short_name: "Sayebam",
        theme_color: "#ffffff",
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
        ]
      }
    }),
    VueI18n.default({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve("D:\\Projects\\Website\\Sayebam\\lerna-repo\\packages\\vitesse", "locales/**")]
    }),
    Inspect.default({
      enabled: false
    })
  ],
  server: {
    fs: {
      strict: true
    }
  },
  ssgOptions: {
    script: "async",
    formatting: "minify"
  },
  optimizeDeps: {
    include: [
      "vue",
      "vue-router",
      "@vueuse/core",
      "@vueuse/head"
    ],
    exclude: [
      "vue-demi"
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXHJcbmltcG9ydCBMYXlvdXRzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzJ1xyXG5pbXBvcnQgSWNvbnMgZnJvbSAndW5wbHVnaW4taWNvbnMvdml0ZSdcclxuaW1wb3J0IEljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCBXaW5kaUNTUyBmcm9tICd2aXRlLXBsdWdpbi13aW5kaWNzcydcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcclxuaW1wb3J0IFZ1ZUkxOG4gZnJvbSAnQGludGxpZnkvdml0ZS1wbHVnaW4tdnVlLWkxOG4nXHJcbmltcG9ydCBJbnNwZWN0IGZyb20gJ3ZpdGUtcGx1Z2luLWluc3BlY3QnXHJcbmltcG9ydCBWaXRlUmFkYXIgZnJvbSAndml0ZS1wbHVnaW4tcmFkYXInXHJcbmltcG9ydCB2aXRlZGdlIGZyb20gJ3ZpdGVkZ2UvcGx1Z2luLmpzJ1xyXG5cclxuXHJcblxyXG5jb25zdCBtYXJrZG93bldyYXBwZXJDbGFzc2VzID0gJ3Byb3NlIHByb3NlLXNtIG0tYXV0byB0ZXh0LWxlZnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG5cclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnfi8nOiBgJHtwYXRoLnJlc29sdmUoXCJEOlxcXFxQcm9qZWN0c1xcXFxXZWJzaXRlXFxcXFNheWViYW1cXFxcbGVybmEtcmVwb1xcXFxwYWNrYWdlc1xcXFx2aXRlc3NlXCIsICdzcmMnKX0vYCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBWdWUoe1xyXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXHJcbiAgICB9KSxcclxuXHJcbiAgICB2aXRlZGdlKCksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2hhbm5vZXJ1L3ZpdGUtcGx1Z2luLXBhZ2VzXHJcbiAgICBQYWdlcyh7XHJcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vSm9obkNhbXBpb25Kci92aXRlLXBsdWdpbi12dWUtbGF5b3V0c1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgTGF5b3V0cy5kZWZhdWx0KCksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICd2dWUnLFxyXG4gICAgICAgICd2dWUtcm91dGVyJyxcclxuICAgICAgICAndnVlLWkxOG4nLFxyXG4gICAgICAgICdAdnVldXNlL2hlYWQnLFxyXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxyXG4gICAgICBdLFxyXG4gICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnRzLmQudHMnLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzXHJcbiAgICBDb21wb25lbnRzLmRlZmF1bHQoe1xyXG4gICAgICAvLyBhbGxvdyBhdXRvIGxvYWQgbWFya2Rvd24gY29tcG9uZW50cyB1bmRlciBgLi9zcmMvY29tcG9uZW50cy9gXHJcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXHJcblxyXG4gICAgICAvLyBhbGxvdyBhdXRvIGltcG9ydCBhbmQgcmVnaXN0ZXIgY29tcG9uZW50cyB1c2VkIGluIG1hcmtkb3duXHJcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXHJcblxyXG4gICAgICAvLyBjdXN0b20gcmVzb2x2ZXJzXHJcbiAgICAgIHJlc29sdmVyczogW1xyXG4gICAgICAgIC8vIGF1dG8gaW1wb3J0IGljb25zXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWljb25zXHJcbiAgICAgICAgSWNvbnNSZXNvbHZlcih7XHJcbiAgICAgICAgICBjb21wb25lbnRQcmVmaXg6ICcnLFxyXG4gICAgICAgICAgLy8gZW5hYmxlZENvbGxlY3Rpb25zOiBbJ2NhcmJvbiddXHJcbiAgICAgICAgfSksXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICBkdHM6ICdzcmMvY29tcG9uZW50cy5kLnRzJyxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1pY29uc1xyXG4gICAgSWNvbnMuZGVmYXVsdCh7XHJcbiAgICAgIGF1dG9JbnN0YWxsOiB0cnVlLFxyXG4gICAgfSksXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXdpbmRpY3NzXHJcbiAgICBXaW5kaUNTUy5kZWZhdWx0KHtcclxuICAgICAgc2FmZWxpc3Q6IG1hcmtkb3duV3JhcHBlckNsYXNzZXMsXHJcbiAgICB9KSxcclxuXHJcbiAgICBWaXRlUmFkYXIuZGVmYXVsdCh7XHJcbiAgICAgIC8vIEdvb2dsZSBBbmFseXRpY3MgdGFnIGluamVjdGlvblxyXG4gICAgICBhbmFseXRpY3M6IHtcclxuICAgICAgICBpZDogJ0ctWFhYWFgnLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcblxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1wd2FcclxuICAgIFZpdGVQV0EuZGVmYXVsdCh7XHJcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxyXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uaWNvJywgJ3JvYm90cy50eHQnXSxcclxuICAgICAgbWFuaWZlc3Q6IHtcclxuICAgICAgICBuYW1lOiAnU2F5ZWJhbScsXHJcbiAgICAgICAgc2hvcnRfbmFtZTogJ1NheWViYW0nLFxyXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgaWNvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiBcIi9hbmRyb2lkLWljb24tMzZ4MzYucG5nXCIsXHJcbiAgICAgICAgICAgIHNpemVzOiBcIjM2eDM2XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIGRlbnNpdHk6IFwiMC43NVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6IFwiL2FuZHJvaWQtaWNvbi00OHg0OC5wbmdcIixcclxuICAgICAgICAgICAgc2l6ZXM6IFwiNDh4NDhcIixcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgZGVuc2l0eTogXCIxLjBcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiBcIi9hbmRyb2lkLWljb24tNzJ4NzIucG5nXCIsXHJcbiAgICAgICAgICAgIHNpemVzOiBcIjcyeDcyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIGRlbnNpdHk6IFwiMS41XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogXCIvYW5kcm9pZC1pY29uLTk2eDk2LnBuZ1wiLFxyXG4gICAgICAgICAgICBzaXplczogXCI5Nng5NlwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgICBkZW5zaXR5OiBcIjIuMFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6IFwiL2FuZHJvaWQtaWNvbi0xNDR4MTQ0LnBuZ1wiLFxyXG4gICAgICAgICAgICBzaXplczogXCIxNDR4MTQ0XCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIGRlbnNpdHk6IFwiMy4wXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogXCIvYW5kcm9pZC1pY29uLTE5MngxOTIucG5nXCIsXHJcbiAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgZGVuc2l0eTogXCI0LjBcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaW50bGlmeS9idW5kbGUtdG9vbHMvdHJlZS9tYWluL3BhY2thZ2VzL3ZpdGUtcGx1Z2luLXZ1ZS1pMThuXHJcbiAgICBWdWVJMThuLmRlZmF1bHQoe1xyXG4gICAgICBydW50aW1lT25seTogdHJ1ZSxcclxuICAgICAgY29tcG9zaXRpb25Pbmx5OiB0cnVlLFxyXG4gICAgICBpbmNsdWRlOiBbcGF0aC5yZXNvbHZlKFwiRDpcXFxcUHJvamVjdHNcXFxcV2Vic2l0ZVxcXFxTYXllYmFtXFxcXGxlcm5hLXJlcG9cXFxccGFja2FnZXNcXFxcdml0ZXNzZVwiLCAnbG9jYWxlcy8qKicpXSxcclxuICAgIH0pLFxyXG5cclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1pbnNwZWN0XHJcbiAgICBJbnNwZWN0LmRlZmF1bHQoe1xyXG4gICAgICAvLyBjaGFuZ2UgdGhpcyB0byBlbmFibGUgaW5zcGVjdCBmb3IgZGVidWdnaW5nXHJcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgfSksXHJcbiAgXSxcclxuXHJcbiAgc2VydmVyOiB7XHJcbiAgICBmczoge1xyXG4gICAgICBzdHJpY3Q6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIFxyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXNzZ1xyXG4gIHNzZ09wdGlvbnM6IHtcclxuICAgIHNjcmlwdDogJ2FzeW5jJyxcclxuICAgIGZvcm1hdHRpbmc6ICdtaW5pZnknLFxyXG4gIH0sXHJcblxyXG4gIG9wdGltaXplRGVwczoge1xyXG4gICAgaW5jbHVkZTogW1xyXG4gICAgICAndnVlJyxcclxuICAgICAgJ3Z1ZS1yb3V0ZXInLFxyXG4gICAgICAnQHZ1ZXVzZS9jb3JlJyxcclxuICAgICAgJ0B2dWV1c2UvaGVhZCcsXHJcbiAgICBdLFxyXG4gICAgZXhjbHVkZTogW1xyXG4gICAgICAndnVlLWRlbWknLFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU0seUJBQXlCO0FBRS9CLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBRTFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE1BQU0sR0FBRyxLQUFLLFFBQVEsaUVBQWlFO0FBQUE7QUFBQTtBQUFBLEVBRzNGLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxVQUFVO0FBQUE7QUFBQSxJQUd0QjtBQUFBLElBR0EsTUFBTTtBQUFBLE1BQ0osWUFBWSxDQUFDLE9BQU87QUFBQTtBQUFBLElBS3RCLFFBQVE7QUFBQSxJQUdSLFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBO0FBQUEsTUFFRixLQUFLO0FBQUE7QUFBQSxJQUlQLFdBQVcsUUFBUTtBQUFBLE1BRWpCLFlBQVksQ0FBQyxPQUFPO0FBQUEsTUFHcEIsU0FBUyxDQUFDLFVBQVUsY0FBYztBQUFBLE1BR2xDLFdBQVc7QUFBQSxRQUdULGNBQWM7QUFBQSxVQUNaLGlCQUFpQjtBQUFBO0FBQUE7QUFBQSxNQUtyQixLQUFLO0FBQUE7QUFBQSxJQUlQLE1BQU0sUUFBUTtBQUFBLE1BQ1osYUFBYTtBQUFBO0FBQUEsSUFJZixTQUFTLFFBQVE7QUFBQSxNQUNmLFVBQVU7QUFBQTtBQUFBLElBR1osVUFBVSxRQUFRO0FBQUEsTUFFaEIsV0FBVztBQUFBLFFBQ1QsSUFBSTtBQUFBO0FBQUE7QUFBQSxJQU1SLFFBQVEsUUFBUTtBQUFBLE1BQ2QsY0FBYztBQUFBLE1BQ2QsZUFBZSxDQUFDLGVBQWU7QUFBQSxNQUMvQixVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBO0FBQUEsVUFFWDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBO0FBQUEsVUFFWDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBO0FBQUEsVUFFWDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBO0FBQUEsVUFFWDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBO0FBQUEsVUFFWDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFPakIsUUFBUSxRQUFRO0FBQUEsTUFDZCxhQUFhO0FBQUEsTUFDYixpQkFBaUI7QUFBQSxNQUNqQixTQUFTLENBQUMsS0FBSyxRQUFRLGlFQUFpRTtBQUFBO0FBQUEsSUFJMUYsUUFBUSxRQUFRO0FBQUEsTUFFZCxTQUFTO0FBQUE7QUFBQTtBQUFBLEVBSWIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBO0FBQUE7QUFBQSxFQU1aLFlBQVk7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFlBQVk7QUFBQTtBQUFBLEVBR2QsY0FBYztBQUFBLElBQ1osU0FBUztBQUFBLE1BQ1A7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUFBLElBRUYsU0FBUztBQUFBLE1BQ1A7QUFBQTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
