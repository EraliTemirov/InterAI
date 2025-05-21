<template>
	<footer class="text-white py-10 md:py-16">
		<div class="max-w-7xl mx-auto px-4 space-y-10">
			<div class="bg-[#2F2F2F] p-6 md:p-10 rounded-2xl text-center space-y-6">
				<h2 class="text-2xl md:text-4xl font-medium">Savollaringiz bormi? Xabar qoldiring</h2>

				<form @submit.prevent="submitForm" class="flex flex-col md:flex-row gap-4 justify-center items-center">
          <input
            v-model="name"
            type="text"
            placeholder="Ismingiz"
            required
            class="w-full md:w-auto flex-1 bg-[#0F0F0F] border border-[#3A3A3A] rounded-lg py-3 px-5 text-white placeholder-gray-400"
          />
          <input
            v-model="phone"
            type="tel"
            placeholder="+998 000-00-00"
            required
            class="w-full md:w-auto flex-1 bg-[#0F0F0F] border border-[#3A3A3A] rounded-lg py-3 px-5 text-white placeholder-gray-400"
          />
          <input
            v-model="email"
            type="email"
            placeholder="Elektron pochtangiz"
            required
            class="w-full md:w-auto flex-1 bg-[#0F0F0F] border border-[#3A3A3A] rounded-lg py-3 px-5 text-white placeholder-gray-400"
          />
          <button
            type="submit"
            class="bg-gradient-to-r from-[#2a93f5] to-[#1B45BE] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:scale-105 transition"
          >
            Jo’natish
          </button>
        </form>
			</div>

			<div class="flex flex-col md:flex-row justify-between items-center text-center text-sm text-gray-400 space-y-4 md:space-y-0">
				<div class="flex items-center gap-2">
					<img src="/assets/images/Footer.png" alt="Inter-AI Logo" class="h-10" />
				</div>
				<div class="flex flex-wrap justify-center md:justify-start gap-6">
					<a href="#" class="hover:text-white">Asosiy sahifa</a>
					<a href="#" class="hover:text-white">Afzalliklar</a>
					<a href="#" class="hover:text-white">Qulayliklar</a>
					<a href="#" class="hover:text-white">Qanday ishlaydi</a>
				</div>
				<div class="flex items-center gap-2">
					<a href="https://linkedin.com" target="_blank" class="hover:text-white flex items-center gap-1">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block align-middle" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M4.98 3.5C4.98 5 3.87 6 2.5 6 1.12 6 0 5 0 3.5 0 2 1.12 1 2.5 1c1.37 0 2.48 1 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.3-2.7 4.7-2.7 5 0 5.9 3.3 5.9 7.7V24h-5v-7c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.8v7h-5V8z"
							/>
						</svg>
						<span class="inline-block align-middle">Linkedin</span>
					</a>
				</div>
			</div>

			<div class="text-center text-xs text-gray-500 mt-6">© 2025 INTER-AI. Hamma huquqlar himoyalangan</div>
		</div>
	</footer>
</template>
<script setup>
import { ref } from 'vue'

const BOT_TOKEN = '7604657118:AAHIN3jtwoWsq8I3AmlxDsTo15UjjfJ1DaE'

const name = ref('')
const phone = ref('')
const email = ref('')

const submitForm = async () => {
  const CHAT_ID = '1770556788'

  const message = `
📝 Yangi so‘rov:
👤 Ismi: ${name.value}
📞 Telefon: ${phone.value}
✉️ Email: ${email.value}
  `

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    })

    if (response.ok) {
      alert('✅ Xabar yuborildi!')
      name.value = ''
      phone.value = ''
      email.value = ''
    } else {
      alert('❌ Xatolik! CHAT_ID yoki TOKEN noto‘g‘ri.')
    }
  } catch (error) {
    alert('🚫 Ulanishda xatolik.')
  }
}
</script>
