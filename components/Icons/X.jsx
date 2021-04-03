import React from 'react';

export default function X({ width = '24px' }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			stroke='#fff'
			viewBox='0 0 32 32'
			width={width}
		>
			<line strokeWidth='4' x1='2' x2='30' y1='2' y2='30' />
			<line strokeWidth='4' x1='2' x2='30' y1='30' y2='2' />
		</svg>
	);
}
