<template>
	<div class="w-full">
		<header class="sticky top-0 w-full shadow-md rounded-xl px-6 py-2 max-w-5xl mx-auto flex items-center justify-between z-[100] bg-white backdrop-blur">

			<div class="flex items-center gap-2 min-w-[100px]">
				<img src="/assets/images/Logo.png" alt="Inter AI Logo" class="h-6 md:h-8 w-auto object-contain" />
			</div>
			<nav class="hidden lg:flex items-center gap-10 text-[#1E1E1E] font-medium text-base xl:text-md">
				<NuxtLink @click="$emit('scroll-to', 'home')" class="hover:underline"><button>{{ $t('home') }}</button></NuxtLink>
				<NuxtLink @click="$emit('scroll-to', 'advantages')" class="hover:underline"><button>{{ $t('advantages') }}</button></NuxtLink>
				<NuxtLink @click="$emit('scroll-to', 'interview')" class="hover:underline"><button>{{ $t('interviews') }}</button></NuxtLink>
				<NuxtLink @click="$emit('scroll-to', 'works')"><button>{{ $t('work') }}</button></NuxtLink>
			</nav>
			<div class="flex items-center gap-4">
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
				<NuxtLink
					@click="$emit('scroll-to', 'contact')"
					class="bg-gradient-to-r from-[#2A6FF5] to-[#1B45BE] text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:opacity-90 transition text-sm sm:text-base"
				>
					<button>Bog’lanish</button>
				</NuxtLink>
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
			<div v-if="isMenuOpen" class="lg:hidden w-full py-6 shadow-sm z-40 flex flex-col items-center gap-6 text-white font-medium text-lg">
				<NuxtLink @click="$emit('scroll-to', 'home')"><button>Asosiy sahifa</button></NuxtLink>
				<NuxtLink @click="$emit('scroll-to', 'advantages')"><button>Afzalliklar</button></NuxtLink>
				<NuxtLink @click="$emit('scroll-to', 'interview')"><button>Suhbat jarayoni</button></NuxtLink>
				<NuxtLink @click="$emit('scroll-to', 'works')"><button>Qanday ishlaydi</button></NuxtLink>
				<div class="mt-4 text-lg">
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

const isMenuOpen = ref(false);
const showDropdown = ref(false);
const toggleDropdown = () => {
	showDropdown.value = !showDropdown.value;
};

const { locale } = useI18n();
const locales = [{ code: 'uz' }, { code: 'ru' }, { code: 'en' }];

function changeLang(code) {
	locale.value = code;
	showDropdown.value = false;
}
watch(locale, (val) => console.log("locale changed:", val));

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
