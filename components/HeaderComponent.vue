<template>
  <header class="w-full shadow-md rounded-xl px-6 py-3 max-w-7xl mx-auto mt-4 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <img src="/assets/images/Logo.png" alt="Inter AI Logo" class="h-8 w-auto" />
    </div>

    <nav class="hidden md:flex items-center gap-10 text-[#0A2A66] font-medium">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/advantages">Advantages</NuxtLink>
      <NuxtLink to="/interview-process">Interview Process</NuxtLink>
      <NuxtLink to="/how-it-works">How It Works</NuxtLink>
    </nav>

    <div class="flex items-center gap-4">
      <div class="relative group">
        <button class="flex items-center gap-1 text-[#0A2A66] font-medium">
          EN
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div class="absolute top-full mt-2 bg-white border rounded shadow hidden group-hover:block">
          <button class="block px-4 py-2 hover:bg-gray-100">UZ</button>
          <button class="block px-4 py-2 hover:bg-gray-100">RU</button>
        </div>
       
      </div>

      <NuxtLink to="/contact" class="bg-gradient-to-r from-[#2A6FF5] to-[#1B45BE] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition">
        Contact
      </NuxtLink>
    </div>
  </header>
</template>
