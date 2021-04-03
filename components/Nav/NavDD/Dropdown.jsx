import Link from 'next/link';
import React, { forwardRef } from 'react';
import { Nav, NavLink, Dropdown as DD, Collapse } from 'react-bootstrap';
import styles from '../Nav.module.scss';

const CutomNavItem = forwardRef(({ children, ...props }, ref) => {
	return (
		<Nav.Item {...props} as='li'>
			{children}
		</Nav.Item>
	);
});

const CustomToggle = React.forwardRef(({ children, onClick, className, id, ...props }, ref) => {
	return (
		<NavLink
			ref={ref}
			className='toggle'
			aria-controls={id}
			onTouchEnd={(e) => {
				// console.log('click');
				e.preventDefault();
				onClick(e);
			}}
			onMouseOver={(e) => {
				// console.log('mouse');
				e.preventDefault();
				onClick(e);
			}}
			{...props}
		>
			{children}
		</NavLink>
	);
});

const CustomMenu = React.forwardRef(
	(
		{ children, style, className, 'aria-labelledby': labeledBy, show, close, id, ...props },
		ref
	) => {
		return (
			<Collapse in={show}>
				<ul
					ref={ref}
					id={id}
					className={`${styles.menu}`}
					aria-labelledby={labeledBy}
					onMouseLeave={(e) => {
						e.preventDefault();
						show === true && close(e);
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
