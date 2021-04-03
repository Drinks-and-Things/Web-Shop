import React from 'react';

export default function Email({ width, color = '#777' }) {
	return (
		<svg
			width={width}
			fill={color}
			viewBox='0 0 24 24'
			stroke='#fafafa'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='feather feather-mail'
		>
			<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
			<polyline points='22,6 12,13 2,6'></polyline>
		</svg>
	);
}
