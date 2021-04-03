import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { Cart } from '../Cart';
import {
	PlaystationIcon,
	HomeIcon,
	SnacksIcon,
	SpecialIcon,
	HomeminimalIcon,
	PackageIcon,
} from '../Icons';
import Image from 'next/image';
import styles from './MyNavbarLight.module.scss';

const MyNavbar = (props) => {
	const [open, setOpen] = useState(false);

	return (
		<header className={styles.header}>
			<Navbar
				collapseOnSelect
				className='p-3'
				sticky='top'
				expand='lg'
				bg='light'
				variant='light'
			>
				<Navbar.Toggle aria-controls='basic-navbar-nav'>
					<span className='navbar-toggler-icon'></span>
				</Navbar.Toggle>
				<div className='d-flex order-lg-1 ml-auto pr-2'>
					<Cart open={open} toggle={() => setOpen(!open)} />
				</div>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Navbar.Collapse className='nav navbar-left'>
						<Nav.Item>
							<Link href='/' passHref>
								<a>
									<HomeminimalIcon width='20px' /> Store
								</a>
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link href='/playstation' passHref>
								<a>
									<PlaystationIcon width='20px' /> Playstation
								</a>
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link href='/packages' passHref>
								<a>
									<PackageIcon width='20px' /> Packages
								</a>
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link href='/contact' passHref>
								<a>
									<SnacksIcon width='20px' /> Snacks
								</a>
							</Link>
						</Nav.Item>
					</Navbar.Collapse>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default MyNavbar;
