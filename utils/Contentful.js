/** @format */
//@ts-check
import { createClient } from 'contentful';
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from './lib/const';
import { fetchNode } from './ServerShopify';

const client = createClient({
	space: CONTENTFUL_SPACE_ID,
	accessToken: CONTENTFUL_ACCESS_TOKEN,
});

export async function getSlug(slug) {
	const entries = await client.getEntries({
		'fields.slug': slug,
		content_type: 'produkt',
	});

	return entries;
}

export async function getPageData(category) {
	let productsWithImg = [];
	try {
		const meta = await getCategoryMetaData(category);
		const products = await getProductsByCategory(category);

		for (let i = 0; i < products?.length || 0; i++) {
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
	} catch (error) {
		console.error(error);
	}
}

export async function getHomepage() {
	try {
		const entries = await client.getEntries({
			content_type: 'startseite',
		});

		const homepage = entries?.items[0]?.fields;

		return homepage;
	} catch (error) {
		console.error('getHomePageError:', error.message);
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
		console.error('CategoryError:', error.message);
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
		console.error('getProductsByCategoryError:', error);
	}
}
