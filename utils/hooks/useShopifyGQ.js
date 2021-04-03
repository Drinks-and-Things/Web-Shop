import { request } from 'graphql-request';
import useSWR from 'swr';

const fetcher = (query, variables) => {
	const domain = process.env.SHOPIFY_DOMAIN;
	const token = process.env.SHOPIFY_ACCESS_TOKEN;
	const header = {
		'X-Shopify-Storefront-Access-Token': token,
	};

	request(`${domain}/api/2021-01/graphql.json`, query, variables, header);
};

export default function useShopify(query) {
	const { data, error } = useSWR(query, fetcher);

	return {
		data: data,
		isLoading: !error && !data,
		isError: error,
	};
}
