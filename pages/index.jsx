import React from 'react';
import Homepage from '../views/Homepage';
import InstallPrompt from '@components/InstallPrompt/IOS';
// import { getProducts } from '@utils/data/products';
import { useIsIOS } from '@utils/hooks';
import { getHomepage } from '@utils/Contentful';
import { fetchMultipleNodes, fetchNode } from '@utils';

const Home = ({ preview, products, home }) => {
	const { prompt } = useIsIOS();
	// console.log(prompt);

	return (
		<>
			{prompt && <InstallPrompt />}
			<Homepage
				{...home}
				// products={products}
				// bgImage='/vienna_50.jpg'
			/>
		</>
	);
};

export async function getStaticProps({ preview = false }) {
	// const { createClient } = require('contentful');
	// const contentful = createClient({
	// 	space: process.env.CONTENTFUL_SPACE_ID,
	// 	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	// });

	// for (let i = 0; i < HomepageData.productCarousel.length; i++) {
	// 	const { image } = await fetchNode(HomepageData.productCarousel[i].fields.shopifyId);
	// 	const optionId = HomepageData.productCarousel[i].fields?.options;
	// 	const options = optionId && contentful.getEntry(optionId);
	// 	console.log(optionId);
	// 	console.log(options);
	// 	productCarousel.push({
	// 		...HomepageData.productCarousel[i].fields,
	// 		img: image && image.src,
	// 		alt: image && image.alt,
	// 		options: options && options,
	// 	});
	// }
	let productCarousel = [];
	const HomepageData = await getHomepage();

	for (let i = 0; i < HomepageData.productCarousel.length; i++) {
		const { image } = (await fetchNode(HomepageData.productCarousel[i].fields.shopifyId)) || {};
		productCarousel.push({
			...HomepageData.productCarousel[i].fields,
			img: image && image.src,
			alt: image && image.alt,
		});
	}

	// console.log(HomepageData.productCarousel[1].fields.options);
	// console.log(productCarousel);

	const props = {
		preview,
		home: {
			meta: HomepageData.metaData.fields,
			cta: HomepageData.callToAction,
			products: productCarousel,
			bgImage: HomepageData.bgImage.fields.file.url,
			alt: HomepageData.bgImage.fields.title,
		},
	};

	// const products = await getProducts();

	return {
		// props: {
		// 	products,
		// 	preview,
		// },
		props: JSON.parse(JSON.stringify(props)),
	};
}

export default Home;
