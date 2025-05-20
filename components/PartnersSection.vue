<template>
  <section class="py-10 md:py-20 overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 text-center">
      <h2 class="text-lg md:text-md font-light text-[#1E1E1E] mb-10">
        Bu kompaniyalar bilan hamkorlikda ishlaymiz
      </h2>

      <div class="relative w-full overflow-hidden">
        <div class="flex animate-marquee">
          <div class="flex min-w-max gap-8 sm:gap-10 md:gap-24">
            <template v-for="(logo, i) in logos" :key="'first-'+i">
              <img :src="logo" alt="Partner Logo" class="h-12 sm:h-14 w-auto flex-shrink-0" />
            </template>
          </div>

          <div class="flex min-w-max gap-8 sm:gap-10 ml-8 md:gap-24">
            <template v-for="(logo, i) in logos" :key="'second-'+i">
              <img :src="logo" alt="Partner Logo" class="h-12 sm:h-14 w-auto flex-shrink-0" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import artel from '@/assets/images/artel.png'
import revision from '@/assets/images/revision.png' 
import utrucking from '@/assets/images/utrucking.png'
import logistar from '@/assets/images/logistar.png'
import routeeld from '@/assets/images/routeeld.png'
const logos = [
  artel,
  revision,
  utrucking,
  logistar,
  routeeld,
]
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}
</style>
