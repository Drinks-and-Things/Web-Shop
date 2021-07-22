import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { XIcon } from '../Icons';

export default function Lieferkosten() {
	const [open, setOpen] = useState(false);

	async function saveAktion() {
		sessionStorage.setItem('openingSale', false);
		setOpen(false);
	}

	useEffect(() => {
		if (navigator.standalone) {
			return;
		}
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
						paddingTop: 0
						// flexDirection: 'row-reverse',
					}}
					className='slide-in'
				>
					<Container>
						<Row className='flex-row-reverse'>
							<Col sm={1} className='align-content-center align-self-center p-0'>
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
							<Col sm={11} className='p-0 pt-1'>
								<div>
									{/* <h2 className='text-danger'>Aktion bis 1.6.2021</h2> */}
									<div>Kostenlose Lieferung ab Mindestbestellwert:</div>
									<div>
										20€: 1010, 1030, 1040, 1050, 1060, 1100, 1110
										{/* <del className='text-danger'>20€</del> 10€: 1010, 1030,
										1040, 1050, 1060, 1100, 1110 */}
									</div>
									<div>
										45€: Alle anderen Bezirke
										{/* <del className='text-danger'>45€</del> 25€: Alle anderen
										Bezirke */}
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
