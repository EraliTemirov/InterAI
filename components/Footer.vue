<template>
  <footer class="bg-[#0F0F0F] text-white py-10 md:py-16">
    <div class="max-w-7xl mx-auto px-4 space-y-10">
      <div class="bg-[#1A1A1A] p-6 md:p-10 rounded-2xl text-center space-y-6">
        <h2 class="text-2xl md:text-3xl font-semibold">Savollaringiz bormi? Xabar qoldiring</h2>

        <form class="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="Ismingiz"
            class="w-full md:w-auto flex-1 bg-[#0F0F0F] border border-[#3A3A3A] rounded-lg py-3 px-5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2A6FF5]"
          />
          <input
            type="tel"
            placeholder="+998 000-00-00"
            class="w-full md:w-auto flex-1 bg-[#0F0F0F] border border-[#3A3A3A] rounded-lg py-3 px-5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2A6FF5]"
          />
          <input
            type="email"
            placeholder="Elektron pochtangiz"
            class="w-full md:w-auto flex-1 bg-[#0F0F0F] border border-[#3A3A3A] rounded-lg py-3 px-5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2A6FF5]"
          />
          <button
            type="submit"
            class="bg-gradient-to-r from-[#2A6FF5] to-[#1B45BE] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:scale-105 transition"
          >
            Jo’natish
          </button>
        </form>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center text-center text-sm text-gray-400 space-y-4 md:space-y-0">
        <div class="flex items-center gap-2">
          <img src="#" alt="Inter-AI Logo" class="h-8" />
        </div>
        <div class="flex flex-wrap justify-center md:justify-start gap-6">
          <a href="#" class="hover:text-white">Asosiy sahifa</a>
          <a href="#" class="hover:text-white">Afzalliklar</a>
          <a href="#" class="hover:text-white">Qulayliklar</a>
          <a href="#" class="hover:text-white">Qanday ishlaydi</a>
        </div>
        <div class="flex items-center gap-2">
          <a href="https://linkedin.com" target="_blank" class="hover:text-white flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 5 3.87 6 2.5 6 1.12 6 0 5 0 3.5 0 2 1.12 1 2.5 1c1.37 0 2.48 1 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.3-2.7 4.7-2.7 5 0 5.9 3.3 5.9 7.7V24h-5v-7c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.8v7h-5V8z"/>
            </svg>
            Linkedin
          </a>
        </div>
      </div>

      <div class="text-center text-xs text-gray-500 mt-6">
        © 2025 INTER-AI. Hamma huquqlar himoyalangan
      </div>
    </div>
  </footer>
</template>
