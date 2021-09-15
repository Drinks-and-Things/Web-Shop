import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'react-bootstrap';

import Page from '@components/Page';
import useShopify from '@utils/hooks/useShopify.js';
import { formatNumber } from '@utils';

import styles from './Entertainment.module.scss';

export default function Entertainment({ products, meta }) {
	return (
		<div className='mb-5 pt-1'>
			<Page title='Entertainment' metaDescription={meta.description} metaTitle={meta.title}>
				<section className='grid-2 p-3'>
					{products && products.length > 0
						? products.map((product) => {
								return <ProductCard key={product.slug} {...product} />;
						  })
						: null}
				</section>
			</Page>
		</div>
	);
}

function ProductCard({ slug, name, img, shopifyId, ...rest }) {
	const query = `
	{
		node(id: "${shopifyId}") {
			... on ProductVariant {
				price: priceV2 {
					amount
				}
			}
		}
	}
	`;

	const [price, setPrice] = useState('--');

	const { data } = useShopify(query);

	useEffect(async () => {
		if (data) {
			const n = data.node;
			setPrice(n.price.amount);
		}
	}, [data]);

	return (
		<Card className='scale-hover-1_1'>
			<div className={styles.image}>
				<Link href={`/entertainment/${slug}`}>
					<a>
						<Image
							unoptimized={true}
							loading='lazy'
							height='720'
							width='1280'
							src={img}
							alt={name}
						/>
					</a>
				</Link>
			</div>
			<Card.Body>
				<Card.Title className='text-center'>{name}</Card.Title>
				<h3 className='text-center'>{price === '--' ? '--' : formatNumber(price)}</h3>
			</Card.Body>
		</Card>
	);
}
