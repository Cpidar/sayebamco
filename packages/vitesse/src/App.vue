<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,

import { take, map } from 'rxjs/operators';
import { ref$ } from './logic/observable-to-ref';
import { fetchGlobalInfo } from './service/products';
import Whatsapp from './components/whatsapp.vue';

// they will be rendered correctly in the html results with vite-ssg
const { locale } = useI18n()
locale.value = 'fa'
const global = ref$(fetchGlobalInfo.pipe(take(1), map(global => ({
  title: global.siteName,
  meta: [
    {
      name: global.defaultSeo ? global.defaultSeo.metaTitle : 'شرکت سایه بام',
      description: global.defaultSeo ? global.defaultSeo.metaDescription : ''
    }
  ]
}))
), {})
useHead(global)
</script>

<template>
  <router-view />
  <Whatsapp />
</template>
