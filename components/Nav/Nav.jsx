import React, { forwardRef, useState } from 'react';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import { navItems } from './navitems';
import styles from './Nav.module.scss';
import Dropdown from './NavDD';
// import CustomMenu from '../Dropdown/CostumMenu';

const MyNav = ({ color = '#fff', width = '25px', toggleSidebar, entertainment, dropdownId }) => {
	return (
		<Nav as='ul' onSelect={toggleSidebar} className={`${styles.nav}`}>
			{navItems.map(({ type, href, icon: Icon, child, items }) =>
				type && type === 'Dropdown' ? (
					<Dropdown
						ids={dropdownId}
						key={child}
						items={items}
						title={child}
						icon={Icon}
					/>
				) : (
					<Nav.Item as='li' key={href}>
						<Link href={href} passHref>
							<Nav.Link>
								<Icon color={color} width={width} />
								{child}
							</Nav.Link>
						</Link>
					</Nav.Item>
				)
			)}
		</Nav>
	);
};
// <DD as={CutomNavItem}>
// 	<DD.Toggle as={CustomToggle}>Entertainment</DD.Toggle>
// 	<DD.Menu as={CustomMenu} renderOnMount={true}>
// 		{entertainment.map(({ href = '', child }) => {
// 			return (
// 				<DD.Item key={href} as='li'>
// 					<Link href={href} passHref>
// 						<Nav.Link>
// 							{/* <Component color={color} width={width} /> */}
// 							{child}
// 						</Nav.Link>
// 					</Link>
// 				</DD.Item>
// 			);
// 		})}
// 	</DD.Menu>
// </DD>
// {Array(15)
// 	.fill(15)
// 	.map((v, i) => {
// 		return (
// 				<NavLink>Red-Orange</NavLink>
// 		);
// 	})}

// <Nav.Item>{item}</Nav.Item>

// <Dropdown as={NavItem}>
// 	<Dropdown.Toggle as={NavLink}>Entertainment</Dropdown.Toggle>
// 	<Dropdown.Menu flip={false}>
// 		<Dropdown.Item as={NavLink}>
// 			<PlaystationIcon color={color} width={width} />{' '}
// 			Playstation
// 		</Dropdown.Item>
// 		<Dropdown.Item as={NavLink}>
// 			<ShishsaIcon color={color} width={width} /> Shisha
// 		</Dropdown.Item>
// 	</Dropdown.Menu>
// </Dropdown>
// <NavDropdown title='Entertainment' id='basic-nav-dropdown'>
// 	<Link href='/playstation' passHref>
// 		<NavDropdown.Item>
// 			<PlaystationIcon color={color} width={width} />{' '}
// 			Playstation
// 		</NavDropdown.Item>
// 	</Link>
// 	<Link href='/contact' passHref>
// 		<NavDropdown.Item>
// 			<ShishsaIcon color={color} width={width} /> Shisha
// 		</NavDropdown.Item>
// 	</Link>
// </NavDropdown>
export default MyNav;
