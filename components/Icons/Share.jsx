import React from 'react';

export default function Share({ width = '24px', height = '24px', ...props }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			widths={width}
			height={height}
			viewBox='0 0 24 24'
			fill='#fff'
			stroke='currentColor'
			strokeWidth='1'
			{...props}
		>
			<path
				color='#fff'
				d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z'
			/>
		</svg>
	);
}

// <svg
// 	xmlns='http://www.w3.org/2000/svg'
// 	width={width}
// 	viewBox='0 0 24 24'
// 	fill='none'
// 	stroke='currentColor'
// 	strokeWidth='2'
// 	strokeLinecap='round'
// 	strokeLinejoin='round'
// 	className='feather feather-share'
// >
// 	<path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8'></path>
// 	<polyline points='16 6 12 2 8 6'></polyline>
// 	<line x1='12' y1='2' x2='12' y2='15'></line>
// </svg>
