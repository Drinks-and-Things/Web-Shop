import React from 'react';

import Packages from '@views/Packages';
import { getPageData } from '@utils/Contentful';

export default function PackagesPage({ products, meta }) {
	return <Packages products={products} meta={meta} />;
}

export async function getStaticProps() {
	const props = await getPageData('Packages');

	return {
		props: JSON.parse(JSON.stringify(props)),
	};
}
