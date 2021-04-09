import { formatNumber } from '@utils';
import React, { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../Icons';

const CartItem = ({
	id,
	variant,
	quantity,
	removeLineItem,
	updateLineItem,
	title,
	customAttributes,
}) => {
	return (
		<Row style={{ flexWrap: 'unset' }}>
			<Col sm='4' className='p-2'>
				{variant.image && (
					<img
						alt={`Bild von ${title}`}
						style={{ margin: '0 auto', maxHeight: '150px' }}
						src={variant.image.src}
						className='img-fluid d-block'
						loading='lazy'
						decoding='async'
					/>
				)}
			</Col>
			<Col sm='8'>
				<Row className='p-2' style={{ display: 'block' }}>
					<h5 className='mb-1'>{title}</h5>
					<p className='mb-1'>Preis: {formatNumber(variant.price)} </p>
				</Row>
				<Row className='p-2 text-center '>
					<p className='mb-0'>Anzahl: {quantity}</p>
				</Row>
				{customAttributes &&
					customAttributes.map(({ key, value }) => (
						<Row key={key} className='p-2 text-center '>
							<p className='mb-0'>
								{key}: {value}
							</p>
						</Row>
					))}
				<Row sm='4' className='p-2 text-center'>
					<Button
						size='sm'
						onClick={() => updateLineItem(id, quantity + 1)}
						className='mr-2'
					>
						<PlusCircleIcon width={'20px'} />
					</Button>

					<Button
						variant='danger'
						size='sm'
						onClick={() => updateLineItem(id, quantity - 1)}
					>
						<MinusCircleIcon width={'20px'} />
					</Button>

					<Button
						style={{
							marginLeft: 'auto',
						}}
						variant='danger'
						size='sm'
						onClick={() => removeLineItem(id)}
					>
						<TrashIcon width={'20px'} />
					</Button>
				</Row>
			</Col>
		</Row>
	);
};

export default CartItem;

{
	/* {product.quantity > 1 && (
						<Button variant='danger' size='sm' onClick={() => decrease(product)}>
							<MinusCircleIcon width={'20px'} />
						</Button>
					)} */
}

{
	/* {product.quantity === 1 && (
						<Button variant='danger' size='sm' onClick={() => removeProduct(product)}>
							<TrashIcon width={'20px'} />
						</Button>
					)} */
}
