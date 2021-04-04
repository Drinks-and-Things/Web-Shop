import React from 'react';

import Entertainment from '@views/Entertainment';
import { getPageData } from '@utils/Contentful';
// import { products } from '@utils/data/entertainment';

export default function EntertainmentPage({ products, meta }) {
	return <Entertainment products={products} meta={meta} />;
}

export async function getStaticProps() {
	const props = await getPageData('Entertainment');

	return {
		// props: { products }
		props: JSON.parse(JSON.stringify(props)),
	};
}
