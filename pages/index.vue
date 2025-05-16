<template>
	<main class="space-y-10 lg:space-y-[160px] mb-[160px]">
		<section class="w-full overflow-x-hidden lg:mt-0 mt-6">
			<div class="h-auto md:h-[600px] xl:h-[800px] container relative">
				<div
					class="hero card relative h-full w-full flex md:items-center before:absolute before:left-0 before:right-0 before:h-full before:w-full before:z-[3] before:bg-black-1/[.9] bg-clip-padding">
					<img src="~/assets/images/hero.jpeg" class="absolute left-1/2 top-1/2 -translate-x-1/2 object-cover -translate-y-1/2 sm:-translate-y-2/3 md:-translate-y-[70%] w-full h-auto scale-x-[-1]" alt="hero image"/>
					<div class="relative px-3 md:px-16 py-4">
						<div class="relative z-[5] space-y-4">
							<h1 class="font-bold title md:max-w-[70%] lg:max-w-[50%] 2xl:max-w-[45%]">
								Enhance Fleet Efficiency and Ensure Compliance with <span class="text-purple">Unione ELD</span>
							</h1>
							<p
								class="font-sfPro font-medium text-sm lg:text-lg xl:text-xl md:max-w-[70%] lg:max-w-[40%] mb-3 lg:mb-6">
								A simple and cost-effective solution for monitoring, ensuring FMCSA compliance, and saving time and
								money.
							</p>
							<UButton target="_blank" to="https://d38y74v4nq787u.cloudfront.net/service-login" size="lg"
											 label="Log in" variant="outline"
											 :ui="{variant: {outline: 'dark:ring-white/[.8] dark:text-white font-bold text-xs lg:text-base dark:bg-white/[.05] dark:hover:bg-white/[.1] uppercase'}, padding: {lg: 'xl:px-9 xl:py-3 lg:px-5 py-2 px-3'}, rounded: 'rounded-xl'}" />
						</div>
						<div class="md:hidden mt-3 h-[200px] z-[5] relative">
							<img
								class="absolute left-2/3 bottom-0 w-20 pointer-events-none select-none"
								src="~/assets/images/phone.png" alt="truck image" />
							<img
								class="w-full h-full object-contain pointer-events-none select-none"
								src="~/assets/images/computer.png" alt="truck image" />
						</div>
					</div>
				</div>
				<img
					class="absolute hidden md:inline right-auto md:right-10 xl:right-14 2xl:right-20 z-[11] md:top-3/4 lg:top-1/2 -translate-y-24 w-[80px] lg:w-[110px] xl:w-[150px] 2xl:w-[160px] pointer-events-none select-none"
					src="~/assets/images/phone.png" alt="truck image" />
				<img
					class="absolute z-10 hidden md:inline right-auto md:right-12 xl:right-16 2xl:right-24 md:top-3/4 lg:top-1/2 -translate-y-1/2 w-[40%] lg:w-[400px] xl:w-[600px] 2xl:w-[750px] pointer-events-none select-none"
					src="~/assets/images/computer.png" alt="truck image" />
			</div>

			<!-- Mobile image handling -->
			<!-- <div class="block lg:hidden relative w-full h-full overflow-visible">
				<img class="absolute bottom-0 right-0 w-1/2 max-w-[250px] pointer-events-none select-none" src="~/assets/images/phone.png" alt="phone image" />
			</div> -->

		</section>

		<article>
			<div
				class="container relative grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-[40px] xl:gap-x-[100px] items-center">
				<div class="h-[340px] md:h-[500px] xl:h-[800px] card relative">
					<img class="absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[200px] md:w-[300px] xl:w-[470px]"
							 src="~/assets/images/phone.png"
							 alt="phone image">
				</div>
				<div class="space-y-3 lg:space-y-10 lg:max-w-[80%]">
					<h2 class="title">What problems are you facing?
					</h2>
					<div class="space-y-1 md:space-y-2">
						<p class="subtitle tracking-wide md:tracking-normal">An easy and affordable solution for monitoring, FMCSA
							compliance, and saving time and
							money</p>
						<UDivider />
						<p class="ph tracking-wide md:tracking-normal">Unione ELD ensures drivers automatically comply with FMCSA
							regulations, including Hours of
							Service (HOS) rules and ELD mandates delivers cutting-edge fleet management tools, ensuring compliance,
							improving safety, and optimizing operations for businesses of all sizes.</p>
					</div>
				</div>
			</div>
		</article>

		<article>
			<div
				class="container relative grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-[100px] items-center">
				<div class="space-y-3 lg:space-y-10">
					<h2 class="title">All<span class="font-sfPro">-</span>in<span class="font-sfPro">-</span>One Fleet Management Solution
					</h2>
					<div class="space-y-1 md:space-y-2">
						<p class="subtitle tracking-wide md:tracking-normal">Fines for Non-Compliance with FMCSA Requirements</p>
						<UDivider />
						<p class="ph tracking-wide md:tracking-normal">Unione ELD ensures drivers automatically comply with FMCSA
							regulations, including Hours of
							Service (HOS) rules and ELD mandates delivers cutting-edge fleet management tools, ensuring compliance,
							improving safety, and optimizing operations for businesses of all sizes.</p>
					</div>
					<UButton to="/#contacts" size="lg"
									 label="Try Now" variant="outline"
									 :ui="{variant: {outline: 'dark:ring-white/[.8] dark:text-white font-semibold lg:font-bold text-xs md:text-sm lg:text-base dark:bg-white/[.05] dark:hover:bg-white/[.1] uppercase'}, padding: {lg: 'lg:px-9 lg:py-3 md:px-4 px-3 py-2'}, rounded: 'rounded-xl'}" />
				</div>
				<div class="row-start-1 md:col-start-2 h-[342px] md:h-[400px] xl:h-[800px] card relative">
					<img class="absolute right-0 h-[250px] xl:h-[540px] top-1/2 -translate-y-1/2"
							 src="~/assets/images/computer-2.png"
							 alt="phone image">
				</div>
			</div>
		</article>

		<section>
			<div class="container">
				<div class="card relative p-4 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-5">
					<div
						class="rounded-xl lg:rounded-[32px] opacity-50 overflow-hidden h-[260px] md:h-[460px] lg:h-[670px] group">
						<img src="~/assets/images/truck-behind.jpeg"
								 class="h-full w-full object-cover group-hover:scale-105 duration-500 ease-in-out" alt="">
					</div>
					<div class="flex flex-col justify-center gap-y-6">
						<h2 class="title lg:max-w-[70%]">What problems are you facing?</h2>
						<ul class="space-y-6 lg:space-y-10">
							<li class="space-y-1 md:space-y-2" v-for="(problem, ind) in problems" :key="ind">
								<h3 class="subtitle tracking-wide md:tracking-normal">{{ problem.title }}</h3>
								<UDivider />
								<p class="ph tracking-wide md:tracking-normal">{{ problem.context }}</p>
							</li>
						</ul>
					</div>
					<h4
						class="hidden lg:inline absolute right-48 -top-16 font-extrabold text-[240px] opacity-[0.02] pointer-events-none">
						?</h4>
					<h4
						class="hidden lg:absolute bottom-0 right-12 font-extrabold text-[240px] opacity-[0.02] pointer-events-none">
						?</h4>
					<h4
						class="hidden lg:absolute left-[calc(50%+60px)] bottom-0 font-extrabold text-[240px] opacity-[0.02] pointer-events-none">
						?</h4>
				</div>
			</div>
		</section>

		<section>
			<div class="hidden lg:grid container grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-6">
				<div class="card p-4 xl:p-6 flex flex-col gap-y-8 min-h-[400px] xl:min-h-[700px]">
					<div class="h-[200px] xl:h-[380px] rounded-3xl overflow-hidden group border dark:border-white/[.1]">
						<img src="~/assets/images/detect-car.png"
								 class="w-full h-full filter saturate-0 group-hover:saturate-100 object-cover group-hover:scale-105 duration-500" alt="camera detecting cars">
					</div>
					<div class="space-y-3">
						<h4 class="subtitle">AI dash cams</h4>
						<UDivider />
						<p class="ph text-xl">
							AI dash cams that are simple, accurate, and quick to react—keeping your fleet safe.
						</p>
					</div>
				</div>
				<div class="card p-4 xl:p-6 flex flex-col gap-y-8 min-h-[400px] xl:min-h-[700px]">
					<div class="h-[200px] xl:h-[380px] rounded-3xl overflow-hidden group border dark:border-white/[.1]">
						<img src="~/assets/images/map.png"
								 class="w-full h-full filter saturate-0 group-hover:saturate-100 object-cover group-hover:scale-105 duration-500" alt="camera detecting cars">
					</div>
					<div class="space-y-3">
						<h4 class="subtitle">Playback History</h4>
						<UDivider />
						<p class="ph text-xl">
							Revisit every key moment with clear, simple playback. Quickly and easily watch your past events.
						</p>
					</div>
				</div>
				<div class="card p-4 xl:p-6 flex flex-col gap-y-8 min-h-[400px] xl:min-h-[700px]">
					<div class="h-[200px] xl:h-[380px] relative rounded-3xl overflow-hidden group border dark:border-white/[.1]">
						<img src="~/assets/images/tracking.png"
								 class="w-full scale-150 absolute bottom-[60px] left-20 filter saturate-0 group-hover:saturate-100 group-hover:scale-[155%] duration-500" alt="camera detecting cars">
					</div>
					<div class="space-y-3">
						<h4 class="subtitle">Smart Dashboard</h4>
						<UDivider />
						<p class="ph text-xl">
							Our dashboard provides full vehicle and driver data, letting you easily plan for fuel stops, scaling,
							weigh stations, and weather.
						</p>
					</div>
				</div>
			</div>
			<div class="lg:hidden container">
				<ClientOnly>
					<Swiper class="overflow-hidden" :modules="[SwiperAutoplay, SwiperNavigation]"
									:slides-per-view="1.5" :space-between="16" :loop="true" :speed="1000"
									:autoplay="{
									delay: 2000
								}">
						<SwiperSlide>
							<div class="card p-2.5 flex flex-col gap-y-4 min-h-[300px] h-full">
								<div class="h-[150px] sm:h-[200px] md:h-[300px] rounded-lg overflow-hidden group border dark:border-white/[.1]">
									<img src="~/assets/images/detect-car.png"
											 class="w-full h-full filter saturate-0 group-hover:saturate-100 object-cover group-hover:scale-105 duration-500"
											 alt="camera detecting cars">
								</div>
								<div class="space-y-1">
									<h4 class="subtitle">AI dash cams</h4>
									<UDivider />
									<p class="ph text-xs">
										AI dash cams that are simple, accurate, and quick to react—keeping your fleet safe.
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div class="card p-2.5 flex flex-col gap-y-4 min-h-[300px] h-full">
								<div class="h-[150px] sm:h-[200px] md:h-[300px] rounded-lg overflow-hidden group border dark:border-white/[.1]">
									<img src="~/assets/images/map.png"
											 class="w-full h-full filter saturate-0 group-hover:saturate-100 object-cover group-hover:scale-105 duration-500"
											 alt="camera detecting cars">
								</div>
								<div class="space-y-1">
									<h4 class="subtitle">Playback History</h4>
									<UDivider />
									<p class="ph text-xs">
										Revisit every key moment with clear, simple playback. Quickly and easily watch your past events.
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div class="card p-2.5 flex flex-col gap-y-4 min-h-[300px] h-full">
								<div class="h-[150px] sm:h-[200px] md:h-[300px] relative rounded-lg overflow-hidden group border dark:border-white/[.1]">
									<img src="~/assets/images/tracking.png"
											 class="w-full h-full absolute bottom-0 left-2 filter saturate-0 group-hover:saturate-100 object-cover group-hover:scale-105 duration-500"
											 alt="camera detecting cars">
								</div>
								<div class="space-y-1">
									<h4 class="subtitle">Smart Dashboard</h4>
									<UDivider />
									<p class="ph text-xs">
										Our dashboard provides full vehicle and driver data, letting you easily plan for fuel stops,
										scaling,
										weigh stations, and weather.
									</p>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</ClientOnly>
			</div>
		</section>

		<section id="benefits">
			<div class="container">
				<div class="card py-4 px-3 lg:py-11 lg:px-16 md:min-h-[700px] xl:min-h-[800px] relative">
					<h2 class="title">All<span class="font-sfPro">-</span>in<span class="font-sfPro">-</span>One Fleet Management Solution</h2>
					<div
						class="md:hidden relative h-[200px] mt-4 after:absolute after:bottom-0 after:left-0 after:w-full after:h-24 after:bg-gradient-to-t after:from-black-1 after:to-transparent">
						<img
							class="w-full h-full pointer-events-none select-none"
							src="~/assets/images/overview.png" alt="logs overview">
					</div>
					<div class="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-8">
						<div v-for="(solution, ind) in solutions" :key="ind"
								 class="rounded-xl md:rounded-[20px] bg-main px-3 md:px-4 py-2.5">
							<h4 class="subtitle tracking-wide md:tracking-normal">{{ solution.title }}</h4>
							<p class="ph text-xs md:text-base tracking-wide md:tracking-normal">{{ solution.context }}</p>
						</div>
					</div>
					<div
						class="hidden md:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-24 after:bg-gradient-to-t after:from-black-1 after:to-transparent">
						<img
							class="absolute w-[calc(100%-128px)] pointer-events-none select-none bottom-0 left-1/2 -translate-x-1/2"
							src="~/assets/images/overview.png" alt="logs overview">
					</div>
				</div>
			</div>
		</section>

		<section id="features">
			<div class="container">
				<div class="flex justify-between items-center gap-10">
					<div class="hidden lg:block w-1/3 pl-20">
						<h2 class="title">Features</h2>
						<ul class="mt-10 space-y-4 list-disc">
							<li v-for="(feature, ind) in featuresList" :key="ind" class="subtitle ml-6 leading-6">{{ feature }}</li>
						</ul>
					</div>
					<div class="w-full lg:w-2/3 card py-4 px-3 lg:p-20 mx-auto">
						<h2 class="lg:hidden title mb-4">Features</h2>
						<div class="rounded-xl lg:rounded-3xl mix-blend-luminosity overflow-hidden md:h-[400px] lg:h-[500px] xl:h-[600px]">
							<img class="w-full h-full object-cover" src="~/assets/images/truck-behind.jpeg" alt="features picture">
						</div>
						<div class="lg:hidden w-full">
							<ul class="mt-4 space-y-1 lg:space-y-4 list-disc">
								<li v-for="(feature, ind) in featuresList" :key="ind" class="subtitle tracking-wide ml-6 leading-6">
									{{ feature }}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="plans">
			<div class="container">
				<div class="card px-3 py-4 lg:py-11 lg:px-16">
					<h2 class="title">Plans</h2>
					<p class="subtitle mt-2">Money-back guarantee within 15 days if it doesn't work for you</p>
					<div class="hidden lg:grid mt-10 grid-cols-3 gap-x-12">
						<ULink :to="'#contacts'" v-for="(service, ind) in services" :key="ind"
									 class="rounded-3xl bg-main py-6 px-8">
							<div class="flex items-center justify-between gap-x-4">
								<h3 class="subtitle text-3xl">{{ service.label }}</h3>
								<ArrowRightIcon class="w-8" />
							</div>
							<ul class="mt-6 space-y-6 text-start">
								<li v-for="(item, ind) in service.list" :key="ind" class="text-xl font-medium text-white/[.6] font-sfPro">{{ item }}</li>
							</ul>
						</ULink>
					</div>
					<div class="lg:hidden mt-10">
						<ClientOnly>
							<Swiper class="overflow-hidden" :modules="[SwiperAutoplay, SwiperNavigation]"
											:slides-per-view="1.5" :space-between="12" :loop="true" :speed="1000"
											:autoplay="{
									delay: 2000
								}">
								<SwiperSlide v-for="(service, ind) in services" :key="ind">
									<ULink :to="'#contacts'"
												 class="rounded-xl block h-full bg-main py-2.5 px-3">
										<div class="flex items-center justify-between gap-x-4">
											<h3 class="subtitle">{{ service.label }}</h3>
											<ArrowRightIcon class="w-4" />
										</div>
										<ul class="mt-2 text-start space-y-2">
											<li v-for="(item, ind) in service.list" :key="ind" class="text-xs font-medium text-white/[.6] font-sfPro">{{ item }}</li>
										</ul>
									</ULink>
								</SwiperSlide>
							</Swiper>
						</ClientOnly>
					</div>
				</div>
			</div>
		</section>

		<section id="faq">
			<div class="container">
				<div class="card lg:px-16 px-3 lg:py-11 py-4">
					<h2 class="title">Frequantly Asked Questions</h2>
					<UAccordion :items="faqs" :ui="{
					item: {
						base: 'w-full dark:bg-main dark:hover:bg-main text-start text-xs lg:!text-lg dark:text-white/[.6] font-sfPro tracking-wide font-semibold p-4 lg:px-6 lg:py-4 rounded-b-xl lg:rounded-b-2xl rounded-t-none shrink-0'
					},
					wrapper: 'gap-y-2.5 lg:gap-y-4 mt-6'
				}">
						<template #default="{ item, index, open }">
							<UButton color="gray" variant="ghost"
											 class="w-full duration-500 dark:bg-main dark:hover:bg-main dark:text-white text-start font-sfPro font-medium text-sm lg:text-2xl"
											 :ui="{ rounded: open ? 'rounded-t-xl lg:rounded-t-2xl rounded-b-none' : 'rounded-xl lg:rounded-2xl', padding: { sm: 'lg:px-6 lg:py-4 p-3' } }">
								<span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

								<template #trailing>
									<UIcon
										name="i-heroicons-chevron-right-20-solid"
										class="w-5 h-5 ms-auto transform transition-transform duration-200"
										:class="[open && 'rotate-90']"
									/>
								</template>
							</UButton>
						</template>
					</UAccordion>
				</div>
			</div>
		</section>

		<section id="contacts">
			<div class="container">
				<div class="relative card h-[850px] sm:h-[950px] md:h-[1100px] lg:h-[800px] px-3 py-4 lg:px-16 lg:py-11">
					<h2 class="title">Start saving time and money today</h2>
					<div class="grid grid-cols-12 gap-y-8">
						<!-- Image Section -->
						<div class="row-start-2 lg:row-start-1 col-span-12 lg:col-span-5 xl:col-span-7">
							<img class="absolute left-0 bottom-0 w-[70%] md:w-[60%] lg:w-[48%] pointer-events-none select-none"
									 src="~/assets/images/phone-contact.png" alt="contact phone logo" />
						</div>

						<!-- Form Section -->
						<div class="rounded-[32px] col-span-12 lg:col-span-7 xl:col-span-5 md:py-8 md:px-4 lg:py-12 lg:px-16 font-sfPro">
							<UForm class="mt-4 xl:max-w-[80%]" :validate="validateForm" :state="submitForm" @submit.prevent="sendEmail">
								<div class="w-full space-y-3">
									<UFormGroup label="First Name" name="first_name">
										<UInput variant="outline" v-model="submitForm.first_name" size="lg" placeholder="Name"
														:ui="formInputStyle" />
									</UFormGroup>
									<UFormGroup label="Email" name="email">
										<UInput type="email" variant="outline" v-model="submitForm.email" size="lg"
														placeholder="Your email" :ui="formInputStyle" />
									</UFormGroup>
									<UFormGroup label="Phone Number" name="phone_number">
										<UInput variant="outline" v-model="submitForm.phone_number" size="lg"
														placeholder="Your phone number" :ui="formInputStyle" />
									</UFormGroup>
									<UFormGroup label="Message" name="message" :ui="{ error: 'top-[95%]' }">
										<UTextarea :rows="4" v-model="submitForm.message" size="lg" variant="outline"
															 placeholder="Comments..." :ui="formInputStyle" />
									</UFormGroup>
								</div>
								<div class="dark:bg-white/[.05] rounded-2xl p-3 my-6 lg:my-6">
									<p class="dark:text-white/[.8] tracking-wide font-medium text-xs md:text-sm lg:text-base">By clicking "Submit". I acknowledge receipt of the  Unione ELD <ULink class="dark:text-purple-0 link" to="/privacy-policy">Privacy Policy</ULink> and <ULink class="dark:text-purple-0 link" to="/terms-and-conditions">Terms & Conditions</ULink></p>
								</div>
								<div class="flex justify-between gap-x-4 items-center">
									<p class="uppercase text-xl font-medium text-white/[.8]">Submit</p>
									<UButton :disabled="isDisabled" type="submit"
													 class="p-3 dark:bg-blue dark:ring-white/[.1] bg-clip-padding dark:hover:bg-blue/[.8]"
													 size="lg" variant="solid">
										<template #trailing>
											<transition name="fade" mode="out-in">
											<span v-if="!loading" key="arrow">
												<ArrowRightIcon class="w-6 dark:text-white" />
											</span>
												<span v-else class="h-6 w-6" key="spinner">
												<UIcon name="i-heroicons-arrow-path-20-solid" class="w-6 h-6 dark:text-white animate-spin" />
											</span>
											</transition>
										</template>
									</UButton>
								</div>
							</UForm>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup>
// importing icons
import ArrowRightIcon from '~/assets/icons/arrow-right.svg';

import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_f9qated';
const TEMPLATE_ID = 'template_2yaopui';
const PUBLIC_KEY = '51dnlxXPrjyA1LFr0';

// services
const services = [
	{
		label: 'Basic',
		list: ['Electronic Logbook', 'Electronic DVIR', 'Fleet Manager Portal', 'GPS Fleet Tracking', 'IFTA reporting']
	},
	{
		label: 'Advanced',
		list: ['Electronic Logbook', 'Electronic DVIR', 'GPS Fleet Tracking', 'Fleet Manager Portal', 'IFTA reporting', '24/7 support', 'Monitoring logbook']
	},
	{
		label: 'Premium',
		list: [
			'Electronic logbook',
			'Electronic DVIR',
			'GPS Fleet Tracking',
			'Fleet Manager Portal',
			'IFTA reporting',
			'24/7 support',
			'Monitoring logbook',
			'Dispatch can monitoring',
			'Macro Point'
		]
	}
];

// problems facing
const problems = [
	{
		title: 'Fines for Non-Compliance with FMCSA Requirements?',
		context: 'Unione ELD ensures drivers automatically comply with FMCSA regulations, including Hours of Service (HOS) rules and ELD mandates.'
	},
	{
		title: 'Time Wasted Due to Manual Logs and Errors ?',
		context: 'The system minimizes human errors by calculating HOS compliance and identifying discrepancies in real-time'
	},
	{
		title: 'Difficulties Monitoring Drivers and Routes ?',
		context: 'Unione ELD provides precise location updates, enabling fleet managers to monitor driver locations and routes instantly'
	}
];

// managment solutions
const solutions = [
	{
		title: 'Affordable Pricing',
		context: 'Earn More and Achieve Your Goals with Us'
	},
	{
		title: '24/7 Customer Support',
		context: 'Understand Your Logbook Better and Drive More'
	},
	{
		title: 'Compliance Certifications',
		context: 'Stay Compliant with Laws Stress-Free'
	},
	{
		title: 'Accurate & error-free HOS logs',
		context: 'Manage Your Fleet in 2 Clicks'
	}
];

// faqs
const faqs = [
	{
		label: 'Is your ELD FMCSA certified?',
		content: 'In compliance with the FMCSA’s ELD Mandate, our ELD Compliance Solution was registered and certified by the FMCSA.'
	},
	{
		label: 'Do I have to print my logs during an inspection?',
		content:
			'With our ELD, you’re not required to present physical logs. Our ELD is able to transfer data electronically, but screen displays can also be presented if need be. However, an enforcement officer may request that additional information be provided by email, fax, or other similar means within 48 hours of the roadside inspection.'
	},
	{
		label: 'Will your ELD help prevent HOS violations?',
		content:
			'UNIONE ELD is designed to notify drivers, safety officials of potential violations beforehand. Notifications will be received by the aforementioned parties 1 hour, 30 minutes, 15 minutes, and 5 minutes prior to the violation.'
	},
	{
		label: 'Will the application work on my cell phone?',
		content: 'While ELD devices will connect and work with cellular phones, we highly recommend running our application on a tablet for optimal performance.'
	},
	{
		label: 'How ELD Device installed in the truck?',
		content:
			'UNIONE ELD can be installed effortlessly. Once you plug the ELD device into the diagnostics port of your vehicle, On the app you need to input the ELD Device MAC Address and, your device should be paired'
	},
	{
		label: 'How can drivers create driver vehicle inspection reports (DVIRs)?',
		content:
			'Drivers can use the Unione ELD Electronic Logbook App to create DVIRs. The DVIRs created in the app can be accessed by fleet managers by viewing the Unione ELD Portal (Dashboard).'
	},
	{
		label: 'How is driving time recorded?',
		content:
			'A driver’s driving time will be automatically recorded as long as the driver connects their mobile device to the ELD via Bluetooth and the vehicle is registered in the Unione ELD App. A vehicle is considered to be in motion if it is traveling over 5 mph.'
	}
];

//features list
const featuresList = [
	'Dispatch can monitoring',
	'HOS Logs',
	'GPS Tracking',
	'Vehicle Inspections',
	'Trip & Route Playback',
	'IFTA Calculations',
	'Driver App on Android & IOS',
	'Fleet Manager Portal',
	'GPS Fleet Tracking',
	'Driver alarm'
];

// submit form
const loading = ref(false);
const submitForm = reactive({
	first_name: '',
	email: '',
	phone_number: '',
	message: ''
});

const errorBlank = 'Cannot be blank';

const validateForm = () => {
	const errors = [];

	if (!submitForm.first_name) errors.push({ path: 'first_name', message: errorBlank });
	if (!submitForm.email) errors.push({ path: 'email', message: errorBlank });
	if (!submitForm.phone_number) errors.push({ path: 'phone_number', message: errorBlank });
	// if (!submitForm.message) errors.push({ path: 'message', message: errorBlank });

	return errors;
};

const isDisabled = computed(() => {
	return loading.value || validateForm().length > 0;
});

emailjs.init(PUBLIC_KEY);

const toast = useToast();


const BOT_TOKEN = '7797355465:AAE6tbi5AWugbWUEy1_cohad0S9gcdsWIwU'; // Telegram bot tokenini kiriting
const CHAT_ID = ' -1002286859462'; // Telegram chat ID

async function sendEmail() {
	loading.value = true;
	try {
		// Send email and message to EmailJS
		const emailResult = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
				from_name: submitForm.first_name,
				reply_to: submitForm.email,
				message: `Name: ${submitForm.first_name}\nEmail: ${submitForm.email}\nPhone Number: ${submitForm.phone_number}\nMessage: ${submitForm.message}`
			},
			PUBLIC_KEY
		);

		// Send message to Telegram
		const telegramMessage = `*Company:* Unione Eld\n*First name:* ${submitForm.first_name}\n*Email:* ${submitForm.email}\n*Phone Number:* ${submitForm.phone_number}\n*Message:* \n${submitForm.message}`;
		const telegramResult = await $fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
			method: 'POST',
			body: JSON.stringify({
				chat_id: CHAT_ID.trim(),
				text: telegramMessage,
				parse_mode: 'Markdown'
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		console.log('Telegram Response:', telegramResult);

		// Telegram botga xabar yuborish
		if (emailResult.status === 200 && telegramResult.ok) {
			toast.add({
				id: 'success',
				color: 'green',
				title: 'Successfully submitted!',
				description: 'Your request has been successfully submitted',
				icon: 'i-heroicons-check-circle',
				timeout: 3000
			});

			// Reset form fields
			submitForm.first_name = '';
			submitForm.email = '';
			submitForm.phone_number = '';
			submitForm.message = '';
		} else {
			throw new Error('Failed to send message');
		}
	} catch (error) {
		console.error('Error:', error);
		alert('Failed to send message. Please try again later.');
	} finally {
		loading.value = false;
	}
}

// style input
const formInputStyle = {
	wrapper: 'w-full',
	rounded: 'rounded-xl',
	padding: {
		lg: 'px-4 py-3'
	},
	placeholder: 'placeholder-main/[.7]',
	color: {
		white: {
			outline: 'shadow-none dark:bg-main ring-1 ring-inset dark:ring-white/[.1] focus:ring-2 focus:ring-primary-800'
		}
	}
};
</script>

<style>
.swiper-slide {
	height: auto;
}

.swiper-pagination-bullet {
	background-color: #fff;
	opacity: 20%;
	width: 16px;
	height: 16px;
	border-radius: 100px;
	transition: width 0.5s;
}

.swiper-pagination-bullet-active {
	background-color: #fff;
	opacity: 20%;
	width: 72px;
}

@media (max-width: 1024px) {
	.swiper-pagination-bullet {
		width: 10px;
		height: 10px;
	}

	.swiper-pagination-bullet-active {
		background-color: #fff;
		width: 40px;
	}
}

@keyframes fadeInUp {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-fadeInUp {
	animation: fadeInUp 0.7s ease-in-out forwards;
}
</style>
