<script setup lang="ts">
import { take, tap } from 'rxjs';
import { ref$ } from '~/logic/observable-to-ref';
import { Article, fetchArticleBySlug, STRAPI_URL } from '~/service/products';
import MarkdownIt from '../../components/markdown-it';
import { Head } from '@vueuse/head'

const selectedImage = ref('')
const props = defineProps<{ slug: string }>()
const article = ref$(fetchArticleBySlug(props.slug).pipe(
  take(1),
  tap(v => {
    selectedImage.value = STRAPI_URL + v.image[0].url
  })), {} as Article)

const selectImage = (image: any) => {
  console.log(image.url)
  selectedImage.value = STRAPI_URL + image.url
}

</script>

<template>
<Head>
  <title>{{article.title}}</title>
  <meta v-for="meta of article.seo" :name="meta.metaTitle" :content="meta.metaDescription">
</Head>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="grid items-start grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
        <div>
          <div class="border-b border-gray-200 pb-10">
            <h2
              class="font-medium text-gray-500"
              v-if="article.category"
            >{{ article.category.name }}</h2>
            <p
              class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >{{ article.title }}</p>
          </div>
          <div class="mt-10 space-y-10">
            <MarkdownIt :source="article.content"></MarkdownIt>
          </div>
          <!-- <dl class="mt-10 space-y-10">
            <div v-for="feature in features" :key="feature.name">
              <dt class="text-sm font-medium text-gray-900">{{ feature.name }}</dt>
              <dd class="mt-3 text-sm text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>-->
        </div>

        <div>
          <div
            v-if="article.image"
            class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden"
          >
            <img
              :src="selectedImage"
              alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
              class="w-full h-full object-center object-cover"
            />
          </div>
          <div
            v-if="article.image"
            class="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8"
          >
            <div
              @click="selectImage(image)"
              v-for="image of article.image"
              class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden"
            >
              <img
                :src="STRAPI_URL + image.url"
                alt="Detail of temperature setting button on kettle bass with digital degree readout."
                class="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
