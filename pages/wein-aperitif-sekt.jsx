import React from 'react';

import Drinks from '@views/Drinks';
import { getPageData } from '@utils/Contentful';

export default function WinePage({ products, meta }) {
	return <Drinks meta={meta} products={products} title='Wein/Sekt/Aperitif' />;
}

export async function getStaticProps({ preview = false }) {
	const props = await getPageData('Wein/Sekt/Aperitif');

	return {
		props: JSON.parse(JSON.stringify(props)),
	};
}
