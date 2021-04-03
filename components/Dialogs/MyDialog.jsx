import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShareDialog.module.scss';
import { CloseIcon } from '../Icons';

export function Target({ children, media = '', href = '' }) {
	return (
		<a href={href} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>
			{children} <span className='ml-1'>{media}</span>
		</a>
	);
}

export function Targets({ children }) {
	return <div className={styles.targets}>{children}</div>;
}

export function Tilte() {
	return (
		<header className={styles.header}>
			<h3 className={styles.dialog__title}>Share this pen</h3>
			<button className={(styles.button, styles.close__button)}>
				<CloseIcon />
			</button>
		</header>
	);
}

export function Link({ link }) {
	return (
		<div className={styles.link}>
			<div className={styles.pen__url}>{link}</div>
			<button className={(styles.copy__link, styles.button)}>Copy Link</button>
		</div>
	);
}

export default function Dialog({ children, show }) {
	return (
		<div
			className={
				show === true ? `${styles.share__dialog} ${styles.is__open}` : styles.share__dialog
			}
		>
			{children}
		</div>
	);
}
