/** @format */

import React from 'react';
import { useRouter } from 'next/router';
import Head from '@components/Head';
import Image from 'next/image';

export default function Page({
	metaTitle,
	metaDescription,
	metaImage,
	metaImageAlt,
	title,
	className,
	children,
	...props
}) {
	const { asPath } = useRouter();

	// console.log(asPath);
	return (
		<div
			style={{
				position: 'relative'
			}}
			// className='mb-5'
			{...props}
		>
			{/* <img
				src='/halloween2.jpg'
				style={{
					width: '100%',
					height: '100vh',
					objectFit: 'cover',
					position: 'sticky',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					WebkitBackfaceVisibility: 'hidden',
				}}
			/> */}
			<picture>
				<source srcset='xmas.webp' type='image/webp' />
				<img
					src='/xmas.jpg'
					alt='logo'
					style={{
						width: '100%',
						height: '100vh',
						objectFit: 'cover',
						position: 'sticky',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						WebkitBackfaceVisibility: 'hidden'
					}}
				/>
			</picture>
			{/* <img
				src='/halloween2.jpg'
				style={{
					width: '100%',
					height: '100vh',
					objectFit: 'cover',
					position: 'sticky',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					WebkitBackfaceVisibility: 'hidden',
				}}
			/> */}

			<Head
				title={metaTitle ? metaTitle : title}
				description={metaDescription}
				image={metaImage}
				alt={metaImageAlt}
				handle={asPath}
			/>
			<div
				style={{
					marginTop: '-100vh',
					paddingBottom: '3em'
				}}
			>
				{title && (
					<div className='d-flex justify-content-center pt-5'>
						<h2 className='text-center'>{title}</h2>
					</div>
				)}
				{children}
			</div>
		</div>
	);
}
