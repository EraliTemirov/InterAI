<template>
  <section class="relative bg-white py-16 md:py-24 overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <div class="inline-flex items-center gap-2 bg-[#F9F9F9] shadow-md border rounded-full px-4 py-2 text-sm text-[#1E1E1E] mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-3-3v6m5-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Aqlli yechim
      </div>
      <h2 class="text-2xl md:text-4xl font-bold text-[#1E1E1E]">INTER-AI bu muammolarga yechim beradi</h2>
    </div>

    <div class="relative mt-24 max-w-6xl mx-auto space-y-10">
      <div
        v-for="(item, index) in solutions"
        :key="index"
        ref="cards"
        class="solution-card"
        :class="{ 'active': activeCard >= index + 1 }"
      >
        <img :src="item.img" :alt="item.alt" class="w-full rounded-xl shadow-md" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const activeCard = ref(0)
const cards = ref([])

const solutions = [
  { img: 'images/Ai1.png', alt: 'Candidates block' },
  { img: './assets/images/Ai2.png', alt: 'AI interview results' },
  { img: '../assets/images/Ai3.png', alt: 'Analytics report' }
]

onMounted(async () => {
  await nextTick() // refs ni to‘liq olish uchun
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = cards.value.findIndex(el => el === entry.target)
        if (index !== -1) {
          activeCard.value = index + 1
        }
      }
    })
  }, { threshold: 0.5 })

  cards.value.forEach(el => observer.observe(el))

  onUnmounted(() => observer.disconnect())
})
</script>

<style scoped>
.solution-card {
  position: relative;
  transition: transform 0.6s ease, z-index 0.6s ease;
  z-index: 0;
}
.solution-card.active {
  transform: translateY(-100px) scale(1.05);
  z-index: 10;
}
</style>
