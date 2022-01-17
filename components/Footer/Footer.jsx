/** @format */

import React from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Header from './Header';
import Text from './Text';
import { Company, Copyright } from './Sections';
import { GithubIcon } from '@components/Icons';
import styles from './Footer.module.scss';

const Footer = ({ alt = 'Logo unseres Shops' }) => {
	return (
		<footer
			style={{
				position: 'relative',
			}}
		>
			<Image
				src='https://cdn.shopify.com/s/files/1/0558/2739/8864/files/5lF3pQpdquCBy.gif?v=1617418747'
				alt={'Ein sich bewegendes Grid'}
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				className={`${styles.bgImage} bg-primary`}
				unoptimized={true}
			/>

			<section className={`${styles.footer} bg-primary`}>
				<div className='w-100 ph3 pt-4 bg-black-80 position-relative'>
					<Container>
						<Row className='py-4'>
							<Col lg={4} md={4} className='mb-4 mb-lg-0'>
								<Logo width={150} height={150} />
								<Row className={styles.social}>
									<a
										rel='external'
										aria-label='Facebook'
										href='https://www.facebook.com/drinks.and.thingss'
									>
										<FontAwesomeIcon
											icon={faFacebook}
											size='3x'
										/>
										{/* <FacebookIcon width='24px' /> */}
									</a>
									<a
										rel='external'
										aria-label='Instagram'
										href='https://www.instagram.com/drinks.n.things_official'
									>
										<FontAwesomeIcon
											icon={faInstagram}
											size='3x'
										/>
									</a>
								</Row>
							</Col>
							<Col lg={4} md={6} className='mb-4 mb-lg-0'>
								<Company />
							</Col>
							<Col lg={4} md={6} className='mb-4 mb-lg-0'>
								<Header>Öffnungszeiten</Header>
								<ul
									className='list-unstyled mb-0'
									itemProp='openingHours'
								>
									<Text>Mo-Do: 18:00-02:00</Text>
									<Text>Fr und Sa: 18:00-04:00</Text>
									<Text>So: 16:00-02:00</Text>
								</ul>
							</Col>
						</Row>
						<Copyright />
					</Container>
				</div>
			</section>
			<div className={`${styles.credit} bg-primary p-2 text-center`}>
				<a
					className='text-muted'
					href='https://github.com/abdo643-HULK'
				>
					Konzept & Design by{' '}
					<span>
						<GithubIcon width='13px' />
					</span>{' '}
					Shehata
				</a>
			</div>
		</footer>
	);
};

function Logo() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					minWidth: '150px',
					minHeight: '150px',
					maxWidth: '150px',
					maxHeight: '150px',
				}}
			>
				<Image
					src='https://cdn.shopify.com/s/files/1/0558/2739/8864/files/194x194.png?v=1617444693'
					alt='Logo unseres Shops'
					unoptimized={true}
					quality={100}
					width={194}
					height={194}
					// className={styles.logo}
				/>
			</div>
		</div>
	);
}

export default Footer;

{
	/* <div className='col-lg-4 col-md-6 mb-lg-0'>
	<h6 className='text-uppercase font-weight-bold mb-4'>Newsletter</h6>
	<p className='text-muted mb-4'>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque
		temporibus.
	</p>
	<div className='p-1 rounded border'>
		<div className='input-group'>
			<input
				type='email'
				placeholder='Enter your email address'
				aria-describedby='button-addon1'
				className='form-control border-0 shadow-0'
			/>
			<div className='input-group-append'>
				<button
					id='button-addon1'
					type='submit'
					className='btn btn-link'
				>
					<i className='fa fa-paper-plane'></i>
				</button>
			</div>
		</div>
	</div>
</div> */
}
