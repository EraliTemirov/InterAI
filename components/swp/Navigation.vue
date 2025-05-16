<template>
  <div class="flex gap-x-6">
    <UButton
      @click="swiper.slidePrev()"
      color="white"
      class="text-main p-4 ring-main/[.2]"
      variant="outline"
      size="xl"
      icon="i-heroicons-chevron-left"
    />
    <UButton
      @click="swiper.slideNext()"
      color="white"
      class="text-main p-4 ring-main/[.2]"
      variant="outline"
      size="xl"
      icon="i-heroicons-chevron-right"
    />
  </div>
</template>
<script setup>
const swiper = useSwiper();
</script>
<style></style>