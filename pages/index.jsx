import React from 'react';
import Homepage from '../views/Homepage';
import InstallPrompt from '@components/InstallPrompt/IOS';
// import { getProducts } from '@utils/data/products';
import { useIsIOS, useIsStandalone } from '@utils/hooks';
import { getHomepage } from '@utils/Contentful';
import { fetchNode } from '@utils';
// import { OpeningHoursPopUp } from '@components/Promos';
import { NewOpeningPopUp } from '@components/Promos';

const Home = ({ preview, products, home }) => {
	const { prompt, isSafari } = useIsIOS();
	const isStandalone = useIsStandalone();
	// console.log(prompt);
	console.log(!isStandalone);

	return (
		<>
			{prompt && <InstallPrompt />}
			{/* {!isStandalone && <OpeningHoursPopUp />} */}
			{/* <NewOpeningPopUp /> */}

			<Homepage {...home} />
		</>
	);
};

export async function getStaticProps({ preview = false }) {
	let productCarousel = [];
	const HomepageData = (await getHomepage()) || {};
	for (let i = 0; i < HomepageData?.productCarousel?.length || 0; i++) {
		const { image } =
			(await fetchNode(HomepageData?.productCarousel[i].fields.shopifyId)) || {};
		productCarousel.push({
			...HomepageData?.productCarousel[i].fields,
			img: image && image.src,
			alt: image && image.alt
		});
	}

	// console.log(HomepageData?.productCarousel[1].fields.options);
	// console.log(productCarousel);

	const props = {
		preview,
		home: {
			meta: HomepageData?.metaData?.fields,
			cta: HomepageData?.callToAction,
			products: productCarousel,
			bgImage: HomepageData?.bgImage?.fields.file.url,
			alt: HomepageData?.bgImage?.fields.title
		}
	};

	// const products = await getProducts();

	return {
		// props: {
		// 	products,
		// 	preview,
		// },
		props: JSON.parse(JSON.stringify(props))
	};
}

export default Home;
