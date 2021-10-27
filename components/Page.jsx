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
				position: 'relative',
			}}
			className='mb-5'
			{...props}
		>
			<img
				src='/halloween2.jpg'
				layout='fill'
				style={{
					width: '100%',
					height: '100vh',
					objectFit: 'cover',
					position: 'fixed',
				}}
			/>
			<Head
				title={metaTitle ? metaTitle : title}
				description={metaDescription}
				image={metaImage}
				alt={metaImageAlt}
				handle={asPath}
			/>
			{title && (
				<div className='d-flex justify-content-center pt-5'>
					<h2 className='text-center'>{title}</h2>
				</div>
			)}
			{children}
		</div>
	);
}
