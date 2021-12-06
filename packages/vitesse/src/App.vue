<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,

import { take, map, shareReplay, pluck } from 'rxjs/operators';
import { ref$ } from './logic/observable-to-ref';
import { fetchGlobalInfo, STRAPI_URL } from './service/products';
import Whatsapp from './components/whatsapp.vue';

// they will be rendered correctly in the html results with vite-ssg
const { locale } = useI18n()
locale.value = 'fa'
const global$ = fetchGlobalInfo.pipe(take(1), shareReplay())
const meta = ref$(global$.pipe(map(global => ({
  title: global.siteName,
  meta: [
    {
      name: global.defaultSeo ? global.defaultSeo.metaTitle : 'شرکت سایه بام',
      description: global.defaultSeo ? global.defaultSeo.metaDescription : ''
    }
  ]
}))), {})
const whatsapp = ref$(global$.pipe(pluck('whatsapp'), map(v => v.map(w => ({
  app: 'whatsapp',
  name: w.name,
  label: w.label,
  number: w.number,
  avatar: {
    src: STRAPI_URL + w.avatar.url,
    alt: w.avatar.alternativeText
  }
})))))
useHead(meta)
</script>

<template>
  <router-view />
  <Whatsapp :attendants="whatsapp"/>
</template>
