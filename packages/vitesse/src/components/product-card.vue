<script setup lang="ts">
import { ProductModel, STRAPI_URL } from '~/service/products';

const props = defineProps<{ product: ProductModel }>()

const currency = "تومان"
const price = computed(() => props.product.price + " " + currency)
</script>

<template>
        <div :key="props.product.id" class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
          <div class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
            <img v-if="props.product.image" :src="STRAPI_URL + props.product.image.url" :alt="props.product.image.alternativeText" class="w-full h-full object-center object-contain sm:w-full sm:h-full" />
          </div>
          <div class="flex-1 p-4 space-y-2 flex flex-col">
            <h3 class="text-2xl font-semibold text-gray-700" style="font-family: 'Iransans-bold' !important;">
              <router-link :to="'/product/'+ props.product.slug">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ props.product.title }}
              </router-link>
            </h3>
            <p class="text-sm text-gray-500">{{ props.product.description }}</p>
            <!-- <div class="flex-1 flex flex-col justify-end"> -->
              <!-- <p class="text-sm italic text-gray-500">{{ product.options }}</p> -->
              <!-- <p class="text-base font-medium text-gray-900">{{ price }}</p> -->
            <!-- </div> -->
          </div>
        </div>
</template>