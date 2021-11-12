// register vue composition api globally
import { RouterOptions, ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/main.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'
import { api$ } from './service/products'

const routes = setupLayouts(generatedRoutes)

const router: RouterOptions = {
  routes,
  // history: createWebHashHistory(),
  scrollBehavior(to, from) {
    if(to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
    return {top: 0}
  }
}
}
// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  router,
  (ctx) => {
    api$.subscribe()
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)

createApp()
