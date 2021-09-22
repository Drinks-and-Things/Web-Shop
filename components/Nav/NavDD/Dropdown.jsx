import Link from 'next/link';
import React, { forwardRef } from 'react';
import { Nav, NavLink, Dropdown as DD, Collapse } from 'react-bootstrap';
import { useDropdownToggle } from 'react-overlays/DropdownToggle';
import styles from '../Nav.module.scss';

const CutomNavItem = forwardRef(({ children, ...props }, ref) => {
	const [_, { toggle }] = useDropdownToggle();

	return (
		<Nav.Item
			{...props}
			as='li'
			onMouseLeave={(e) => {
				toggle(false, e);
			}}
		>
			{children}
		</Nav.Item>
	);
});

const CustomToggle = forwardRef(({ children, onClick, className, id, ...props }, ref) => {
	return (
		<NavLink
			ref={ref}
			className='toggle'
			aria-controls={id}
			onTouchEnd={(e) => {
				e.preventDefault();
				onClick(e);
			}}
			onMouseOver={(e) => {
				e.preventDefault();
				onClick(e);
			}}
			{...props}
		>
			{children}
		</NavLink>
	);
});

/** @type {React.ForwardRefExoticComponent<React.RefAttributes<HTMLUListElement>>} */
const CustomMenu = forwardRef(
	(
		/** @type {import('react-bootstrap').DropdownProps}*/
		{ children, 'aria-labelledby': labeledBy, show, id },
		ref
	) => {
		const [_, { toggle }] = useDropdownToggle();
		return (
			<Collapse in={show}>
				<ul
					ref={ref}
					id={id}
					className={`${styles.menu}`}
					aria-labelledby={labeledBy}
					onMouseLeave={(e) => {
						e.stopPropagation();
						try {
							toggle(false, e);
						} catch (error) {
							console.error(error);
						}
					}}
				>
					{children}
				</ul>
			</Collapse>
		);
	}
);

export default function Dropdown({ items, title, icon: Icon, ids }) {
	return (
		<DD as={CutomNavItem}>
			<DD.Toggle id={ids} as={CustomToggle}>
				{Icon && <Icon />}
				{title}
			</DD.Toggle>
			<DD.Menu id={ids} as={CustomMenu} renderOnMount={true}>
				{items.map(({ href, title }) => (
					<DD.Item key={href} as='li'>
						<Link href={href} passHref>
							<Nav.Link>{title}</Nav.Link>
						</Link>
					</DD.Item>
				))}
			</DD.Menu>
		</DD>
	);
}
