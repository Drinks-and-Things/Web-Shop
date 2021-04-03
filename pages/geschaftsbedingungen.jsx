import React from 'react';
import Agb from '@views/Agb/Agb';

export default function geschaftsbedingungen({ agb }) {
	return <Agb agb={agb} />;
}

// import { getAGB } from '@utils/Contentful';
export async function getStaticProps() {
	const { readFile, writeFile } = require('fs').promises;
	// const data = await getAGB();
	// await writeFile('agb.json', JSON.stringify(data));

	const agb = await readFile('agb.json');

	return {
		props: { agb: JSON.parse(agb) },
	};
}
