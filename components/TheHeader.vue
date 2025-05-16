<template>
	<header id="header"
					class="top-0 left-0 dark:shadow-white/[.1] dark:bg-main duration-300 ease-in-out w-full z-[20] flex justify-between">
		<div class="w-full container lg:px-8 xl:px-16">
			<div class="grid grid-cols-[60px_1fr_60px] items-center justify-items-center lg:flex lg:items-center lg:justify-between">
				<UButton
					@click="isMenuOpen = !isMenuOpen"
					size="sm"
					variant="ghost"
					color="primary"
					class="z-[101] lg:hidden"
				>
					<template #trailing>
						<label class="hamburger select-none pointer-events-none">
							<input v-model="isMenuOpen" type="checkbox" />
							<svg viewBox="0 0 32 32">
								<path
									class="line line-top-bottom"
									d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
								></path>
								<path class="line" d="M7 16 27 16"></path>
							</svg>
						</label>
					</template>
				</UButton>
				<div id="logo" class="p-3 sm:p-4 xl:p-6 shrink-0 z-[101]">
					<h2 @click="navigateTo('/')" class="text-2xl xl:text-3xl font-bold xl:font-extrabold uppercase cursor-pointer">Unione <span
						class="text-purple">ELD</span></h2>
				</div>

				<!-- Desktop Navigation -->
				<nav class="flex items-center gap-x-6">
					<ClientOnly>
						<ul class="hidden lg:flex text-inherit gap-x-6 font-bold tracking-wide uppercase">
							<li @click="scrollToTop">
								<ULink class="link" :class="{'link-active': !route.hash && route.path === '/'}" to="/">HomePage</ULink>
							</li>
							<li>
								<ULink class="link" active-class="link-active" to="/about">About</ULink>
							</li>
							<li>
								<ULink class="link" active-class="link-active" :exact-hash="true" to="/#features">Features</ULink>
							</li>
							<li>
								<ULink class="link" active-class="link-active" :exact-hash="true" to="/#benefits">Benefits</ULink>
							</li>
							<li>
								<ULink class="link" active-class="link-active" :exact-hash="true" to="/#faq">FAQ</ULink>
							</li>
							<li>
								<ULink class="link" :class="{'link-active': route.path.includes('/blogs')}" to="/blogs">Blogs</ULink>
							</li>
							<li>
								<ULink class="link" active-class="link-active" :exact-hash="true" to="/#plans">Pricing</ULink>
							</li>
							<li>
								<ULink class="link" active-class="link-active" :exact-hash="true" to="/#contacts">Contact</ULink>
							</li>
						</ul>
						<template #fallback>
							<!-- this will be rendered on server side -->
							<ul class="hidden lg:flex text-inherit gap-x-6 font-bold tracking-wide uppercase">
								<li @click="scrollToTop">
									<ULink class="link" to="/">HomePage</ULink>
								</li>
								<li>
									<ULink class="link" to="/about">About</ULink>
								</li>
								<li>
									<ULink class="link" to="/#features">Features</ULink>
								</li>
								<li>
									<ULink class="link" to="/#benefits">Benefits</ULink>
								</li>
								<li>
									<ULink class="link" to="/#faq">FAQ</ULink>
								</li>
								<li>
									<ULink class="link" to="/blogs">Blogs</ULink>
								</li>
								<li>
									<ULink class="link" to="/#pricing">Pricing</ULink>
								</li>
								<li>
									<ULink class="link" to="/#contacts">Contact</ULink>
								</li>
							</ul>
						</template>
					</ClientOnly>
					<UButton class="z-[101]" target="_blank" to="https://d38y74v4nq787u.cloudfront.net/service-login" size="md" label="Log in"
									 variant="outline"
									 :ui="{variant: {outline: 'dark:ring-white/[.8] dark:text-white dark:bg-transparent dark:hover:bg-transparent font-semibold lg:font-bold text-sm lg:text-base'}, padding: {md: 'lg:px-4 py-1.5 px-2.5'}, rounded: 'rounded-xl'}" />
				</nav>
			</div>
		</div>

		<!-- Mobile Menu Overlay -->
		<transition name="fade">
			<div v-if="isMenuOpen"
					 class="fixed top-0 left-0 w-full h-full dark:bg-main z-[100] flex flex-col items-center">
				<div class="flex translate-y-20 flex-col items-center space-y-5 text-white/[.8]">
					<ULink @click="isMenuOpen = false" to="/" class="text-lg font-semibold">Homepage</ULink>
					<ULink @click="isMenuOpen = false" to="/about" class="text-lg font-semibold">About</ULink>
					<ULink @click="isMenuOpen = false" to="/#features" class="text-lg font-semibold">Features</ULink>
					<ULink @click="isMenuOpen = false" to="/#benefits" class="text-lg font-semibold">Benefits</ULink>
					<ULink @click="isMenuOpen = false" to="/#faq" class="text-lg font-semibold">FAQ</ULink>
					<ULink @click="isMenuOpen = false" to="/blogs" class="text-lg font-semibold">Blogs</ULink>
					<ULink @click="isMenuOpen = false" to="/#plans" class="text-lg font-semibold">Pricing</ULink>
					<ULink @click="isMenuOpen = false" to="/#contacts" class="text-lg font-semibold">Contact</ULink>
				</div>
			</div>
		</transition>
	</header>
</template>

<script setup>
// menu mobile
const isMenuOpen = ref(false);

// route
const route = useRoute();

// scroll to top
const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth' // Enables smooth scrollin
	});
};

const updateHeaderStyles = () => {
	const header = document.querySelector('#header');


	if ((window.scrollY > window.innerHeight && !route.name.includes('blogs')) || (window.scrollY > window.innerHeight / 3 && route.name.includes('blogs'))) {
		header.classList.add('shadow-lg', 'sticky');
	} else {
		header.classList.remove('shadow-lg', 'sticky');
	}

	// if (route.name.includes('blogs')) {
	// 	header.classList.remove('absolute');
	// 	header.classList.add('bg-white', 'sticky', 'top-0', 'left-0', 'shadow-lg');
	// }
};

watch(() => route.path, () => {
	updateHeaderStyles();
});

watch(isMenuOpen, (newValue) => {
	if (newValue) {
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'auto';
	}
})


onMounted(() => {
	// Initial style update
	updateHeaderStyles();

	// Attach scroll listener
	window.addEventListener('scroll', updateHeaderStyles);
});

onUnmounted(() => {
	// Detach scroll listener
	window.removeEventListener('scroll', updateHeaderStyles);
});
</script>

<style scoped>
.hamburger {
	cursor: pointer;
}

.hamburger input {
	display: none;
}

.hamburger svg {
	/* The size of the SVG defines the overall size */
	height: 2em;
	/* Define the transition for transforming the SVG */
	transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger .line {
	fill: none;
	stroke: #fff;
	stroke-linecap: round;
	stroke-linejoin: round;
	stroke-width: 2;
	/* Define the transition for transforming the Stroke */
	transition: stroke-dasharray 300ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger .line-top-bottom {
	stroke-dasharray: 12 63;
}

.hamburger input:checked + svg {
	transform: rotate(-45deg);
}

.hamburger input:checked + svg .line-top-bottom {
	stroke-dasharray: 20 300;
	stroke-dashoffset: -32.42;
}
</style>
