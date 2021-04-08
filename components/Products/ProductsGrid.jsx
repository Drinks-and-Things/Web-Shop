import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductsGrid.module.scss';
import { Row, Col } from 'react-bootstrap';

const ProductsGrid = ({ products, img }) => {
	return (
		<>
			<Row>
				<Col sm={8}>
					<div className='py-3'>{products && products.length} Produkte</div>
				</Col>
				<Col sm={4}>
					{/* <select name='order' id='order'>
						<option value='priceASC'>Preis: Aufsteigend</option>
						<option value='priceDEC'>Preis: Absteigend</option>
						<option value=''></option>
						<option value=''></option>
					</select> */}

					{/* <Form>
						<Form.Group>
							<Form.Control
								type='text'
								name=''
								placeholder='Search product'
								className='form-control'
								id=''
							/>
						</Form.Group>
					</Form> */}
				</Col>
			</Row>
			<div className={styles.p__grid}>
				{products?.map((product) => (
					<ProductCard img={img} key={product.shopifyId} product={product} />
				))}
			</div>
		</>
	);
};

export default ProductsGrid;
