import { createClient } from 'contentful';
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from './lib/const';
import { fetchNode } from './ServerShopify';

// const client = createClient({
// 	space: 'ch9q926xwa9k',
// 	accessToken: 'Sb3w3YODGE9H5mn4d6-8QdDQzjue7arO8VF8sDbUEjM',
// });
// console.log(CONTENTFUL_SPACE_ID);
// console.log(CONTENTFUL_ACCESS_TOKEN);
// console.log(CONTENTFUL_SPACE_ID == 'ch9q926xwa9k');
// console.log(CONTENTFUL_ACCESS_TOKEN == 'Sb3w3YODGE9H5mn4d6-8QdDQzjue7arO8VF8sDbUEjM');

const client = createClient({
	space: CONTENTFUL_SPACE_ID,
	accessToken: CONTENTFUL_ACCESS_TOKEN,
});

export async function getPageData(category) {
	let productsWithImg = [];
	const meta = await getCategoryMetaData(category);
	const products = await getProductsByCategory(category);

	for (let i = 0; i < products.length; i++) {
		const { image } = await fetchNode(products[i].shopifyId);
		productsWithImg.push({
			...products[i],
			img: image && image.src,
			alt: image && image.alt ? image.alt : products[i].alt,
		});
	}

	return {
		meta,
		products: productsWithImg,
	};
}

export async function getHomepage() {
	try {
		const entries = await client.getEntries({
			content_type: 'startseite',
		});

		const homepage = entries?.items[0]?.fields;

		return homepage;
	} catch (error) {
		console.error(error.message);
	}
}

export async function getShisha() {
	try {
		const [shisha] = await getProductsByCategory('Shisha');

		return shisha;
		// return shisha[0];
	} catch (error) {
		console.error(error.message);
	}
}

export async function getAGB() {
	try {
		const entries = await client.getEntries({
			content_type: 'agb',
		});

		const agb = entries?.items[0]?.fields?.agb;

		return agb;
	} catch (error) {
		console.error(error.message);
	}
}

export async function getContactInfo() {
	try {
		const entries = await client.getEntries({
			content_type: 'contact',
		});

		const homepage = entries?.items[0]?.fields;

		return homepage;
	} catch (error) {
		console.error(error.message);
	}
}

export async function getCategoryMetaData(name) {
	try {
		const entries = await client.getEntries({
			content_type: 'category',
			'fields.title': name,
		});

		const metadata = entries?.items[0]?.fields;

		return metadata;
	} catch (error) {
		console.error(error.message);
	}
}

export async function getProductsByCategory(name) {
	try {
		const entries = await client.getEntries({
			'fields.category.fields.title': name,
			content_type: 'produkt',
			'fields.category.sys.contentType.sys.id': 'category',
		});

		return entries?.items?.map((item) => item.fields);
	} catch (error) {
		console.error(error);
	}
}
