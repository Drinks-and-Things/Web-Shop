import React from 'react';
import { useRouter } from 'next/router';
import Head from '@components/Head';

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
		<div className='mb-5' {...props}>
			<Head
				title={metaTitle ? metaTitle : title}
				description={metaDescription}
				image={metaImage}
				alt={metaImageAlt}
				handle={asPath}
			/>
			{title && (
				<div className='d-flex justify-content-center mt-5'>
					<h2 className='text-center'>{title}</h2>
				</div>
			)}
			{children}
		</div>
	);
}
