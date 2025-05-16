<template>
	<main>
		<section class="w-full overflow-x-hidden container mt-12">
			<div class="card">
				<div
					class="blog relative w-full dark:bg-purple flex items-center before:absolute before:left-0 before:right-0 before:h-full before:w-full before:z-[3] before:bg-black-1"
					aria-label="hero image">
					<div class="relative h-[100px] lg:h-[230px] w-full">
						<div class="absolute left-4 lg:left-[62px] top-1/2 -translate-y-1/2 z-10">
							<h1 class="title font-sfPro">{{ currentBlog?.title }}</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="container lg:px-16 px-6 py-4 lg:py-7">
			<UBreadcrumb class="font-sfPro" divider="/" :ui="{li: 'text-xs md:text-sm lg:text-lg dark:text-white/[.6]', inactive: 'dark:hover:text-white/[.8] duration-300', active: 'dark:text-purple-0'}"
									 :links="[{ label: 'Home', to: '/' }, { label: 'Blogs', to: '/blogs' }, { label: currentBlog?.title }]" />
		</section>
		<section class="container">
			<div class="card lg:py-12 p-3 lg:px-16 space-y-4 lg:space-y-8">
				<div class="flex flex-col gap-y-2 lg:gap-y-4" v-for="(section, ind) in currentBlog?.sections" :key="ind">
					<p class="ph">{{ section?.subtitle }}</p>
					<ul v-for="(item, ind) in section?.content?.list" :key="ind" class="list-disc">
						<li class="ml-8 ph">{{item}}</li>
					</ul>
				</div>
			</div>
		</section>
	</main>
</template>


<script setup>
import { blogs } from '~/data/blogs';

const route = useRoute();
const currentBlogId = parseInt(route.params.id);

const cards = reactive(blogs);

const currentBlog = computed(() => {
	return cards.find(card => card.id === currentBlogId);
});

useHead({
	title: () => `${currentBlog.value?.title} | Blogs`
});


</script>


<style scoped>
.blog:before {
	clip-path: polygon(0 0, 26% 0, 55% 100%, 0 100%);
}
</style>
