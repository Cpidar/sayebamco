<script setup lang="ts">

import { take, map, shareReplay, pluck } from 'rxjs/operators';
import { ref$ } from './logic/observable-to-ref';
import { fetchGlobalInfo, STRAPI_URL, Global } from './service/products';
import Whatsapp from './components/whatsapp.vue';
import { Head } from '@vueuse/head'

const { locale } = useI18n()
locale.value = 'fa'
const global$ = fetchGlobalInfo.pipe(take(1), shareReplay())
// const meta = reactive({} as Global)
// global$.pipe(take(1)).subscribe(v => {
//   meta.siteName = v.siteName
//   meta.defaultSeo = v.defaultSeo
// })

const meta = ref$(global$.pipe(take(1)), {} as Global)
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
</script>

<template>
<Head>
  <!-- <title>{{meta.siteName}}</title> -->
  <meta v-if="meta.defaultSeo" :name="meta.defaultSeo.metaTitle" :content="meta.defaultSeo.metaDescription" />
</Head>
  <router-view />
  <Whatsapp :attendants="whatsapp" />
</template>
