import React, { forwardRef } from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { agb, contact, impressum } from '@utils/lib/routes';

const el = [
	{
		href: contact,
		text: 'Kontakt',
	},
	{
		href: impressum,
		text: 'Impressum',
	},
	{
		href: agb,
		text: 'AGB',
	},
];

const Footer = forwardRef(({ onClick }, ref) => {
	return (
		<footer ref={ref} className={styles.footer}>
			{el.map(({ href, text }) => (
				<div key={href} className='mb-2 text-muted'>
					<Link href={href} prefetch={false}>
						<a className={styles.link} onClick={onClick}>
							{text}
						</a>
					</Link>
				</div>
			))}
		</footer>
	);
});
export default Footer;
