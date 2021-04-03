import React from 'react';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import { ProductCard } from '@components/Products';
import Page from '@components/Page';
import styles from './Homepage.module.scss';

const CTA = ['Usere einzige Maßnahme', 'DICH zufrieden zu stellen &#128074;'];

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1200 },
		items: 4,
	},
	laptops: {
		breakpoint: { max: 1200, min: 992 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 992, min: 575 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 575, min: 0 },
		items: 1,
		partialVisibilityGutter: 20,
	},
};

export default function Homepage({ products, bgImage: img, meta, cta = CTA, alt = '' }) {
	return (
		<Page
			metaTitle={meta?.title ? meta.title : 'Startseite'}
			metaDescription={meta?.description}
			metaImage={meta?.image?.fields?.file?.url}
			metaImageAlt={meta?.image?.fields?.title}
		>
			<section className={styles.landing__container}>
				<Image
					className={`${styles.landing__image}`}
					loading='eager'
					// src={img}
					src={`https:${img}`}
					alt={alt}
					layout='fill'
					objectFit='cover'
					objectPosition='center'
				/>
				<div className={styles.landing__container}>
					<div className={styles.cta__container}>
						{cta?.map((text, i) => (
							<h2
								key={i}
								className={`${styles.cta} puff-in-center`}
								dangerouslySetInnerHTML={{ __html: text }}
							></h2>
						))}
					</div>
				</div>
			</section>
			<section className={`${styles.container}`}>
				{/* <div>
					<div className='text-center mt-5'>
						<h2>Startseite</h2>
					</div>
				</div> */}
				{products && products.length > 0 && (
					<div className={styles.root}>
						<Carousel
							responsive={responsive}
							showDots={false}
							slidesToSlide={1}
							ssr={true}
							partialVisible={true}
							// removeArrowOnDeviceType={['mobile']}
							containerClass='container-with-dots'
							deviceType={''}
						>
							{products.map((product) => {
								return (
									<ProductCard
										key={product.shopifyId}
										product={product}
										className='m-2'
									/>
								);
							})}
						</Carousel>
					</div>
				)}
			</section>
		</Page>
	);
}
