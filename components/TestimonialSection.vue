<template>
  <section class="bg-white py-16 md:py-24 text-center">
    <h2 class="text-2xl md:text-5xl font-medium text-[#1E1E1E] mb-10">
      Mijozlarimizning qaynoq fikrlari:
    </h2>

    <ClientOnly>
      <Swiper
        :modules="[SwiperAutoplay, SwiperNavigation]"
        :slides-per-view="3"
        :space-between="1"
        :loop="true"
        :speed="1000"
        :autoplay="{ delay: 4000 }"
        navigation
        class="relative max-w-7xl mx-auto"
      >
        <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="bg-[#F9F9F9] rounded-xl p-4 text-left shadow-sm h-full max-w-sm">
            <div class="text-gray-300 mb-4">
              <img src="/assets/images/Frame.png" alt="">
            </div>
            <p class="text-[#1E1E1E] text-base mb-4">
              {{ testimonial.text }}
            </p>
            <div>
              <p class="font-medium text-[#1E1E1E]">{{ testimonial.name }}</p>
              <p class="text-sm text-[#787878]">{{ testimonial.position }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>

    <div class="mt-10">
      <button class="bg-gradient-to-r from-[#2A6FF5] to-[#1B45BE] text-white font-medium py-3 px-8 rounded-lg shadow-md hover:opacity-90 transition">
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
  },
  {
    text: "Har bir mijozning fikri biz uchun qimmatli. Yordamchi AI platformangiz biznesimizga yangi daraja olib keldi. Endi vaqtimiz ko‘proq strategiyaga ketmoqda.",
    name: "Dilnoza N.",
    position: "HR manager"
  }
]
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  background: white;
  border-radius: 9999px;
  padding: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  color: #1E1E1E;
  transition: transform 0.2s;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  transform: scale(1.05);
  width: 10px;
  height: 10px;
}
</style>
