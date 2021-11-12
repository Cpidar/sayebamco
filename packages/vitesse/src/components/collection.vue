<script setup lang="ts">
import { Article, STRAPI_URL } from '~/service/products'

const props = defineProps<{ items: Article[] }>()

</script>

<template>
  <section
    aria-labelledby="collection-heading"
    class="-mt-96 relative sm:mt-0"
  >
    <h2 id="collection-heading" class="sr-only">Collections</h2>
    <div
      class="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8"
    >
      <div
        v-for="item in props.items"
        :key="item.slug"
        class="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5"
      >
        <router-link :to="'/article/'+ item.slug">
          <div aria-hidden="true" class="absolute inset-0 rounded-lg overflow-hidden">
            <div
              class="absolute inset-0 overflow-hidden transform group-hover:scale-110 duration-200"
            >
              <img
                v-if="item.image"
                :src="STRAPI_URL + item.image.url"
                alt="Woman wearing a comfortable cotton t-shirt."
                class="w-full h-full object-center object-cover"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
          </div>
          <div class="absolute inset-0 rounded-lg p-6 flex items-end">
            <div>
              <p aria-hidden="true" class="text-sm text-white">Shop the collection</p>
              <h3 class="mt-1 font-semibold text-white">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  {{ item.title }}
                </a>
              </h3>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
