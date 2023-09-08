import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const { SITE_URL, PRODUCTION } = loadEnv(process.env, process.cwd(), '');

export default defineConfig({
	// all the usual config goes here...
	site: PRODUCTION ? SITE_URL : 'https://www.example.com',
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
});
