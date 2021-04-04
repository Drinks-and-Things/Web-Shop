import React, { forwardRef, useState } from 'react';
import { Card, Row, Button, Col } from 'react-bootstrap';
import CartItem from './CartItem';
import { XIcon } from '../Icons';
import { useCart } from '../../contexts/CartContext';
import s from './CartPage.module.scss';

const CartPage = forwardRef(({ opened, close }, ref) => {
	const { checkout, clearCart, removeLineItem, updateLineItem } = useCart();
	const [updating, setUpdating] = useState(false);

	async function handleUpdate(lineItemID, quantity) {
		setUpdating(true);
		await updateLineItem(lineItemID, quantity);
		setUpdating(false);
	}

	async function handleRemove(lineItemID) {
		setUpdating(true);
		await removeLineItem(lineItemID);
		setUpdating(false);
	}

	function checkSum() {
		if (checkout.totalPrice > 10) {
			return true;
		}
		return false;
	}

	return (
		<div
			ref={ref}
			tabIndex={opened === true ? '-1' : ''}
			className={`${s.cart__root} ${opened === true ? s.open : s.closed} ${
				updating === true && s.updating
			}`}
		>
			<header className={`${s.heading}`}>
				<h2>Warenkorb</h2>
				<Button variant='primary' onClick={close}>
					<XIcon width='35px' />
				</Button>
			</header>
			<div className={s.content}>
				{checkout.lineItems.length > 0 ? (
					<Card>
						<Card.Body className='border-0'>
							{checkout.lineItems.map((lineItem) => {
								return (
									<CartItem
										key={lineItem.id}
										updateLineItem={handleUpdate}
										removeLineItem={handleRemove}
										{...lineItem}
									/>
								);
							})}
						</Card.Body>
					</Card>
				) : (
					<div className='p-3 text-center text-muted'>
						Ihr Wahrenkorb ist derzeit leer
					</div>
				)}
				<Row sm='12' className='mt-2 justify-content-center' noGutters={true}>
					{checkout.lineItems.length > 0 && (
						<Card style={{ width: '100%' }}>
							<Card.Body>
								<Col>
									<p className='mb-1'>Total Items</p>
									<h4 className=' mb-3 txt-right'>
										{checkout?.lineItem?.length}
									</h4>
									<p className='mb-1'>Gesamtkosten</p>
									<h3 className='m-0 txt-right'>{checkout.totalPrice}</h3>
									{/* <h3 className='m-0 txt-right'>{formatNumber(total)}</h3> */}
									<hr className='my-4' />
									{checkSum() === false && <p>Mindestbestellwert beträgt 10€</p>}
									<div className='text-center'>
										<a
											aria-disabled={checkSum() !== true ? 'true' : 'false'}
											href={checkout.webUrl}
											className={`btn btn-primary mb-2 ${
												checkSum() !== true && 'disabled ' + s.isDisabled
											}`}
										>
											CHECKOUT
										</a>
									</div>
								</Col>
							</Card.Body>
						</Card>
					)}
				</Row>
			</div>
		</div>
	);
});
export default CartPage;
// {
// 	checkout && (
// 		<div className='p-3 text-center text-success'>
// 			<p>Checkout successfull</p>
// 			<Link href='/'>
// 				<a className='btn btn-outline-success btn-sm'>
// 					BUY MORE
// 				</a>
// 			</Link>
// 		</div>
// 	);
// }
