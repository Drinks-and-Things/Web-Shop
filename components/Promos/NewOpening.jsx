import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import styles from './NewOpening.module.scss';

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

export default function NewOpeningPopUp() {
	const [open, setOpen] = useState(false);
	const [transition, setTransition] = useState(true);
	const gebiete = [
		'Perchtoldsdorf',
		'Brunau',
		'Maria Enzersdorf',
		'Mödling',
		'Wr. Neudorf',
		'Gießhübel'
	];

	async function saveAction() {
		sessionStorage.setItem('newOpenening', false);
		setTransition(false);
		await new Promise((resolve) => setTimeout(resolve, 600));
		setOpen(false);
	}

	useEffect(() => {
		const hours = sessionStorage.getItem('newOpenening')
			? sessionStorage.getItem('newOpenening')
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
					contentLabel='Infos und Neueröffnung'
				>
					<div className={`text-center bold`}>
						<h1 className='mb-3'>Neueröffnung</h1>
						<section>
							<h2>Wir liefern jetzt auch in folgenden Gebieten: </h2>
							<ul className={styles.gebiete}>
								{gebiete.map((gebiet) => (
									<li className='h5'>{gebiet}</li>
								))}
							</ul>
						</section>
					</div>

					<div className='text-center pt-3'>
						<Button onClick={saveAction}>Schließen</Button>
					</div>
				</Modal>
			)}
		</>
	);
}
