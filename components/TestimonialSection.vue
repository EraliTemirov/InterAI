<template>
  <section class="bg-white py-16 md:py-24 text-center">
    <h2 class="text-2xl md:text-4xl font-bold text-[#1E1E1E] mb-10">
      Mijozlarimizning qaynoq fikrlari:
    </h2>

    <div class="relative max-w-6xl mx-auto flex items-center">
      <button class="absolute left-0 z-10 bg-white shadow-md rounded-full p-2 hover:scale-105 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-[#F9F9F9] rounded-xl p-6 text-left shadow-sm"
        >
          <div class="text-5xl text-gray-300 mb-4">“</div>
          <p class="text-[#1E1E1E] text-base mb-4">
            {{ testimonial.text }}
          </p>
          <div>
            <p class="font-bold text-[#1E1E1E]">{{ testimonial.name }}</p>
            <p class="text-sm text-gray-500">{{ testimonial.position }}</p>
          </div>
        </div>
      </div>

      <button class="absolute right-0 z-10 bg-white shadow-md rounded-full p-2 hover:scale-105 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <div class="mt-10">
      <button class="bg-gradient-to-r from-[#2A6FF5] to-[#1B45BE] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:opacity-90 transition">
        Bepul foydalaning
      </button>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    text: "Biz har yili ko‘plab xodimlar yollaymiz, va oldin bu juda ko‘p vaqt va mablag‘ talab qilardi. Ushbu AI platforma yordamida biz tanlov jarayonini avtomatlashtirdik va kerakli nomzodlarni aniqroq ajrata boshladik. Odatdagi yollash vaqtimiz 2 haftaga qisqardi!",
    name: "Bahrom Y.",
    position: "CEO Logistar academy"
  },
  {
    text: "Texnik vakantiyalar uchun to‘g‘ri odamni topish doim qiyin bo‘lgan. AI yordamida biz nafaqat rezyume tanlash, balki haqiqiy kompetensiyaga asoslangan baholash imkoniyatiga ega bo‘ldik. Tez, aniq va professional yondashuv.",
    name: "Muhammadali Sh.",
    position: "CEO Route ELD"
  },
  {
    text: "Biz kichik startapmiz va har bir tanlov xatosiz bo‘lishi kerak. AI asosidagi bu tizim bizga vaqtni tejabgina qolmay, eng mos keladigan nomzodlarni taklif qildi. To‘liq tavsiya qilaman.",
    name: "Zafar F.",
    position: "CEO Revision"
  }
]
</script>
