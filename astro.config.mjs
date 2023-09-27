import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import sitemap from '@astrojs/sitemap';
import vercelStatic from '@astrojs/vercel/static';

const { SITE_URL, PRODUCTION } = loadEnv(process.env, process.cwd(), '');

export default defineConfig({
	// all the usual config goes here...
	site: PRODUCTION ? SITE_URL : 'http://localhost:3000/',
	integrations: [sitemap()],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use '@/styles/_main.scss' as *;`,
				},
			},
		},
	},
	output: 'static',
	adapter: vercelStatic({
		analytics: true,
	}),
});
