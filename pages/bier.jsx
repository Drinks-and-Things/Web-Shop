import React from 'react';

import Drinks from '@views/Drinks';
import { getPageData } from '@utils/Contentful';

export default function BeerPage({ products, meta }) {
	return <Drinks meta={meta} products={products} title='Bier' />;
}

export async function getStaticProps({ preview = false }) {
	const props = await getPageData('Bier');

	return {
		props: JSON.parse(JSON.stringify(props)),
	};
}
