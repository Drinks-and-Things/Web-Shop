import React, { useEffect, useState, useRef } from 'react';
// import { useInView } from 'react-intersection-observer';
import { Toaster } from 'react-hot-toast';
import Nav from '../Nav';
import Navbar from '../Navbar';
import CartPage from '@components/Cart/CartPage';
import { useOutsideClick } from '@utils/hooks';
import { useUser } from '@contexts/UserContext';
import { Footer } from '../Footer';
import { Chat } from '../Chat';
import { Sidebar } from '@components/Sidebar';
import s from './Layout.module.scss';
import OpeningHoursPopUp from '@components/OpeningHoursPopUp';

export default function Layout({ children, entertainment }) {
	const [accpted, setAccepted] = useUser();
	const [cartOpened, setCartOpened] = useState(false);
	const [sidebarOpened, setSidebarOpened] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	// const [footerRef, footerVisible] = useInView({});
	const sidebarRef = useRef(null);
	const cartRef = useRef(null);

	useOutsideClick(sidebarRef, () => {
		if (sidebarOpened === true) {
			setIsOpen(false);
			setSidebarOpened(false);
		}
	});

	useOutsideClick(cartRef, () => {
		if (cartOpened === true) {
			setIsOpen(false);
			setCartOpened(false);
		}
	});

	useEffect(() => {
		const plz = sessionStorage.getItem('plz') ? sessionStorage.getItem('plz') : null;
		if (plz !== null) setAccepted(true);
	}, []);

	useEffect(() => {
		document.body.classList.toggle('drawer-open', isOpen);
	}, [sidebarOpened]);

	useEffect(() => {
		document.body.classList.toggle('drawer-open', isOpen);
	}, [cartOpened]);

	const toggleCart = () => {
		setIsOpen(!isOpen);
		setCartOpened(!cartOpened);
	};

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
		setSidebarOpened(!sidebarOpened);
	};

	const mainClass = `${s.main} ${cartOpened === true ? s.right : ''} ${
		sidebarOpened === true ? s.left : ''
	}`;

	return (
		<>
			<CartPage ref={cartRef} opened={cartOpened} close={toggleCart} />
			<Sidebar ref={sidebarRef} opened={sidebarOpened} close={toggleSidebar}>
				<Nav
					toggleSidebar={toggleSidebar}
					entertainment={entertainment}
					dropdownId='mobile'
				/>
			</Sidebar>
			<Chat
				// footerVisible={footerVisible}
				className={`${s.fab} ${cartOpened === true ? s.moved : ''}`}
			/>
			<Toaster
				position='top-right'
				reverseOrder={false}
				toastOptions={{
					style: {
						// borderRadius: 0s,
						position: 'absolute',
						width: 'max-content',
						top: '50px',
						right: '0px',
						background: '#363636',
						color: '#fff',
						zIndex: 1,
					},
					role: 'status',
					duration: 2000,
				}}
			/>
			<div className={mainClass}>
				<Navbar toggleSidebar={toggleSidebar} toggleCart={toggleCart}>
					<Nav entertainment={entertainment} dropdownId='desktop' />
				</Navbar>

				<main>{children}</main>
				<Footer />
			</div>
			<OpeningHoursPopUp />
		</>
	);
}

/* <div ref={footerRef}>
					<Footer />
				</div> */

// import React, { useEffect, useState, useRef } from 'react';
// import { useUser } from '../contexts/UserContext';
// import Navbar from './Navbar';
// import { Footer } from './Footer';
// import { Chat } from './Chat';
// import { Drawer } from './Drawer';
// import AddressChecker from './AddressChecker';
// import { useElementOnScreen } from '@utils';
// import { useInView } from 'react-intersection-observer';
// import s from '../styles/Layout.module.scss';

// export default function Layout({ children }) {
// 	const [accpted, setAccepted] = useUser();
// 	const [cartOpened, setCartOpened] = useState(false);
// 	const [sidebarOpened, setSidebarOpened] = useState(false);
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [footerRef, footerVisible] = useInView({});

// 	useEffect(() => {
// 		const plz = sessionStorage.getItem('plz') ? sessionStorage.getItem('plz') : null;
// 		if (plz !== null) setAccepted(true);
// 	}, []);

// 	useEffect(() => {
// 		document.body.classList.toggle('overflow-hidden', isOpen);
// 	}, [cartOpened, sidebarOpened]);

// 	const toggleCart = () => {
// 		setIsOpen(!isOpen);
// 		setCartOpened(!cartOpened);
// 	};

// 	const toggleSidebar = () => {
// 		setIsOpen(!isOpen);
// 		setSidebarOpened(!sidebarOpened);
// 	};

// 	return (
// 		<>
// 			{accpted === false ? (
// 				<AddressChecker setAccepted={setAccepted} />
// 			) : (
// 				<>
// 					<Drawer
// 						toggleSidebar={toggleSidebar}
// 						toggleCart={toggleCart}
// 						sidebarOpened={sidebarOpened}
// 						cartOpened={cartOpened}
// 					/>
// 					<Chat
// 						footerVisible={footerVisible}
// 						className={`${s.fab} ${cartOpened === true ? s.moved : ''}`}
// 					/>
// 					<div
// 						className={`${s.main} ${cartOpened === true ? s.right : ''} ${
// 							sidebarOpened === true ? s.left : ''
// 						}`}
// 					>
// 						<Navbar toggleSidebar={toggleSidebar} toggleCart={toggleCart} />
// 						<main>{children}</main>
// 						<div ref={footerRef}>
// 							<Footer />
// 						</div>
// 					</div>
// 				</>
// 			)}
// 		</>
// 	);
// }
