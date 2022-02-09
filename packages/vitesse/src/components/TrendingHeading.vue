<script setup lang="ts">
import { ProductModel } from '~/service/products';

const { t } = useI18n()
const props = defineProps<{ products: ProductModel[] }>()

// const get = async () => {
//   const res = await api.get('products?_sort=id:DESC&_limit=3')
//   products.value = res.data
// }

// onBeforeMount(get)

</script>
<template>
  <section aria-labelledby="trending-heading" id="trendingProducts">
    <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:pt-32 lg:px-8">
      <div class="md:flex md:items-center md:justify-between">
        <h2
          id="favorites-heading"
          class="my-10 text-2xl font-extrabold tracking-tight text-gray-900"
        >{{t('featured-products.titel')}}</h2>
        <router-link to="/products">
        <sapn
          href="#"
          class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
        >
          {{t('featured-products.see-more')}}
          <span aria-hidden="true">&larr;</span>
        </sapn>
        </router-link>
      </div>

      <div
        class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
      >
        <product-card v-for="product of props.products" :product="product"></product-card>
      </div>

      <div class="mt-8 text-sm md:hidden">
        <router-link to="/products">
        <span href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          {{t('featured-products.see-more')}}
          <span aria-hidden="true">&larr;</span>
        </span>
        </router-link>
      </div>
    </div>
  </section>
</template>
