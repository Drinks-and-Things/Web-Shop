import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { XIcon } from '../Icons';

function Vacation() {
	const [open, setOpen] = useState(false);

	async function save() {
		sessionStorage.setItem('vacation', false);
		setOpen(false);
	}

	useEffect(() => {
		const sale = sessionStorage.getItem('vacation') ? sessionStorage.getItem('vacation') : true;
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
							<Col
								xs={2}
								sm={1}
								className='align-content-center align-self-center p-0'
							>
								<button
									type='button'
									onClick={() => {
										save();
									}}
									className='float-right p-3'
									aria-label='Urlaubsinfo schließen'
								>
									<XIcon />
								</button>
							</Col>
							<Col xs={10} sm={11} className='p-0 pt-1 '>
								<style jsx>{`
									div {
										display: flex;
										height: 100%;
										width: 100%;
										justify-content: center;
										align-items: center;
									}
								`}</style>
								<div>
									Unser Lieferservice in Wien ist vom 22.7 bis 15.8 nicht
									verfügbar
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			)}
		</>
	);
}

export default Vacation;
