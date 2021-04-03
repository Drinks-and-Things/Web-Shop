import React, { forwardRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Navbar } from 'react-bootstrap';
import { XIcon } from '../Icons';
import Footer from './Footer';
import styles from './Sidebar.module.scss';

const Sidebar = forwardRef(({ children, opened, close, ...props }, ref) => {
	return (
		<aside
			ref={ref}
			tabIndex={opened === true ? '-1' : ''}
			className={`${styles.sidebar} ${opened === true ? styles.opened : styles.closed}`}
			{...props}
		>
			<nav role='navigation'>
				<header className={`mb-4 ${styles.header}`}>
					<Navbar.Brand className='mr-0'>
						<Link href='/'>
							<a onClick={close}>
								<Logo />
							</a>
						</Link>
					</Navbar.Brand>
					<div className='d-flex align-items-end flex-column'>
						<Button onClick={close} className=''>
							<XIcon />
						</Button>
					</div>
				</header>
				<div className={styles.nav}>{children}</div>
			</nav>
			<Footer onClick={close} />
		</aside>
	);
});

export default Sidebar;

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
					minWidth: '125px',
					minHeight: '125px',
					maxWidth: '125px',
					maxHeight: '125px',
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
