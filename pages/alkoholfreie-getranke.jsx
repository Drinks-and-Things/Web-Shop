import React from 'react';

import Drinks from '@views/Drinks';
import { getPageData } from '@utils/Contentful';

export default function AlkFreePage({ products, meta }) {
	return <Drinks meta={meta} products={products} title='Alkoholfreie Getränke' />;
}
export async function getStaticProps({ preview = false }) {
	const props = await getPageData('Alkoholfreie Getränke');

	return {
		props: JSON.parse(JSON.stringify(props)),
	};
}
