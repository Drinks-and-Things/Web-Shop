import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%'
		// transform: 'translate(-50%, -50%)',
	}
};

export default function OpeningHoursPopUp() {
	const [open, setOpen] = useState(false);
	const [transition, setTransition] = useState(true);

	async function saveAction() {
		sessionStorage.setItem('openingHours', false);
		setTransition(false);
		await new Promise((resolve) => setTimeout(resolve, 600));
		setOpen(false);
	}

	useEffect(() => {
		const hours = sessionStorage.getItem('openingHours')
			? sessionStorage.getItem('openingHours')
			: true;
		setOpen(hours);
	}, []);

	return (
		<>
			{open === true && (
				<Modal
					isOpen={transition}
					onRequestClose={() => {
						setOpen(false);
					}}
					closeTimeoutMS={500}
					style={customStyles}
					contentLabel='Optionen des Produktes'
				>
					<div className='text-center bold'>
						<h1 className='mb-3'> Lieferzeiten</h1>
						<div className='h2'>Mo-Do: 20:00-02:00</div>
						<div className='h2'>Fr und Sa: 20:00-04:00</div>
						<div className='h2'>So: 20:00-02:00</div>
					</div>

					<div className='text-center pt-3'>
						<Button onClick={saveAction}>Schließen</Button>
					</div>
				</Modal>
			)}
		</>
	);
}
