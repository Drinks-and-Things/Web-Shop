import { SHOPIFY_ACCESS_TOKEN, SHOPIFY_DOMAIN } from './lib/const';

// import { OLD_SHOPIFY_ACCESS_TOKEN, OLD_SHOPIFY_DOMAIN } from './lib/const';

// import { GraphQLClient, gql } from 'graphql-request';
// const client = new GraphQLClient(`https://${OLD_SHOPIFY_DOMAIN}/api/2020-07/graphql.json`, {
// 	headers: { 'X-Shopify-Storefront-Access-Token': OLD_SHOPIFY_ACCESS_TOKEN, mode: 'cors' },
// });

export async function fetchFromShopify(query, variables) {
	try {
		const data = await fetch(`https://${SHOPIFY_DOMAIN}/api/2020-07/graphql.json`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'X-Shopify-Storefront-Access-Token': SHOPIFY_ACCESS_TOKEN,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query, variables }),
		});
		// console.log(await data.json());
		return (await data.json()).data;
		// const data = await client.request(query, variables);
		// return data;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchMultipleNodes(ids) {
	const data = await fetchFromShopify(
		`
			query getNodes($ids: [ID!]!) {
				nodes(ids: $ids) {
					... on ProductVariant {
						image {
							src: originalSrc
							alt: altText
						}
					}
				}
			}
		`,
		{ ids: ids }
	);
	return data.nodes || [];
}

export async function fetchNode(id) {
	const data = await fetchFromShopify(
		`{
            node(id: "${id}") {
                ... on ProductVariant {
                    image {
                        src: originalSrc
                        alt: altText
                    }
                }
            }
		}
		`
	);

	return data.node || {};
}
