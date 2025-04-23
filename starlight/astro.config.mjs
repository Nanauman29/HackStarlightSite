// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Kohls gRPC Spring Boot Starter',
			logo: {
				src: './src/assets/grpc_logo.png',
				},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'guides/introduction'},
						{ label: 'Installation', slug: 'guides/installation'},
						{ label: 'Configuration', slug: 'guides/configuration'},
						{ label: 'Usage',         slug: 'guides/usage'},
					],
				},
				{
					label: 'Guides',
					items: [
						{label: 'Guide Placeholder', slug: 'guides/guideplaceholder'}
					]
				},
				{ label: "Refernces",
					items: [
						{label: 'Reference Placeholder', slug: 'guides/refplaceholder'},
					]

				}
			],
		}),
	],
});
