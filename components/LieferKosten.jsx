import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { XIcon } from './Icons';

export default function LieferKosten() {
	const [open, setOpen] = useState(false);

	async function saveAktion() {
		sessionStorage.setItem('openingSale', false);
		setOpen(false);
	}

	useEffect(() => {
		const sale = sessionStorage.getItem('openingSale')
			? sessionStorage.getItem('openingSale')
			: true;
		setOpen(sale);
	}, []);

	return (
		<>
			{open === true && (
				<div
					style={{
						backgroundColor: '#1a1a1a',
						color: '#fff',
						padding: '10px',
						display: 'flex',
						// flexDirection: 'row-reverse',
					}}
					className='slide-in'
				>
					<Container>
						<Row className='flex-row-reverse'>
							<Col sm={1} className='align-content-center align-self-center'>
								<button
									type='button'
									onClick={() => {
										saveAktion();
									}}
									className='float-right p-3'
								>
									<XIcon />
								</button>
							</Col>
							<Col sm={11}>
								<div>
									<h2 className='text-danger'>Aktion bis 1.6</h2>
									<div>Lieferkosten:</div>
									<div>
										<del className='text-danger'>20€</del> 10€: 1010, 1030,
										1040, 1050, 1060, 1100, 1110
									</div>
									<div>
										<del className='text-danger'>45€</del> 25€: Alle anderen
										Bezirke
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			)}
		</>
	);
}
