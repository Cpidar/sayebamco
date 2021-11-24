<script setup lang="ts">
import Logo from '../assets/images/workflow-mark.svg'

const { t } = useI18n()
const address = "اصفهان، دهاقان"
const phones = ['(31) 5333 3861', '(31) 5333 3861', '(913) 920 1435']

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
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
              >{{t('footer.in-touch-title')}}</span>
              <h6 class="text-md font-semibold mt-4">{{ t('labels.address') }}</h6>
              <p class="text-sm">{{ address }}</p>
              <h6 class="text-md font-semibold mt-4">{{ t('labels.phone') }}</h6>
              <p v-for="p of phones" :key="p" class="text-sm">{{ p }}</p>
              <div class="mt-6 lg:mb-0 mb-6">
                <button
                  class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-twitter"></i>
                </button>
                <button
                  class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-facebook-square"></i>
                </button>
                <button
                  class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-dribbble"></i>
                </button>
                <button
                  class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
              >Other Resources</span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                  >MIT License</a>
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/terms?ref=njs-profile"
                  >Terms &amp; Conditions</a>
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/privacy?ref=njs-profile"
                  >Privacy Policy</a>
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/contact-us?ref=njs-profile"
                  >Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            Copyright ©
            <span id="get-current-year">2021</span>
            <a
              href="https://www.creative-tim.com/product/notus-js"
              class="text-blueGray-500 hover:text-gray-800"
              target="_blank"
            >Notus JS by</a>
            <a
              href="https://www.creative-tim.com?ref=njs-profile"
              class="text-blueGray-500 hover:text-blueGray-800"
            >Creative Tim</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
