import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const blog = await getCollection('blog');
	return rss({
		title: 'IHT’s Blog',
		description: 'A humble Junior Dev’s guide to the stars',
		site: context.site,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			image: post.data.image,
			link: `/blog/${post.slug}/`,
		})),
	});
}
