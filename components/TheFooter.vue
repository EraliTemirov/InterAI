<template>
	<footer class="mt-10 lg:mt-[160px] mb-6 lg:mb-[100px]">
		<!-- Contact Section -->
		<div class="container">
			<div class="card p-4 lg:py-12 lg:px-16">
				<div class="flex flex-col sm:flex-row gap-y-4 sm:justify-between items-center">
					<ULink to="/" class="text-2xl lg:text-3xl font-bold uppercase">UniOne <span class="text-purple">ELD</span></ULink>
					<div class="flex gap-x-4">
						<ULink to="https://linkedin.com"
									 class="border dark:border-white/[.1] w-9 h-9 flex items-center justify-center rounded-full dark:bg-transparent">
							<LinkedInIcon class="w-3" />
						</ULink>
						<ULink to="https://linkedin.com"
									 class="border dark:border-white/[.1] w-9 h-9 flex items-center justify-center rounded-full dark:bg-transparent">
							<FacebookIcon class="w-2" />
						</ULink>
						<ULink to="https://linkedin.com"
									 class="border dark:border-white/[.1] w-9 h-9 flex items-center justify-center rounded-full dark:bg-transparent">
							<TwitterIcon class="w-3" />
						</ULink>
					</div>
				</div>
				<div class="grid sm:grid-cols-2 lg:grid-cols-4 sm:justify-items-start justify-items-center gap-y-8 gap-x-12 mt-10">
					<div class="space-y-6 text-center sm:text-left">
						<h3 class="uppercase text-purple text-2xl font-semibold">Get in touch</h3>
						<ul class="space-y-4">
							<li>
								<ULink class="link font-sfPro" to="tel:(645)2157171">(645) 215 71 71</ULink>
							</li>
							<li>
								<ULink class="link font-sfPro" to="mailto:support@unioneeld.com">support@unioneeld.com</ULink>
							</li>
							<li class="mx-auto sm:mx-0 max-w-[70%] font-sfPro">260 Northland Boulevard, Suite
								305A, Springdale, OH  45246.
							</li>
						</ul>
					</div>
					<div class="space-y-6 text-center sm:text-left">
						<h3 class="uppercase text-purple text-2xl font-semibold">Hours</h3>
						<ul class="space-y-4">
							<li class="max-w-[70%] mx-auto sm:mx-0">Monday<span class="font-sfPro">-</span>Sunday: 00:00 am
								to 23:59 pm
							</li>
						</ul>
					</div>
					<div class="space-y-6 text-center sm:text-left">
						<h3 class="uppercase text-purple text-2xl font-semibold">SERVICES</h3>
						<ul class="space-y-4">
							<li>
								<ULink class="link" to="/#features">Features</ULink>
							</li>
							<li>
								<ULink class="link" to="/#benefits">Benefits</ULink>
							</li>
						</ul>
					</div>
					<div class="space-y-6 text-center sm:text-left">
						<h3 class="uppercase text-purple text-2xl font-semibold">QUICK LINKS</h3>
						<ul class="space-y-4">
							<li>
								<ULink class="link" to="/">Homepage</ULink>
							</li>
							<li>
								<ULink class="link" to="/about">About</ULink>
							</li>
							<li>
								<ULink class="link" to="/#faq">FAQ</ULink>
							</li>
							<li>
								<ULink class="link" to="/blogs">Blogs</ULink>
							</li>
							<li>
								<ULink class="link" to="/#plans">Plans</ULink>
							</li>
						</ul>
					</div>
				</div>
				<UDivider class="mt-6 sm:mt-16 mb-4 sm:mb-8" />
				<div class="flex flex-col sm:flex-row items-center sm:justify-between gap-x-6 gap-y-4">
					<p class="ph text-center sm:text-start">Unione ELD provides an application for drivers, offering logbook services for logistics
						companies across the USA.</p>
					<div class="flex gap-x-4">
						<ULink to="/terms-and-conditions" class="ph">Terms</ULink>
						<ULink to="/privacy-policy" class="ph">Privacy</ULink>
						<ULink to="/" class="ph">Cookies</ULink>
					</div>
				</div>
			</div>
		</div>
	</footer>

</template>

<script setup>
import LinkedInIcon from '~/assets/icons/linkedin.svg';
import FacebookIcon from '~/assets/icons/facebook.svg';
import TwitterIcon from '~/assets/icons/twitter.svg';
</script>