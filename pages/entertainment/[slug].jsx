import React from 'react';
import ProductPage from '@components/ProductPage';
import { getProductsByCategory } from '@utils/Contentful';
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from '@utils/lib/const';
import { fetchNode } from '@utils';

// import { products } from '@utils/data/entertainment';

export default function EntertainmentPages({ product, meta }) {
	return (
		// <Layout entertainment={product}>
		<ProductPage meta={meta} {...product} />
		// </Layout>
	);
}

export async function getStaticPaths() {
	const products = await getProductsByCategory('Entertainment');

	const paths = products.map((product) => ({
		params: { slug: product.slug },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const { createClient } = require('contentful');
	const contentful = createClient({
		space: CONTENTFUL_SPACE_ID,
		accessToken: CONTENTFUL_ACCESS_TOKEN,
	});

	const entries = await contentful.getEntries({
		'fields.slug': params.slug,
		content_type: 'produkt',
	});

	// console.log(product.items[0].fields);

	// const { metaDescription, metaImage, metaTitle, ...product } = products.find(
	// 	(p) => p.slug === params.slug
	// );
	const { metaDescription, metaImage, metaTitle, ...product } = entries?.items[0]?.fields;

	const meta = {
		title: metaTitle,
		description: metaDescription,
		image: metaImage ? metaImage : null,
	};

	const { image } = await fetchNode(product.shopifyId);

	const props = {
		product: {
			...product,
			img: image && image.src,
			alt: image && image.alt ? image.alt : products[i].alt,
			backHref: '/entertainment',
		},
		meta,
	};

	return { props: JSON.parse(JSON.stringify(props)) };
}
