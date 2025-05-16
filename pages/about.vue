<template>
	<main>
		<article class="container mt-6 lg:mt-0">
			<div
				class="md:h-[600px] lg:h-[800px] card overflow-hidden relative before:w-full before:h-full before:z-1 dark:before:bg-black-1/[.5] before:absolute before:left-0 before:top-0">
				<img src="~/assets/images/about.png" class="w-full h-full object-cover bg-" alt="about image">
			</div>
			<h1 class="title mt-4 lg:mt-12">About Unione <span class="text-purple">eld</span></h1>
			<ul class="mt-4 lg:mt-10 space-y-4 lg:space-y-8">
				<li v-for="data in about" :key="data.id" class="card p-3 lg:py-12 lg:px-16 space-y-3">
					<h3 class="subtitle tracking-wide">{{ data.title }}</h3>
					<p class="ph lg:text-lg tracking-wide whitespace-pre-wrap">{{ data.context }}</p>
				</li>
			</ul>
		</article>
	</main>
</template>

<script setup lang="ts">
import { about } from '~/data/about'
</script>