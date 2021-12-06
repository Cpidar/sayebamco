<script setup lang="ts">
import { STRAPI_URL } from '~/service/products';

const props = defineProps<{ perks: { title: string, icon: { url: string, alternativeText: string } }[] }>()

const { t } = useI18n()
const perks = [
  {
    name: t('Perks.perk01'),
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
    description: 'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
  },
  {
    name: t('Perks.perk02'),
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
    description:
      'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
  },
  {
    name: t('Perks.perk03'),
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    description: 'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: t('Perks.perk04'),
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    description: 'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
  },
]
</script>

<template>
      <section aria-labelledby="perks-heading" class="bg-gray-50 border-t border-gray-200">
        <h2 id="perks-heading" class="sr-only">Our perks</h2>

        <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
          <div class="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            <div v-for="perk in props.perks ? props.perks : perks" :key="perk.title" class="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div class="md:flex-shrink-0">
                <div v-if="perk.icon" class="flow-root">
                  <img class="-my-1 h-24 w-auto mx-auto" :src="STRAPI_URL + perk.icon.url" :alt="perk.icon.alternativeText" />
                </div>
              </div>
              <div class="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                <h3 class="text-sm font-semibold tracking-wide uppercase text-gray-900">
                  {{ perk.title }}
                </h3>
                <!-- <p class="mt-3 text-sm text-gray-500">
                  {{ perk.description }}
                </p> -->
              </div>
            </div>
          </div>
        </div>
      </section>
</template>