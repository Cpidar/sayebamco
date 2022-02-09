<script setup lang="ts">

import { finalize, take } from 'rxjs'
import { Article, fetchFeaturedArticles, fetchHomePageInfo, fetchProductsSortedByID, fetchProjects, ProductModel } from '~/service/products'
// import StatisticSection from '~/components/statistic-section.vue';
import { ref$ } from '~/logic/observable-to-ref';
// import Loading from '~/components/loading.vue';
import { useContext } from 'vite-ssr'
import { Head } from '@vueuse/head'
import { refFrom } from 'vuse-rx'

const { initialState } = useContext()

const state = reactive(initialState || null)
const isLoading = ref(true)

nextTick(() => isLoading.value = false)

// const trendingProducts = refFrom(fetchProductsSortedByID(0, 3).pipe(take(1)), [] as ProductModel[])

// onUpdated(() => isLoading.value = false)
// onMounted(() => isLoading.value = false)
state.trendingProducts = ref$(fetchProductsSortedByID(0, 3).pipe(take(1)), [] as ProductModel[]);
state.trendingProducts = reactive(initialState.trendingProducts)
state.homePage = ref$(fetchHomePageInfo.pipe(take(1)), {})
state.featuredArticles = ref$(fetchFeaturedArticles(3).pipe(take(1), finalize(() => isLoading.value = false)), [] as Article[])
state.recentProjects = ref$(fetchProjects(1, 3).pipe(take(1)), [] as Article[])

</script> 

<template>
  <Head>
    <title>شرکت سایه بام سبز زاینده رود</title>
    <meta
      v-if="state.homePage"
      v-for="m of state.homePage.seo"
      :name="m.metaTitle"
      :content="m.metaDescription"
    />
  </Head>
  <!-- Hero section -->
  <div v-if="isLoading">
    <loading />
  </div>
  <div v-if="!isLoading">
    <div class="relative">
      <hero :hero="state.homePage.hero" />
      <collection :items="state.featuredArticles" />
    </div>
    <!-- <category-preview /> -->
    <trending-heading :products="state.trendingProducts" />
    <statistic-section :data="state.homePage.Statistics" />
    <blog-section :items="state.recentProjects" />
    <perk-headings :perks="state.homePage.perks" />
  </div>
  <!-- <c-t-a01 /> -->
</template>

<route lang="yaml">
meta:
  layout: home
</route>
