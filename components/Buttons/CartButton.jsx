import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const NOOP = () => {};
export default function CartButton({ onClick = NOOP }) {
	return (
		<Button
			aria-label='Zum Warenkorb hinzufügen'
			className='btn btn-sm'
			variant='primary'
			style={{ padding: '0.625rem 1rem', cursor: 'pointer' }}
			aria-label='Fügt das Produkt zum Warenkorb'
			onClick={onClick}
		>
			<span style={{ display: 'none' }}>Zum Warenkorb hinzufügen</span>
			<FontAwesomeIcon icon={faCartPlus} size='lg' />
		</Button>
	);
}
