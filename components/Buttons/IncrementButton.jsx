import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function IncrementButton({ amount, setAmount, max, ...props }) {
	return (
		<>
			<Button
				className='btn btn-sm'
				onClick={() => setAmount(++amount)}
				disabled={amount === max ? true : false}
				aria-label='Erhöht die Menge eines Produkten'
				{...props}
			>
				<FontAwesomeIcon icon={faPlus} />
			</Button>
		</>
	);
}

IncrementButton.propTypes = {
	amount: PropTypes.number,
};

export default IncrementButton;
