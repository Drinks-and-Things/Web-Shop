import React from 'react';
import toast from 'react-hot-toast';
import { Button } from 'react-bootstrap';
import { CartIcon } from '../Icons';
import { useCart } from '../../contexts/CartContext';
import styles from './Cart.module.scss';

export default function Cart({ toggle }) {
	const { checkout } = useCart();

	return (
		<Button
			style={{
				display: 'inline-flex',
				fontSize: 'medium',
			}}
			className='p-2'
			onClick={() => {
				toast.dismiss();
				toggle();
			}}
		>
			<CartIcon width='25px' /> ({checkout.lineItems.length})
		</Button>
	);
}
