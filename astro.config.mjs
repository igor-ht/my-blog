import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import { loadEnv } from 'vite';

const { SITE_URL, PRODUCTION } = loadEnv(process.env, process.cwd(), '');

// https://astro.build/config
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
	output: 'server',
	adapter: vercel(),
});
