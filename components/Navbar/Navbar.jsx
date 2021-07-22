import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar';
import { Cart } from '../Cart';
import { Vacation } from '@components/Promos';
import styles from './Navbar.module.scss';

const MyNavbar = ({ toggleSidebar, toggleCart, children }) => {
	return (
		<header className={styles.header}>
			<Vacation />
			<Navbar
				bg='primary'
				expand='xl'
				sticky='top'
				variant='dark'
				className={`${styles.navbar}`}
			>
				<Navbar.Toggle onClick={toggleSidebar} aria-controls='basic-navbar-nav'>
					<span className='navbar-toggler-icon'></span>
				</Navbar.Toggle>
				<Link href='/' passHref>
					<Navbar.Brand className='m-0'>
						<Logo />
					</Navbar.Brand>
				</Link>
				<div className='d-flex order-lg-1 ml-auto pr-1'>
					<Cart toggle={toggleCart} />
				</div>
				<div className='d-none d-xl-inline-flex justify-content-center'>{children}</div>
			</Navbar>
		</header>
	);
};

export default MyNavbar;

function Logo() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center'
			}}
		>
			<div
				style={{
					minWidth: '95px',
					minHeight: '95px',
					maxWidth: '95px',
					maxHeight: '95px'
				}}
			>
				<Image
					src='https://cdn.shopify.com/s/files/1/0558/2739/8864/files/125x125.png?v=1617407618'
					alt='Logo'
					loading='eager'
					quality={100}
					width={125}
					height={125}
					// className={styles.logo}
				/>
			</div>
		</div>
	);
}
