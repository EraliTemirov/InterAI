<template>
  <section class="bg-black text-white py-20 relative">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-6">
      <!-- Step List with Progress -->
      <div class="md:w-1/2 flex flex-col justify-center">
        <h2 class="text-3xl md:text-4xl font-semibold mb-4">Bu qanday ishlaydi?</h2>
        <p class="text-gray-400 mb-12 text-lg">Oddiy 4 bosqichda eng yaxshi nomzod siz bilan ishlashga tayyor:</p>

        <div class="relative">
          <div class="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-600">
            <div
              class="w-full bg-blue-500 transition-all duration-700"
              :style="{ height: progressHeight }"
            ></div>
          </div>

          <div
            v-for="(step, index) in steps"
            :key="index"
            ref="stepRefs"
            class="relative pl-12 py-6"
          >
            <div
              class="absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
              :class="activeStep === index
                ? 'bg-blue-500 text-white scale-105 shadow-lg'
                : 'bg-gray-800 text-gray-400'"
            >
              {{ index + 1 }}
            </div>
            <p
              :class="activeStep === index ? 'text-white font-semibold' : 'text-gray-500'"
              class="text-base leading-snug"
            >
              {{ step.title }}
            </p>
          </div>
        </div>
      </div>

      <!-- Image Preview -->
      <div class="md:w-1/2 flex items-center justify-center">
        <transition name="fade" mode="out-in">
          <div
            :key="steps[activeStep].img"
            class="w-full h-[400px] md:h-[460px] rounded-xl bg-white p-4 flex items-center justify-center shadow-xl"
          >
            <img
              :src="steps[activeStep].img"
              :alt="steps[activeStep].title"
              class="w-full h-full object-contain rounded-lg"
            />
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import works1 from '@/assets/images/works1.png'
import works2 from '@/assets/images/works2.png'
import works3 from '@/assets/images/works3.png'
import works4 from '@/assets/images/works4.png'

const steps = [
  {
    title: 'Ishga olish talablaringizni kiriting',
    img: works1
  },
  {
    title: 'AI talablaringizni o‘rganib chiqib suhbat uchun link taqdim qiladi.',
    img: works2
  },
  {
    title: 'Link orqali o‘tgan nomzodlar bilan AI suhbat o‘tkazadi va baholaydi.',
    img: works3
  },
  {
    title: 'Suhbatdan eng yaxshi 10-15% nomzodlarni sizga taqdim etadi.',
    img: works4
  }
]

const activeStep = ref(0)
const stepRefs = ref([])
const progressHeight = ref('0%')

onMounted(async () => {
  await nextTick()
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepRefs.value.findIndex((el) => el === entry.target)
          if (index !== -1) {
            activeStep.value = index
            progressHeight.value = `${((index + 1) / steps.length) * 100}%`
          }
        }
      })
    },
    {
      threshold: 0.75,
      rootMargin: '0px 0px -30% 0px'
    }
  )

  stepRefs.value.forEach((el) => observer.observe(el))
  onUnmounted(() => observer.disconnect())
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>