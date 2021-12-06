<script setup lang="ts">

import { finalize, take } from 'rxjs'
import { Article, fetchFeaturedArticles, fetchHomePageInfo, fetchProductsSortedByID, fetchProjects, ProductModel } from '~/service/products'
import StatisticSection from '~/components/statistic-section.vue';
import { ref$ } from '~/logic/observable-to-ref';
import Loading from '~/components/loading.vue';

const isLoading = ref(true)
const trendingProducts = ref$(fetchProductsSortedByID(1, 4).pipe(take(1)), [] as ProductModel[]);
const homepageInfo = ref$(fetchHomePageInfo.pipe(take(1)), {})
const featuredArticles = ref$(fetchFeaturedArticles(3).pipe(take(1), finalize(() => isLoading.value = false)), [] as Article[])
const projects = ref$(fetchProjects(1, 3).pipe(take(1)), [] as Article[])

</script> 

<template>
  <!-- Hero section -->
  <div class="relative">
    <hero :hero="homepageInfo.hero" />
    <loading v-if="isLoading" />
    <collection :items="featuredArticles" />
  </div>
  <!-- <category-preview /> -->
  <trending-heading :products="trendingProducts" />
  <statistic-section :data="homepageInfo.Statistics"/>
  <blog-section :items="projects" />
  <perk-headings :perks="homepageInfo.perks" />
  <!-- <c-t-a01 /> -->
</template>

<route lang="yaml">
meta:
  layout: home
</route>
