<template>
        <div aria-hidden="true" class="hidden absolute inset-0 sm:flex sm:flex-col">
          <div class="flex-1 relative w-full bg-gray-800">
            <div class="absolute inset-0 overflow-hidden">
              <img :src="HeroImage" />
            </div>
            <div class="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div class="w-full bg-white h-32 md:h-40 lg:h-48" />
        </div>

        <div class="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
          <!-- Background image and overlap -->
          <div aria-hidden="true" class="absolute inset-0 flex flex-col sm:hidden">
            <div class="flex-1 relative w-full bg-gray-800">
              <div class="absolute inset-0 overflow-hidden">
                <img :src="HeroImage" />
              </div>
              <div class="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div class="w-full bg-white h-48" />
          </div>
          <div class="relative py-32">
            <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">{{t('hero.title')}}</h1>
            <div class="mt-4 sm:mt-6">
              <a href="#" class="inline-block bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">Shop Collection</a>
            </div>
          </div>
        </div>
</template>

<script setup lang="ts">
import HeroImage from '../assets/images/home-page-01-hero-full-width.jpg'

const { t } = useI18n()

</script>
