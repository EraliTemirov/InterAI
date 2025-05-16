// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
	$development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', 'nuxt-swiper', 'nuxt-gtag'],
	devServer: {
		port: 3672
	},
	gtag: {
		tags: [
			{
				id: 'G-25RQ9SWEKL', // Replace with your Measurement ID
				config: {
					page_title: 'UNIONE ELD',
					send_page_view: true // Default to sending page views
				}
			},
			{
				id: 'AW-16794223838', // Replace with your Measurement ID
				config: {
					page_title: 'UNIONE ELD',
					send_page_view: true // Default to sending page views
				}
			}
		]
	},
	css: ['~/assets/css/main.css'],
	colorMode: {
		preference: 'dark'
	},
	vite: {
		plugins: [svgLoader()]
	},
	experimental: {
		renderJsonPayloads: false
	},
	app: {
		head: {
			title: 'Inter AI',
			meta: [
				{ name: 'description', content: 'Enhance Fleet Efficiency and Ensure Compliance with Unione ELD' },
				{ name: 'keywords', content: 'Do You Need Electronic Logging Devices for Your Fleet?' },
				{ name: 'author', content: 'ELD Service' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'robots', content: 'index, follow' }, // Directs search engines to index and follow links
				{ name: 'googlebot', content: 'index, follow' }, // Specific directives for Googlebot
				{ name: 'msapplication-TileColor', content: '#1C1C1C' }, // Windows tile color
				{ name: 'theme-color', content: '#1C1C1C' }, // Mobile browser theme color
				{ name: 'referrer', content: 'no-referrer-when-downgrade' }, // Controls referrer behavior
				{ property: 'og:type', content: 'website' },
				{ property: 'og:title', content: 'ELD Service' },
				{ property: 'og:description', content: 'Enhance Fleet Efficiency and Ensure Compliance with Unione ELD' },
				{ property: 'og:image', content: 'https://www.unioneeld.com/logo.svg' },
				{ property: 'og:url', content: 'https://www.unioneeld.com' },
				{ property: 'og:locale', content: 'en_US' } // Set locale
			],
			link: [
				{ rel: 'icon', type: 'image/png', href: './logo.svg' },
				{ rel: 'canonical', href: 'https://www.unioneeld.com/#pricing' } // Canonical URL
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
