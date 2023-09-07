import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const { SITE_URL } = loadEnv(process.env.SITE_URL, process.cwd(), '');

export default defineConfig({
	// all the usual config goes here...
	site: SITE_URL,
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
