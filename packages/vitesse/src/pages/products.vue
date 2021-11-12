<!-- <script setup lang="ts"></script> -->

<!-- <template></template> -->

<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <loading v-if="isLoading" />
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>

      <div
        class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
      >
        <product-card v-for="product of products" :product="product"></product-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { finalize, take } from 'rxjs';
import { ref$ } from '~/logic/observable-to-ref';
import { fetchProductsSortedByID, ProductModel } from '~/service/products';

const isLoading = ref(true)
// const props = defineProps<{ products: ProductModel[] }>()
const products = ref$(fetchProductsSortedByID(1, 12).pipe(
  take(1),
  finalize(() => isLoading.value = false)
), [] as ProductModel[])

// const products = [
//   {
//     id: 1,
//     name: 'Basic Tee 8-Pack',
//     href: '#',
//     price: '$256',
//     description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
//     options: '8 colors',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
//     imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
//   },
//   {
//     id: 2,
//     name: 'Basic Tee',
//     href: '#',
//     price: '$32',
//     description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
//     options: 'Black',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
//     imageAlt: 'Front of plain black t-shirt.',
//   },
//   // More products...
// ]

</script>