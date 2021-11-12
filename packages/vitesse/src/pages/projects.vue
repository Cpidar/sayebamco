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

      <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        <article-card v-for="project of projects" :article="project"></article-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { finalize, take } from 'rxjs';
import { ref$ } from '~/logic/observable-to-ref';
import { Article, fetchProjects } from '~/service/products';
import Loading from '~/components/loading.vue';

const isLoading = ref(true)
const projects = ref$(fetchProjects(1, 12).pipe(
  take(1),
  finalize(() => isLoading.value = false)
  ), [] as Article[])

</script>