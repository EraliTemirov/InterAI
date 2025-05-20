<!-- index.vue -->
<template>
	<div>
		<div class="bg-hero-pattern bg-cover bg-center min-h-screen relative">
			<!-- Gradient Overlay -->
			<div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none z-0"></div>

			<!-- Content -->
			<div class="relative z-10">
				<HeaderComponent @scroll-to="scrollToSection" class="pt-2" />
				<HeroSection />
				<HeroImg />
				<div ref="partners"><PartnersSection /></div>
			</div>
		</div>

		<div ref="features" class="bg-hero-pattern-2 bg-cover bg-center min-h-screen"><FeaturesSection /></div>
		<div ref="ai"><Ai /></div>
		<div ref="steps" class="bg-hero-pattern-3 bg-cover bg-center min-h-screen flex flex-col justify-center p-2"><StepShowcase /></div>
		<div ref="animation"><Animation /></div>
		<TestimonialSection />
    <div class="bg-hero-pattern-3 bg-cover bg-center">

      <Footer />
    </div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import HeaderComponent from '~/components/HeaderComponent.vue';
import HeroSection from '~/components/HeroSection.vue';
import HeroImg from '~/components/HeroImg.vue';
import Footer from '~/components/Footer.vue';
import StepShowcase from '~/components/StepShowcase.vue';
import PartnersSection from '~/components/PartnersSection.vue';
import FeaturesSection from '~/components/FeaturesSection.vue';
import Ai from '~/components/AI.vue';
import Animation from '~/components/Animation.vue';
import TestimonialSection from '~/components/TestimonialSection.vue';

const partners = ref(null);
const features = ref(null);
const ai = ref(null);
const steps = ref(null);
const animation = ref(null);

function scrollToSection(section) {
	const sectionRefs = {
		partners,
		features,
		ai,
		steps,
		animation
	};

	const el = sectionRefs[section]?.value;
	if (el) {
		el.scrollIntoView({ behavior: 'smooth' });
	}
}
</script>
