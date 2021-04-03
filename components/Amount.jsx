import React from 'react';
import { IncrementButton, DecrementButton } from './Buttons';

function Amount({ product, setAmount, amount, style, ...props }) {
	return (
		<div className='float-left' style={{ display: 'inline-flex', width: '70%' }}>
			<DecrementButton setAmount={setAmount} amount={amount} />
			<span className='prod__amount'>{amount}</span>
			<IncrementButton setAmount={setAmount} amount={amount} />
		</div>
	);
}

export default Amount;
