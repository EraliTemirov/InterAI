// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
	$development: undefined,
	$env: undefined,
	$meta: undefined,
	$production: undefined,
	$test: undefined,
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', 'nuxt-swiper', 'nuxt-gtag', '@nuxtjs/i18n', '@vueuse/nuxt'],

	devServer: {
		port: 3672
	},
	gtag: {
		tags: [
			{
				id: 'G-25RQ9SWEK', // Replace with your Measurement ID
				config: {
					page_title: 'Inter AI',
					send_page_view: true // Default to sending page views
				}
			},
			{
				id: 'AW-1679422383', // Replace with your Measurement ID
				config: {
					page_title: 'Inter AI',
					send_page_view: true // Default to sending page views
				}
			}
		]
	},
	css: ['~/assets/css/main.css'],
	vite: {
		plugins: [svgLoader()]
	},
	i18n: {
		locales: [
			{
				code: 'uz',
				name: "O'zbekcha",
				iso: 'uz-UZ',
				file: 'uz.json'
			},
			{
				code: 'en',
				name: 'English',
				iso: 'en-US',
				file: 'en.json'
			},
			{
				code: 'ru',
				name: 'Русский',
				iso: 'ru-RU',
				file: 'ru.json'
			},
		],
		defaultLocale: 'uz',
		lazy: true,
		langDir: 'locales/',
		strategy: 'no_prefix',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			fallbackLocale: 'uz'
		},
	},
	experimental: {
		renderJsonPayloads: false
	},
	app: {
		head: {
			title: 'Inter AI',
			meta: [
				{
					name: 'description',
					content:
						'Inter AI — ishga olish jarayonini sun’iy intellekt orqali avtomatlashtiruvchi aqlli intervyu platformasi. Virtual HR yordamchisi, tez va adolatli yollash imkoniyati.'
				},
				{
					name: 'keywords',
					content:
						'Inter AI, AI interview, avtomatlashtirilgan suhbat, AI recruitment, virtual HR, AI hiring tool, AI job interview, HR AI, raqamli yollovchi, sun’iy intellekt yollash'
				},
				{ name: 'author', content: 'Inter AI Team' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'robots', content: 'index, follow' },
				{ name: 'googlebot', content: 'index, follow' },
				{ name: 'msapplication-TileColor', content: '#0A0A0A' },
				{ name: 'theme-color', content: '#0A0A0A' },
				{ name: 'referrer', content: 'no-referrer-when-downgrade' },

				// Open Graph tags (for Facebook, LinkedIn, etc.)
				{ property: 'og:type', content: 'website' },
				{ property: 'og:title', content: 'Inter AI — AI orqali ishga qabul platformasi' },
				{ property: 'og:description', content: 'Sun’iy intellekt asosidagi avtomatlashtirilgan intervyular orqali tez va professional HR yondashuvini yarating.' },
				{ property: 'og:image', content: 'https://www.interai.uz/logo.png' }, // Replace with actual image URL
				{ property: 'og:url', content: 'https://www.interai.uz' },
				{ property: 'og:locale', content: 'uz_UZ' },

				// Twitter card tags (optional)
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:title', content: 'Inter AI — AI orqali ishga qabul' },
				{ name: 'twitter:description', content: 'Inter AI yordamida sun’iy intellekt asosida avtomatlashtirilgan intervyularni o‘tkazing.' },
				{ name: 'twitter:image', content: 'https://www.interai.uz/logo.png' } // Replace with actual image URL
			],

			link: [
				{ rel: 'icon', type: '#', href: './log.svg' },
			],
			script: [
				{
					children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16794223838');
          `
				},
				{
					type: 'text/javascript',
					innerHTML: `(function(m,e,t,r,i,k,a){
            m[i]=m[i] || function() {
              (m[i].a = m[i].a || []).push(arguments);
            };
            m[i].l = 1 * new Date();
            for (var j = 0; j < document.scripts.length; j++) {
              if (document.scripts[j].src === r) { return; }
            }
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
          })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(99310921, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
            ecommerce: "dataLayer"
          });
          `
				}
			],
			noscript: [
				{
					children: `<div><img src="https://mc.yandex.ru/watch/99310921" style="position:absolute; left:-9999px;" alt="" /></div>`
				}
			]
		},
		pageTransition: {
			name: 'route',
			mode: 'out-in'
		},
		layoutTransition: {
			name: 'route',
			mode: 'out-in'
		}
	}
});
