<template>
	<main>
		<section class="w-full overflow-x-hidden container mt-12">
			<div class="card ">
				<div
					class="blog relative w-full dark:bg-purple flex items-center before:absolute before:left-0 before:right-0 before:h-full before:w-full before:z-[3] before:bg-black-1"
					aria-label="hero image">
					<div class="relative h-[15vh] lg:h-[25vh] w-full">
						<div class="absolute left-4 lg:left-[62px] top-1/2 -translate-y-1/2 z-10">
							<h1 class="title">Hours<span class="font-sfPro">-</span>of<span class="font-sfPro">-</span>Service Rules</h1>
							<p class="subtitle mt-4 lg:mt-0 font-semibold tracking-wide">A guide to hours-of-service (HOS) rules and regulations in
								the USA.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="container mt-8 lg:mt-12">
			<ul class="space-y-6 lg:space-y-8">
				<li v-for="blog in blogs" :key="blog.id">
					<ULink class="card dark:hover:border-purple duration-300 block p-3 lg:py-12 lg:px-16 space-y-4 group" :to="`/blogs/${blog.id}`">
						<div class="flex justify-between gap-x-4">
							<h3 class="subtitle tracking-wide">{{ blog.title }}</h3>
							<ArrowRightIcon class="w-4 shrink-0 lg:w-8 group-hover:text-purple duration-300" />
						</div>
						<p class="ph tracking-wide line-clamp-1">{{ blog.sections[0].subtitle }}</p>
					</ULink>
				</li>
			</ul>

		</section>
	</main>
</template>


<script setup>
import { blogs } from '~/data/blogs';

// importing icons
import ArrowRightIcon from '~/assets/icons/arrow-right.svg';
</script>
<style scoped>
.blog:before {
	clip-path: polygon(0 0, 26% 0, 55% 100%, 0 100%);
}
</style>
