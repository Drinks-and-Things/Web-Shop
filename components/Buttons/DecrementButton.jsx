import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

function DecrementButton({ amount, setAmount, ...props }) {
	return (
		<>
			<Button
				disabled={amount === 1 ? true : false}
				size='sm'
				onClick={() => setAmount(amount - 1)}
				aria-label='Senkt die Menge eines Produkten'
				{...props}
			>
				<FontAwesomeIcon icon={faMinus} />
			</Button>
		</>
	);
}

DecrementButton.propTypes = {
	amount: PropTypes.number,
};

export default DecrementButton;
