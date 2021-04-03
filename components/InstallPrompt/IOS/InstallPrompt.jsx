import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function InstallPrompt({ ...props }) {
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		setModalOpen(true);
	}, []);

	return (
		<Modal show={modalOpen} centered>
			<div className='align-content-center p-4'>
				<div style={{ marginTop: '-50px' }} className='text-center'>
					<img
						src='https://cdn.shopify.com/s/files/1/0558/2739/8864/files/95x95.png?v=1617407618'
						className='rounded'
						height='72'
						width='72'
						alt='Install PWA'
						loading='lazy'
						decoding='async'
					/>
				</div>
				<div className='mt-3 text-center'>
					<h3>Installiere Jetzt Drinks and Things!</h3>
				</div>
				<p className='h5 text-muted text-center mt-0'>
					Installiere diese WebApp auf deinem Home-Bildschirm für ein besseres Erlebnis.
				</p>
				<div className='text-center pt-2'>
					<p>
						Drücke
						<img
							src='https://cdn.shopify.com/s/files/1/0558/2739/8864/files/AppleShare.png?v=1617414188'
							style={{ margin: 'auto 4px 8px' }}
							className='inline-block'
							alt='Add to homescreen'
							height='20'
							width='20'
							loading='lazy'
							decoding='async'
						/>
						und dann &quot;Zum Home-Bildschirm{' '}
						<img
							src='https://cdn.shopify.com/s/files/1/0558/2739/8864/files/QuickActions_Add.png?v=1617414289'
							style={{ margin: '0 4px 4px' }}
							className='inline-block'
							alt='Add to homescreen'
							height='10'
							width='10'
							loading='lazy'
							decoding='async'
						/>
						&quot;
					</p>
				</div>
				<div className='text-center'>
					<Button onClick={() => setModalOpen(false)}>Schließen</Button>
				</div>
			</div>
		</Modal>
	);
}
