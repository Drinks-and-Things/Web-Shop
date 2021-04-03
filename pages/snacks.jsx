import React from 'react';

import { SnacksPage } from '../views/Snacks';
import { getPageData } from '@utils/Contentful';
// import { getProducts } from '@utils/data/products';

const Snacks = ({ products, meta }) => {
	return <SnacksPage products={products} meta={meta} />;
};

export async function getStaticProps() {
	const props = await getPageData('Snacks');

	return {
		props: JSON.parse(JSON.stringify(props)),
	};

	// const meta = await getCategoryMetaData();
	// const snacks = await getProductsByCategory("Snacks");
	// const props = {
	// 	meta: {
	// 		title: snacks.metaTitle,
	// 		description: snacks.metaDescription,
	// 	},
	// 	shopifyId: snacks.shopifyId,
	// 	name: snacks.name,
	// 	slug: snacks.slug,
	// 	description: snacks.description,
	// 	options: snacks.options,
	// };

	// const products = await getProducts();
	// const productCount = products.length;

	// const props = {
	// 	products,
	// 	productCount,
	// };

	// return {
	// 	props,
	// };
}

export default Snacks;
