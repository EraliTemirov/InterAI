<template>
  <section ref="solutionsSection" class="relative bg-white py-16 md:py-24 overflow-hidden min-h-screen">
    <div class="max-w-6xl mx-auto px-4 text-center">
      <div class="inline-flex items-center gap-2 bg-[#F9F9F9] shadow-md border rounded-full px-4 py-2 text-md text-[#1E1E1E] mb-6">
        <img src="/assets/images/star.png" alt="Star Icon" />
        Aqlli yechim
      </div>
      <h2 class="text-2xl md:text-4xl font-medium my-2 text-[#1E1E1E]">INTER-AI bu muammolarga yechim beradi</h2>
    </div>

    <div class="relative max-w-6xl mx-auto mt-24 h-[700px]">
      <div
        v-for="(item, index) in solutions"
        :key="index"
        class="solution-layer"
        :class="{ active: activeIndex >= index }"
        :style="{ top: `${index * 50}px`, zIndex: activeIndex >= index ? 10 + index : 0 }"
      >
        <img :src="item.img" :alt="item.alt" class="solution-img" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import ai1 from '@/assets/images/Ai1.png'
import ai2 from '@/assets/images/Ai2.png'
import ai3 from '@/assets/images/Ai3.png'
import Mai1 from '@/assets/images/Mai1.png'
import Mai2 from '@/assets/images/Mai2.png'
import Mai3 from '@/assets/images/Mai3.png'

const solutionsSection = ref(null)
const activeIndex = ref(0)
const solutions = ref([])

let timeoutSteps = []

const isMobile = () => window.innerWidth < 768 // 768px dan kichik – mobil deb hisoblanadi

const startAnimation = () => {
  solutions.value.forEach((_, i) => {
    const timeout = setTimeout(() => {
      activeIndex.value = i
    }, i * 1000)
    timeoutSteps.push(timeout)
  })
}

const clearAnimationTimeouts = () => {
  timeoutSteps.forEach(clearTimeout)
  timeoutSteps = []
}

onMounted(() => {
  // Ekran o'lchamiga qarab rasm to'plamini tanlaymiz
  solutions.value = isMobile()
    ? [
        { img: Mai1, alt: 'Mobile Candidates block' },
        { img: Mai2, alt: 'Mobile AI interview results' },
        { img: Mai3, alt: 'Mobile Analytics report' }
      ]
    : [
        { img: ai1, alt: 'Candidates block' },
        { img: ai2, alt: 'AI interview results' },
        { img: ai3, alt: 'Analytics report' }
      ]

  if (typeof window !== 'undefined' && solutionsSection.value && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startAnimation()
          } else {
            activeIndex.value = -1
            clearAnimationTimeouts()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(solutionsSection.value)

    onUnmounted(() => {
      observer.disconnect()
    })
  }
})
</script>

<style scoped>
section {
  scroll-margin-top: 80px;
}

.solution-layer {
  position: absolute;
  width: 100%;
  opacity: 0;
  transform: translateY(80px) scale(0.98);
  filter: blur(10px);
  transition: all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.solution-layer.active {
  opacity: 1;
  transform: translateY(0px) scale(1);
  filter: blur(0px);
}

.solution-img {
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
}
</style>
