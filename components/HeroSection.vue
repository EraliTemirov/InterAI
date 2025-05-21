<template>
	<section class="py-16 md:py-24">
		<div class="max-w-5xl mx-auto px-4 text-center">
			<h1 class="text-3xl md:text-5xl font-medium text-white leading-snug md:leading-tight">
				AI orqali sifatli xodimlarni ishga oling.
				<br />
				70% vaqt va pulingizni tejang
			</h1>
			<p class="mt-6 max-w-3xl text-center mx-auto text-white text-base md:text-lg font-light">
				AI platformamiz nomzodlarni topadi, saralaydi va intervyu qiladi. Sizga faqat eng loyiq nomzodlarni taqdim etadi.
			</p>
			<div class="mt-8 mx-auto flex justify-center gap-4">
				<NuxtLink
					@click="$emit('scroll-to', 'contact')" 
					class="flex justify-center items-center max-w-lg bg-gradient-to-r from-[#2A6FF5] to-[#1B45BE] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:opacity-90 transition"
				>
					<button>Bepul foydalaning</button>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</NuxtLink>
			</div>
		</div>
	</section>
</template>
