<template>
	<section class="text-white my-auto relative">
		<div class="max-w-7xl mx-auto my-auto px-4">
			<!-- Header -->
			<div class="text-center md:text-left mb-8 md:mb-12 md:hidden">
				<h2 class="text-2xl md:text-3xl font-semibold mb-2">
					Bu qanday ishlaydi? <span class="text-gray-400 text-base">Oddiy 4 bosqichda eng yaxshi nomzod siz bilan ishlashga tayyor:</span>
				</h2>
			</div>

			<!-- ✅ MOBILE VERSION -->
			<div class="flex flex-col space-y-10 md:hidden relative">
				<div v-for="(step, index) in steps" :key="index" class="flex flex-col text-center space-y-4 relative">
					<div class="flex items-start space-x-4 z-10 relative">
						<div class="w-10 h-10 rounded-full bg-blue-500 text-white border-2 border-white flex items-center justify-center font-bold text-sm shrink-0">
							{{ index + 1 }}
						</div>
						<p class="text-gray-300 text-sm text-start border-">{{ step.title }}</p>
					</div>
					<div>
						<img :src="step.img" :alt="step.title" class="w-full rounded-lg shadow-md" />
					</div>
				</div>
			</div>

			<!-- ✅ DESKTOP VERSION (unchanged) -->
			<div class="hidden w-full h-full md:flex flex-row">
				<!-- Step List -->
				<div class="md:w-1/3 flex flex-col justify-center">
					<div class="text-center md:text-left mb-8 md:mb-12">
						<h2 class="text-2xl md:text-3xl font-semibold mb-2">
							Bu qanday ishlaydi? <span class="text-gray-400 text-base">Oddiy 4 bosqichda eng yaxshi nomzod siz bilan ishlashga tayyor:</span>
						</h2>
					</div>
					<div class="space-y-6">
						<div
							v-for="(step, index) in steps"
							:key="index"
							ref="stepRefs"
							class="flex items-center"
							:class="activeStep === index ? 'active-step' : ''"
							@click="setActiveStep(index)"
						>
							<div
								class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 shrink-0"
								:class="activeStep === index ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'"
							>
								{{ index + 1 }}
							</div>
							<p :class="activeStep === index ? 'text-white font-medium' : 'text-gray-400'" class="text-sm md:text-base leading-tight ml-3">
								{{ step.title }}
							</p>
						</div>
					</div>
				</div>

				<div class="hidden md:flex justify-center items-center px-8 relative h-[100vh]">
					<div class="w-2 h-full relative overflow-hidden rounded-full bg-gradient-to-b from-gray-400 via-gray-600 to-transparent">
						<div class="absolute top-0 left-0 w-full transition-all duration-700 overflow-visible" :style="{ height: progressHeight }">
							<div class="relative w-full h-full">
								<div class="w-full h-full bg-gradient-to-b from-blue-300/30 via-blue-500/80 to-blue-700"></div>
								<div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-blue-700 rounded-full shadow-lg"></div>
							</div>
						</div>
					</div>
				</div>

				<!-- Image Preview -->
				<div class="md:w-2/3 flex items-center justify-center mt-8 md:mt-0">
					<transition name="fade" mode="out-in">
						<div :key="activeStep" class="w-full rounded-xl p-4 flex items-center justify-center shadow-lg">
							<img :src="steps[activeStep].img" :alt="steps[activeStep].title" class="w-full object-contain rounded-lg" />
						</div>
					</transition>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import works1 from '@/assets/images/works1.png';
import works2 from '@/assets/images/works2.png';
import works3 from '@/assets/images/works3.png';
import works4 from '@/assets/images/works4.png';

// These would be your actual image imports

const steps = [
	{
		title: 'Ishga olish talablaringizni kiriting',
		img: works1
	},
	{
		title: 'AI talablaringizni organib chiqib suhbat uchun link taqdim qiladi.',
		img: works2
	},
	{
		title: 'Link orqali otgan nomzodlar bilan AI suhbat otkazadi va baholaydi.',
		img: works3
	},
	{
		title: 'Suhbatdan eng yaxshi 10-15% nomzodlarni sizga taqdim etadi.',
		img: works4
	}
];

const activeStep = ref(0);
const stepRefs = ref([]);
const progressHeight = ref('0%');

// For demo purposes, automatically cycle through steps
let interval;

onMounted(async () => {
	await nextTick();

	// For demo purposes - auto-cycle through steps
	interval = setInterval(() => {
		activeStep.value = (activeStep.value + 1) % steps.length;
		progressHeight.value = `${((activeStep.value + 1) / steps.length) * 100}%`;
	}, 3000);

	// In a real implementation, you would use an intersection observer like:
	/*
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepRefs.value.findIndex((el) => el === entry.target);
          if (index !== -1) {
            activeStep.value = index;
            progressHeight.value = `${((index + 1) / steps.length) * 100}%`;
          }
        }
      });
    },
    {
      threshold: 0.75,
      rootMargin: '0px 0px -30% 0px'
    }
  );
  
  stepRefs.value.forEach((el) => observer.observe(el));
  */
});

onUnmounted(() => {
	clearInterval(interval);
	// If using observer: observer.disconnect()
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.active-step {
	color: white;
}
</style>
