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
import { api$, fetchFeaturedArticles, fetchGlobalInfo, fetchHomePageInfo, fetchProductsSortedByID, fetchProjects } from './service/products'
import { RouterOptions } from 'vue-router'
import VueSocialChat from 'vue-social-chat'
import 'vue-social-chat/dist/style.css'
import { take } from 'rxjs/operators'

const routes = setupLayouts(generatedRoutes)

const router: RouterOptions = {
  routes,
  // history: createWebHashHistory(),
  scrollBehavior(to, from) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
}

export default viteSSR(
  App,
  router,
  (ctx) => {
    api$.subscribe()
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))

    const { app, initialState, router, url } = ctx
    const head = createHead()
    app.use(head)
    app.use(VueSocialChat)

    // router.beforeEach(async (to, from, next) => {
    //   if (!!to.meta.state && Object.keys(to.meta.state).length > 0) {
    //     // This route has state already (from server) so it can be reused.
    //     // State is always empty in SPA development, but present in SSR development.
    //     return next()
    //   }

    //   try {
    //   } catch {
        
    //   }
      
    //   next()
      
    // })
    app.component(ClientOnly.name, ClientOnly)
    // fetchProductsSortedByID(0, 4).pipe(take(1)).subscribe(v => initialState.trendingProducts = v)
    // fetchFeaturedArticles(3).pipe(take(1)).subscribe(v => initialState.featuredArticles = v)
    // fetchHomePageInfo.pipe(take(1)).subscribe(v => initialState.homePage = v)
    // fetchGlobalInfo.pipe(take(1)).subscribe(v => initialState.globals = v)
    // fetchProjects(1, 3).pipe(take(1)).subscribe(v => initialState.recentProjects = v)
      if (import.meta.env.SSR) {
      } else {
        console.log(initialState)
      }
      return { head }
    })
