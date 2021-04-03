import React from 'react';

export default function Drinks() {
	return <div></div>;
}

// import React from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import DefaultErrorPage from 'next/error';
// import Head from 'next/head';
// import { Pagination } from 'react-bootstrap';

// export default function Drinks({
// 	products,
// 	currentPage,
// 	category,
// 	totalPages,
// }) {
// 	const router = useRouter();

// 	if (router.isFallback) {
// 		return <h1>Loading...</h1>;
// 	}

// 	if (products.length === 0) {
// 		return (
// 			<>
// 				<Head>
// 					<meta name='robots' content='noindex' />
// 				</Head>
// 				<DefaultErrorPage statusCode={404} />
// 			</>
// 		);
// 	}

// 	return (
// 		<>
// 			<Pagination>
// 				<Pagination.First />
// 				<Pagination.Prev />
// 				{Array.from({ length: totalPages }, (_, index) => {
// 					return (
// 						<Pagination.Item
// 							key={index}
// 							active={number === currentPage}
// 						>
// 							<Link
// 								href='/drinks/[page]'
// 								as={`/drinks/${category}/${index}`}
// 							>
// 								{number}
// 							</Link>
// 						</Pagination.Item>
// 						// 		<li className={index === currentPage ? 'active' : undefined}>
// 						// 		<a>Go to page {index}</a>
// 						// </li>
// 					);
// 				})}
// 				<Pagination.Next />
// 				<Pagination.Last />
// 			</Pagination>
// 		</>
// 	);
// }

// const GRAPHQL_URL =
// 	'https://drinksandthing.myshopify.com/api/2021-01/graphql.json';

// // const productQuery = () => {
// // 	return `
// // 	query {
// // 		collections(first:1,query:"title:'Playstation'") {
// // 			pageInfo {
// // 				hasNextPage
// // 			}
// // 			edges {
// // 				node {
// // 					title
// // 				}
// // 			}
// // 		}
// // 	}
// // 	`;
// // };
// const query = `
// 	{
// 		collections(first:1,query:"title:'Playstation'"){
// 			pageInfo {
// 				hasNextPage
// 			}
// 		}
// 	}
// `;

// const productQuery = () => {
// 	return {
// 		query: `
// 		query {
// 			collections(first:1,query:"title:'Playstation'") {
// 				pageInfo {
// 					hasNextPage
// 				}
// 				edges {
// 					node {
// 						title
// 					}
// 				}
// 			}
// 		}
// 	`,
// 	};
// };

// const GRAPHQL_BODY = () => {
// 	return {
// 		method: 'POST',
// 		// crossDomain: true,
// 		'Access-Control-Allow-Origin': 'http://localhost:3000',
// 		headers: {
// 			'X-Shopify-Storefront-Access-Token':
// 				'0c9d98f10a589a4eff916c68fac0dfb9',
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({ query }),
// 		// body: JSON.stringify(productQuery()),
// 	};
// };

// const getData = async () => {
// 	try {
// 		const res = await fetch(GRAPHQL_URL, GRAPHQL_BODY());
// 		collection = res.json();
// 		return collection.data.collections;
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

// // export async function getStaticPaths() {
// // 	let numberOfPages = 0;
// // 	while (!hasNextPage) {
// // 		const collection = await getData();
// // 		const hasNextPage = collection.pageInfo.hasNextPage;
// // 		console.log(hasNextPage);
// // 	}

// // 	// const numberOfPages = Math.ceil(page / 20.0);
// // 	const paths = Array(numberOfPages - 1)
// // 		.fill('')
// // 		.map((_, index) => {
// // 			return {
// // 				params: {
// // 					currentPage: index.toString(),
// // 				},
// // 			};
// // 		});

// // 	return {
// // 		fallback: true,
// // 		paths: paths,
// // 	};
// // }

// // export async function getStaticProps({ params }) {
// // 	// fetch data based on category and page
// // 	const { products, totalPages } = await getProductsByCategory(params.category, params.page);
// // 	return {
// // 		props: {
// // 			products,
// // 			currentPage: params.page,
// // 			totalPages,
// // 		},
// // 	};
// // }
