import React from 'react';

import Drinks from '@views/Drinks';
import { getPageData } from '@utils/Contentful';

export default function AlkPage({ products, meta }) {
	return <Drinks meta={meta} products={products} title='Alkoholische Getränke' />;
}

export async function getStaticProps({ preview = false }) {
	const props = await getPageData('Alkoholische Getränke');

	return {
		// props: {},
		props: JSON.parse(JSON.stringify(props)),
	};
}
