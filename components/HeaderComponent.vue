<template>
	<div class="w-full">
		<!-- Header -->
		<header class="relative w-full shadow-md rounded-xl px-6 py-2 max-w-6xl mx-auto flex items-center justify-between z-50 bg-white">
			<!-- Logo -->
			<div class="flex items-center gap-2 min-w-[100px]">
				<img src="/assets/images/Logo.png" alt="Inter AI Logo" class="h-6 md:h-8 w-auto object-contain" />
			</div>

			<!-- Desktop Navigation -->
			<nav class="hidden lg:flex items-center gap-10 text-[#1E1E1E] font-medium text-base xl:text-md">
				<NuxtLink @click="$emit('scroll-to', 'features')" class="hover:underline">Asosiy sahifa</NuxtLink>
				<NuxtLink to="/advantages" class="hover:underline">Afzalliklar</NuxtLink>
				<NuxtLink to="/interview-process" class="hover:underline">Suhbat jarayoni</NuxtLink>
				<NuxtLink @click="$emit('scroll-to', 'animation')">Qanday ishlaydi</NuxtLink>
			</nav>

			<!-- Right section -->
			<div class="flex items-center gap-4">
				<!-- Language Switcher (desktop) -->
				<div class="relative hidden lg:block">
					<button @click="toggleDropdown" class="flex items-center gap-1 text-[#1E1E1E] font-medium">
						{{ locale.toUpperCase() }}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</button>

					<div v-if="showDropdown" class="absolute top-full mt-2 bg-white border rounded shadow z-20 min-w-[60px]">
						<button
							v-for="lang in locales"
							:key="lang.code"
							@click="changeLang(lang.code)"
							class="block w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
							:class="{ 'bg-gray-100 font-semibold': locale === lang.code }"
						>
							{{ lang.code.toUpperCase() }}
						</button>
					</div>
				</div>
				<!-- Contact Button -->
				<NuxtLink
					to="/contact"
					class="bg-gradient-to-r from-[#2A6FF5] to-[#1B45BE] text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:opacity-90 transition text-sm sm:text-base"
				>
					Bog’lanish
				</NuxtLink>

				<!-- Mobile Menu Toggle Button -->
				<button @click="isMenuOpen = !isMenuOpen" class="lg:hidden">
					<svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#1E1E1E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#1E1E1E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</header>

		<!-- Mobile Navigation (shown under header) -->
		<transition name="fade">
			<div v-if="isMenuOpen" class="lg:hidden w-full bg-white py-6 shadow-md z-40 flex flex-col items-center gap-6 text-[#0A2A66] font-medium text-lg">
				<NuxtLink to="/" @click="isMenuOpen = false">Asosiy sahifa</NuxtLink>
				<NuxtLink to="/advantages" @click="isMenuOpen = false">Afzalliklar</NuxtLink>
				<NuxtLink to="/interview-process" @click="isMenuOpen = false">Suhbat jarayoni</NuxtLink>
				<NuxtLink to="/how-it-works" @click="isMenuOpen = false">Qanday ishlaydi</NuxtLink>

				<!-- Language Switcher (mobile) -->
				<div class="mt-4">
					<button class="block px-4 py-2 hover:bg-gray-100 w-full text-center">UZ</button>
					<button class="block px-4 py-2 hover:bg-gray-100 w-full text-center">RU</button>
					<button class="block px-4 py-2 hover:bg-gray-100 w-full text-center">EN</button>
				</div>
			</div>
		</transition>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const showDropdown = ref(false);
const toggleDropdown = () => {
	showDropdown.value = !showDropdown.value;
};

const { locale } = useI18n();
const locales = [{ code: 'uz' }, { code: 'ru' }, { code: 'en' }, { code: 'ar' }];

function changeLang(code) {
	locale.value = code;
	showDropdown.value = false;
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
