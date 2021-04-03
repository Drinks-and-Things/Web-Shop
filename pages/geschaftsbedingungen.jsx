import React from 'react';
import Agb from '@views/Agb/Agb';

export default function geschaftsbedingungen({ agb }) {
	return <Agb agb={agb} />;
}

import { getAGB } from '@utils/Contentful';
export async function getStaticProps() {
	// const { readFile, writeFile } = require('fs').promises;
	// await writeFile('agb.json', JSON.stringify(data));
	// const agb = await readFile('agb.json');

	const agb = await getAGB();

	return {
		// props: { agb: JSON.parse(agb) },
		props: { agb },
	};
}
