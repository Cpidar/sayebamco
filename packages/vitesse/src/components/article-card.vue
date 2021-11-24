<script setup lang="ts">

import { Article, STRAPI_URL } from '~/service/products';
const props = defineProps<{ article: Article }>()
</script>

<template>
    <router-link :to="'/article/' + props.article.slug">
        <article
            class="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer"
        >
            <div class="max-h-140 overflow-hidden">
                <img
                    class="w-full h-auto"
                    :src="STRAPI_URL + props.article.image.url"
                    :alt="props.article.image.alternativeText"
                />
            </div>
            <div class="p-7 my-auto pb-12">
                <h1 class="text-2xl font-semibold text-gray-700">{{ props.article.title }}</h1>
                <p
                    class="text-xl font-light leading-relaxed text-gray-400 mt-5"
                >{{ props.article.description }}</p>
            </div>
        </article>
    </router-link>
</template>
