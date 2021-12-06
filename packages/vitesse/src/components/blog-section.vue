<script setup lang="ts">
import { Article, STRAPI_URL } from '~/service/products';

const { t } = useI18n()
const props = defineProps<{ items: Article[] }>()

</script>
<template>
<div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-full"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          {{t('Projects.title')}}
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          {{t('Projects.subtitle')}}
        </p>
      </div>
      <div v-if="props.items.length > 0" class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        
          <div v-for="item of props.items" :key="item.slug" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover" :src="STRAPI_URL + item.image[0].url" :alt="item.image[0].alternativeText">
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <!-- <p class="text-sm font-medium text-indigo-600">
                  <a href="#" class="hover:underline">
                    {{t('Projects.title')}}
                  </a>
                </p> -->
                <a :href="'/article/' + item.slug" class="block mt-2">
                  <p class="text-xl font-semibold text-gray-900">
                    {{item.title}}
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    {{item.description}}
                  </p>
                </a>
              </div>
              <!-- <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <span class="sr-only">Roel Aufderehar</span>
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="#" class="hover:underline">
                      Roel Aufderehar
                    </a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-03-16">
                      Mar 16, 2020
                    </time>
                    <span aria-hidden="true">
                      ·
                    </span>
                    <span>
                      6 min read
                    </span>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        
      </div>
    </div>
  </div>
</template>