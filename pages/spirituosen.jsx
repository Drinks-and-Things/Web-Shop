import React from 'react';

import Drinks from '@views/Drinks';
import { getPageData } from '@utils/Contentful';

export default function SpirituosenPage({ products, meta }) {
	return <Drinks meta={meta} products={products} title='Spirituosen' />;
}

export async function getStaticProps({ preview = false }) {
	const props = await getPageData('Spirituosen');

	return {
		props: JSON.parse(JSON.stringify(props)),
	};
}
