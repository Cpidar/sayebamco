// register vue composition api globally
// import { RouterOptions, ViteSSG } from 'vite-ssg'
import viteSSR, { ClientOnly } from 'vite-ssr'
import { createHead } from '@vueuse/head'
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
import { RouterOptions } from 'vue-router'
import VueSocialChat from 'vue-social-chat'
import 'vue-social-chat/dist/style.css'

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
export default viteSSR(
  App,
  router,
  (ctx) => {
    api$.subscribe()
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))

    const { app, url, router, isClient, initialState, initialRoute } = ctx
    const head = createHead()
    app.use(head)
    app.use(VueSocialChat)

    app.component(ClientOnly.name, ClientOnly)

    // fetchProductsSortedByID(1, 4).pipe(take(1)).subscribe(v => initialState.trendingProducts = v)
    // fetchFeaturedArticles(3).pipe(take(1)).subscribe( v => initialState.featuredArticles = v)
    // fetchHomePageInfo.pipe(take(1)).subscribe(v => initialState.homePage = v)
    // fetchGlobalInfo.pipe(take(1)).subscribe(v => initialState.globas = v)
  },
)
