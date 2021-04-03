import React from 'react';
import Container from 'react-bootstrap/Container';

import Page from '@components/Page';
import ProductsGrid from '@components/Products/ProductsGrid';

export default function Drinks({ products, meta, title }) {
	return (
		<Page
			title={title}
			metaTitle={meta?.title}
			metaDescription={meta?.description}
			metaImage={meta?.image?.fields?.file?.url}
			metaImageAlt={meta?.image?.fields?.title}
		>
			<Container>
				<ProductsGrid products={products} productCount={products.length} />
			</Container>
		</Page>
	);
}
