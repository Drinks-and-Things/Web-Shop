import React from 'react';
import Container from 'react-bootstrap/Container';

import Page from '@components/Page';
import ProductsGrid from '@components/Products/ProductsGrid';

export default function Extras({ products, meta }) {
	return (
		<Page title='Extras' metaTitle={meta.title} metaDescription={meta.description}>
			<Container>
				<ProductsGrid products={products} productCount={products.length} />
			</Container>
		</Page>
	);
}
