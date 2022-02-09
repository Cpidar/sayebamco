<script setup lang="ts">
import IconInstagram from '~icons/mdi/instagram'
import IconWhatsapp from '~icons/mdi/whatsapp'
import IconTelegram from '~icons/mdi/telegram'
import IconPhone from '~icons/mdi/phone'
import Logo from '../assets/images/logo.png'

const { t } = useI18n()
const address = "اصفهان، دهاقان، ناحیه صنعتی گلشن"
const phones = ['0138 322 (0913)', '2308 322 (0913)']

</script>

<template>
  <footer class="relative bg-gray-50 border-t border-gray-200 pt-8 pb-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap ltr:text-left ltr:lg:text-left rtl:text-right rtl:lg:text-right">
        <div class="w-full lg:w-4/12 px-4">
          <img :src="Logo" alt="Sayebam" class="h-12 w-auto my-4" />
          <h4 class="text-xl fonat-semibold text-blueGray-700">{{ t('footer.title') }}</h4>
          <h5 class="text-md mt-0 mb-2 text-blueGray-600">{{ t('footer.subtitle') }}</h5>
        </div>
        <div class="w-full lg:w-8/12 px-4">
          <div class="flex flex-wrap items-top my-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
              >{{ t('footer.in-touch-title') }}</span>
              <h6 class="text-md font-semibold mt-4">{{ t('labels.address') }}</h6>
              <p class="text-sm">{{ address }}</p>
              <h6 class="text-md font-semibold mt-4">{{ t('labels.phone') }}</h6>
              <p v-for="p of phones" :key="p" class="text-sm">{{ p }}</p>
              <div class="mt-6 grid grid-cols-4 gap-2 lg:mb-0 mb-6">
                <a
                  id="instagram"
                  class="flex items-center justify-center border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-12 h-12 transform hover:-translate-y-3 rounded-full duration-500"
                  href="https://www.instagram.com/sayebamco/"
                >
                  <icon-instagram />
                </a>
                <a
                  id="whatsapp"
                  class="flex items-center justify-center bg-white duration-500 w-12 h-12 border-2 rounded-full border-green-600 transform hover:-translate-y-3 text-2xl text-green-500 hover:bg-green-600 hover:text-white"
                  href=" https://wa.me/989393220138"
                >
                  <icon-whatsapp />
                </a>

                <a
                  id="telegram"
                  class="flex items-center justify-center bg-white transform hover:-translate-y-3 border-2 w-12 h-12 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl"
                >
                  <icon-telegram />
                </a>
                <a
                  id="phone"
                  class="flex items-center justify-center bg-white transform hover:-translate-y-3 border-2 w-12 h-12 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl"
                  href="tel:+989393220138"
                >
                  <icon-phone />
                </a>
              </div>
            </div>
            <div class="w-full lg:w-8/12 px-4">
              <!-- <iframe
                src="https://balad.ir/embed?p=3JwGApkIFVRFNs"
                title="مشاهده «خیابان گلخانه سازان ایران گلشن» روی نقشه بلد"
                width="100%"
                height="100%"
                frameborder="0"
                style="border:0;"
                allowfullscreen
                aria-hidden="false"
                tabindex="0"
              ></iframe>-->
              <iframe
                src="https://balad.ir/embed?p=3yr9acp5tmq8RD"
                title="مشاهده «شرکت سایه بام سبز زاینده رود» روی نقشه بلد"
                width="100%"
                height="100%"
                frameborder="0"
                style="border:0;"
                allowfullscreen
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            طراحی سایت توسط
            <!-- <span id="get-current-year">2021</span> -->
            <a
              href="https://www.creative-tim.com/product/notus-js"
              class="text-blueGray-500 hover:text-gray-800"
              target="_blank"
            >حسین موذنی</a>
            <!-- <a
              href="https://www.creative-tim.com?ref=njs-profile"
              class="text-blueGray-500 hover:text-blueGray-800"
            >Creative Tim</a>-->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
