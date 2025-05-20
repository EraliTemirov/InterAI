<template>
  <section class="relative bg-white py-16 md:py-24 overflow-hidden" ref="solutionsSection">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <div class="inline-flex items-center gap-2 bg-[#F9F9F9] shadow-md border rounded-full px-4 py-2 text-md text-[#1E1E1E] mb-6">
        <img src="/assets/images/star.png" alt="">
        Aqlli yechim
      </div>
      <h2 class="text-2xl md:text-4xl font-medium my-2 text-[#1E1E1E]">INTER-AI bu muammolarga yechim beradi</h2>
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
import ai1 from '@/assets/images/Ai1.png'
import ai2 from '@/assets/images/Ai2.png'
import ai3 from '@/assets/images/Ai3.png'

const activeCard = ref(0)
const cards = ref([])
const solutionsSection = ref(null)
const nextSectionTriggered = ref(false)

const solutions = [
  { img: ai1, alt: 'Candidates block' },
  { img: ai2, alt: 'AI interview results' },
  { img: ai3, alt: 'Analytics report' }
]

onMounted(async () => {
  await nextTick() // refs ni to'liq olish uchun
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = cards.value.findIndex(el => el === entry.target)
        if (index !== -1) {
          activeCard.value = index + 1
          
          // Agar oxirgi rasm aktiv bo'lsa va hodisa hali sodir bo'lmagan bo'lsa
          if (index === solutions.length - 1 && !nextSectionTriggered.value) {
            // Keyingi componentga scrollni boshlash uchun timer
            setTimeout(() => {
              nextSectionTriggered.value = true
              scrollToNextSection()
            }, 1000) // 1 soniya kutish
          }
        }
      }
    })
  }, { threshold: 0.5 })
  
  cards.value.forEach(el => observer.observe(el))
  
  onUnmounted(() => observer.disconnect())
})

function scrollToNextSection() {
  // Keyingi elementni topish
  const nextSection = solutionsSection.value.nextElementSibling
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.solution-card {
  position: relative;
  transition: transform 0.6s ease, z-index 0.1s;
  z-index: 0;
  margin-top: -100px; /* Rasmlarni bir-biriga yaqinroq joylashtirish */
}

/* Birinchi rasmni normal pozitsiyada ko'rsatish */
.solution-card:first-child {
  margin-top: 0;
}

.solution-card.active {
  transform: translateY(-100px) scale(1.05);
  z-index: 10;
}

/* Aktivmasligida rasmlarni yashirish */
.solution-card:not(.active) {
  opacity: 0.7;
  transform: translateY(0) scale(0.95);
}

/* Animatsiyani yaxshilash */
section {
  min-height: 100vh; /* Scrol animatsiyasi uchun yetarli joy */
}
</style>