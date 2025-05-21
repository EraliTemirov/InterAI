<template>
	<section class="bg-white py-16 md:py-24 text-center">
		<h2 class="text-2xl md:text-5xl font-medium text-[#1E1E1E] mb-10">Mijozlarimizning qaynoq fikrlari:</h2>

		<ClientOnly>
			<Swiper
				:modules="[SwiperAutoplay, SwiperNavigation]"
				:loop="true"
				:autoplay="{ delay: 4000, disableOnInteraction: false }"
				:speed="800"
				:space-between="16"
				:breakpoints="{
					0: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 }
				}"
				navigation
				class="relative max-w-6xl mx-auto px-4"
			>
				<SwiperSlide v-for="(testimonial, index) in testimonials" :key="index" class="flex items-stretch">
					<div class="bg-[#F9F9F9] rounded-xl p-6 text-left shadow-md w-full h-full flex flex-col justify-between max-w-sm mx-auto">
						<div>
							<div class="text-gray-300 mb-4">
								<img src="/assets/images/Frame.png" alt="Quote" />
							</div>
							<p class="text-[#1E1E1E] text-base mb-4">
								{{ testimonial.text }}
							</p>
						</div>
						<div>
							<p class="font-medium text-[#1E1E1E]">{{ testimonial.name }}</p>
							<p class="text-sm text-[#787878]">{{ testimonial.position }}</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</ClientOnly>

		<div class="mt-10">
			<button  @click="$emit('scroll-to', 'contact')" class="bg-gradient-to-r from-[#2A6FF5] to-[#1B45BE] text-white font-medium py-3 px-8 rounded-lg shadow-md hover:opacity-90 transition">Bepul foydalaning</button>
		</div>
	</section>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay as SwiperAutoplay, Navigation as SwiperNavigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
	{
		text: 'Biz har yili ko‘plab xodimlar yollaymiz, va oldin bu juda ko‘p vaqt va mablag‘ talab qilardi. Ushbu AI platforma yordamida biz tanlov jarayonini avtomatlashtirdik va kerakli nomzodlarni aniqroq ajrata boshladik. Odatdagi yollash vaqtimiz 2 haftaga qisqardi!',
		name: 'Bahrom Y.',
		position: 'CEO Logistar academy'
	},
	{
		text: 'Texnik vakantiyalar uchun to‘g‘ri odamni topish doim qiyin bo‘lgan. AI yordamida biz nafaqat rezyume tanlash, balki haqiqiy kompetensiyaga asoslangan baholash imkoniyatiga ega bo‘ldik. Tez, aniq va professional yondashuv.',
		name: 'Muhammadali Sh.',
		position: 'CEO Route ELD'
	},
	{
		text: 'Biz kichik startapmiz va har bir tanlov xatosiz bo‘lishi kerak. AI asosidagi bu tizim bizga vaqtni tejabgina qolmay, eng mos keladigan nomzodlarni taklif qildi. To‘liq tavsiya qilaman.',
		name: 'Zafar F.',
		position: 'CEO Revision'
	},
];
</script>
<style scoped>
.swiper-button-prev,
.swiper-button-next {
	width: 32px; /* Kichikroq o'lcham */
	height: 32px;
	font-size: 14px; /* Icon hajmi */
	background-color: #e5e7eb; /* Tailwind'dagi gray-200 rangi */
	border-radius: 9999px; /* Butunlay yumaloq qilish */
	color: #1e1e1e;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s ease;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
	transform: scale(1.1);
	background-color: #d1d5db;
}
.swiper-button-next::after,
.swiper-button-prev::after {
	font-size: 14px; /* Icon o'lchami */
}

</style>
