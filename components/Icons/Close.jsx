import React from 'react';

export default function Close({ width = '24px', color = 'red' }) {
	return (
		<svg
			viewBox='0 0 20 20'
			fill='none'
			color={color}
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			width={width}
			// className='feather feather-x-square'
		>
			{/* <rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect> */}
			<line x1='3' y1='3' x2='17' y2='17'></line>
			<line x1='17' y1='3' x2='3' y2='17'></line>
		</svg>
	);
}
