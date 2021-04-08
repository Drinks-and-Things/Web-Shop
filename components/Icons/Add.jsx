import React from 'react';

export default function Add({ height = '20px', width = '20px', color = '#fff' }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			enableBackground='new 0 0 32 32'
			viewBox='0 0 32 32'
			fill={color}
			width={width}
			height={height}
		>
			<path d='M2.4375,17.9375h11.625v11.625c0,1.06854,0.86896,1.9375,1.9375,1.9375s1.9375-0.86896,1.9375-1.9375v-11.625h11.625c1.06854,0,1.9375-0.86896,1.9375-1.9375s-0.86896-1.9375-1.9375-1.9375h-11.625V2.4375C17.9375,1.36896,17.06854,0.5,16,0.5s-1.9375,0.86896-1.9375,1.9375v11.625H2.4375C1.36896,14.0625,0.5,14.93146,0.5,16S1.36896,17.9375,2.4375,17.9375z' />
		</svg>
	);
}
