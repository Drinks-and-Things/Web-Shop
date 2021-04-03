import React, { useState } from 'react';
import { ShareDialog } from '../Dialogs';
import { ShareIcon } from '../Icons';
import styles from './Share.module.scss';

const Share = () => {
	const [modalShow, setModalShow] = useState(false);

	const handleOnClick = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: `Drinks and Things | drinksundthings.at`,
					text: `Schau dir Drinks and Things auf drinksundthings.at an`,
					url: 'drinksundthings.at',
				});
				console.log('Successfully shared');
			} catch (error) {
				console.error(error);
			}
		} else {
			setModalShow(true);
		}
	};

	return (
		<>
			<button
				className={(styles.button, styles.share__button)}
				type='button'
				title='Teile unsere Seite'
				onClick={handleOnClick}
			>
				<ShareIcon width='24' />
				<span>Share</span>
			</button>
			<ShareDialog show={modalShow} onHide={() => setModalShow(false)} />
		</>
	);
};

export default Share;

// {
// 					title: `${postTitle} | ${siteTitle}`,
// 					text: `Check out ${postTitle} on ${siteTitle}`,
// 					url: document.location.href,
// 				}
