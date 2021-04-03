// import { GraphQLClient } from 'graphql-request';
// import Client from 'shopify-buy/index.unoptimized.umd';
import Klient from 'shopify-buy';
import { SHOPIFY_ACCESS_TOKEN, SHOPIFY_DOMAIN } from '@lib/const';

export default async function useStaticShopify(query, variables = {}) {
	const domain = SHOPIFY_DOMAIN;
	const endpoint = `https://${domain}/api/2021-01/graphql.json`;
	const headers = {
		'X-Shopify-Storefront-Access-Token': SHOPIFY_ACCESS_TOKEN,
	};

	const client = Klient.buildClient({
		domain: SHOPIFY_DOMAIN,
		storefrontAccessToken: SHOPIFY_ACCESS_TOKEN,
	});

	// const client = new GraphQLClient(endpoint, {
	// 	'Access-Control-Allow-Origin': 'http://localhost:3000',
	// 	headers,
	// });

	let data, error;
	try {
		// data = await client.request(query);
		data = await client.collection.fetchByHandle(query);
	} catch (err) {
		error = err;
		console.error(error);
	}

	return {
		data: data,
		error: error,
	};
}
