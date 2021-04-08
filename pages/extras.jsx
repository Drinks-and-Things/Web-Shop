import React from 'react';

import { Extras } from '@views/Extras';
import { getPageData } from '@utils/Contentful';

export default function ExtrasPage({ products, meta }) {
	return <Extras products={products} meta={meta} />;
}

export async function getStaticProps({ preview = false }) {
	const props = await getPageData('Extras');

	return {
		props: JSON.parse(JSON.stringify(props)),
	};
}
