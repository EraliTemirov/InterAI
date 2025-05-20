<template>
  <div class="flex flex-col md:flex-row justify-center items-center gap-6 px-4 py-8 min-h-screen bg-[#f5f5f5]">
    <!-- CHAP TOMON: Matn va tillar -->
    <div class="w-[480px] h-[480px] bg-hero-pattern-2 bg-cover bg-center rounded-2xl shadow-xl p-8 flex flex-col justify-between">
      <!-- Yuqori qism: matn -->
      <div class="space-y-4">
        <h2 class="text-4xl font-bold leading-snug text-[#1E1E1E]">
          INTER-AI 4 tilda<br /> suhbat o’tkaza oladi
        </h2>
        <p class="text-xl text-[#1E1E1E]">
          So‘rovingizga ko‘ra, 1 hafta ichida yangi tilni qo‘shamiz.
        </p>
      </div>

      <!-- Pastki qism: tillar -->
      <div class="flex flex-wrap gap-3">
        <button class="flex items-center gap-2 px-4 py-2 bg-[#F9F9F9] border rounded-xl shadow-sm">
          <img src='/assets/images/faUzbek.png' alt=""> O'zbek tili
        </button>
        <button class="flex items-center gap-2 px-4 py-2 bg-[#F9F9F9] border rounded-xl shadow-sm">
          <img src="/assets/images/faRus.png" alt=""> Rus tili
        </button>
        <button class="flex items-center gap-2 px-4 py-2 bg-[#F9F9F9] border rounded-xl shadow-sm">
          <img src="/assets/images/faUsa.png" alt=""> Ingliz tili
        </button>
        <button class="flex items-center gap-2 px-4 py-2 bg-[#F9F9F9] border rounded-xl shadow-sm">
          <img src="/assets/images/faSaudi.png" alt=""> Arab tili
        </button>
        <button class="px-4 py-2 bg-[#F9F9F9] border rounded-xl shadow-sm">
          Boshqa tillar
        </button>
      </div>
    </div>

    <!-- O‘NG TOMON: Animatsiya card -->
    <div class="relative w-[480px] h-[480px] bg-white rounded-2xl shadow-xl overflow-hidden">
      <div class="absolute inset-0 animate-spin-slow z-0">
        <img
          src="/assets/images/Orbital.png"
          alt="Orbit"
          class="w-[150%] h-full object-contain pointer-events-none"
        />
        <div
          v-for="(item, i) in texts"
          :key="i"
          class="absolute top-1/2 left-1/2"
        >
          <div :class="`orbit orbit-${i}`">
            <div :class="`keep-horizontal rotate-fix-${i}`"
              class="whitespace-nowrap px-2 py-1 bg-white text-black rounded shadow text-sm font-semibold"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const texts = ['Salom!', 'Hello!', 'Привет!', 'مرحبًا'];
</script>

<style scoped>
/* Sekin aylanish */
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  top: -60%;
  left: -25%;
  width: 190%;
  height: 190%;
  position: absolute;
  animation: spin-slow 40s linear infinite;
}

/* Orbit pozitsiyalari */
.orbit-0 {
  transform: rotate(0deg) translateX(260px);
}
.orbit-1 {
  transform: rotate(90deg) translateX(185px);
}
.orbit-2 {
  transform: rotate(180deg) translateX(220px);
}
.orbit-3 {
  transform: rotate(270deg) translateX(240px);
}

/* Yozuvlar aylanishini gorizontal ushlab turish */
@keyframes rotate-back-0 {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
}
@keyframes rotate-back-1 {
  0% { transform: rotate(-90deg); }
  100% { transform: rotate(-450deg); }
}
@keyframes rotate-back-2 {
  0% { transform: rotate(-180deg); }
  100% { transform: rotate(-540deg); }
}
@keyframes rotate-back-3 {
  0% { transform: rotate(-270deg); }
  100% { transform: rotate(-630deg); }
}
.rotate-fix-0 {
  animation: rotate-back-0 40s linear infinite;
}
.rotate-fix-1 {
  animation: rotate-back-1 40s linear infinite;
}
.rotate-fix-2 {
  animation: rotate-back-2 40s linear infinite;
}
.rotate-fix-3 {
  animation: rotate-back-3 40s linear infinite;
}
</style>
