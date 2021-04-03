import useSWR from 'swr';

import { SHOPIFY_ACCESS_TOKEN, SHOPIFY_DOMAIN } from '@utils/lib/const';

const fetcher = async (query, variables) => {
	const data = await fetch(`https://${SHOPIFY_DOMAIN}/api/2021-01/graphql.json`, {
		method: 'POST',
		mode: 'cors',
		headers: {
			'X-Shopify-Storefront-Access-Token': SHOPIFY_ACCESS_TOKEN,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query, variables }),
	});

	return await data.json();
};

export default function useShopify(query) {
	const { data, error } = useSWR(query, fetcher, {
		refreshInterval: 10000,
		dedupingInterval: 0,
		revalidateOnMount: true,
		refreshWhenHidden: true,
	});

	return {
		data: data?.data,
		isLoading: !error && !data,
		isError: error,
	};
}
