import React from 'react';

import Shisha from '@views/Shisha';
import { getShisha } from '@utils/Contentful';
import { SHOPIFY_ACCESS_TOKEN, SHOPIFY_DOMAIN } from '@utils/lib/const';
// import { shisha as shishaRoute} from '@utils/lib/routes';
// import { SHOPIFY_ACCESS_TOKEN, SHOPIFY_DOMAIN } from '@utils/lib/const';

export default function ShishaPage(props) {
	return <Shisha {...props} />;
}

export async function getStaticProps() {
	// const { readFile } = require('fs').promises;

	// const shisha = JSON.parse(await readFile('utils/data/shisha.json'))[0].fields;
	const shisha = await getShisha();
	const shishaImg = await getShishaImg(shisha.shopifyId);

	const props = {
		meta: {
			title: shisha.metaTitle,
			description: shisha.metaDescription,
		},
		shopifyId: shisha.shopifyId,
		name: shisha.name,
		img: shishaImg?.image?.src,
		slug: shisha.slug,
		alt: shisha.alt ? shisha.alt : shishaImg?.image?.src,
		description: shisha.description,
		options: shisha.options,
	};

	return {
		props,
	};

	async function getShishaImg(id) {
		const query = `
		{
			node(id: "${id}") {
			  ... on ProductVariant {
					image {
				  		src: originalSrc
				  		alt: altText
					}
			  	}
			}
		}`;

		try {
			const data = await fetch(`https://${SHOPIFY_DOMAIN}/api/2020-07/graphql.json`, {
				method: 'POST',
				mode: 'cors',
				headers: {
					'X-Shopify-Storefront-Access-Token': SHOPIFY_ACCESS_TOKEN,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ query }),
			});

			return (await data.json()).data.node;
		} catch (error) {
			console.error(error);
		}
	}
}
