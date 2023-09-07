import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const { SITE_URL, PRODUCTION } = loadEnv(process.env, process.cwd(), '');

export default defineConfig({
	// all the usual config goes here...
	site: PRODUCTION ? SITE_URL : 'https://www.example.com',
	integrations: [mdx(), sitemap()],
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
