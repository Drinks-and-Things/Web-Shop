import React, { useRef, useState, useEffect } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import Image from 'next/image';
import styles from './AddressChecker.module.scss';

export default function AddressChecker({ setAccepted }) {
	const selectRef = useRef(null);
	const [value, setValue] = useState('');
	const [validationMessage, setValidationMessage] = useState('Bitte eine PLZ wählen');

	const handleValue = (e) => {
		e.preventDefault();
		setValue(e.target.value);
	};

	const checkAddress = (e) => {
		e.preventDefault();
		const select = selectRef.current;
		if (select.validity.valueMissing) {
			select.setCustomValidity(validationMessage);
			select.reportValidity();
		} else {
			setAccepted(true);
			if (sessionStorage) {
				sessionStorage.setItem('plz', value);
			}
		}
	};

	return (
		<div className={`bg-primary ${styles.bg}`}>
			<div className={styles.landingImage}>
				<Image
					role='presentation'
					alt='Picture of Vienna'
					src='/vienna.jpg'
					sizes={90}
					// width={1920}
					// height={510}
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					quality={100}
				/>
			</div>
			<div className={styles.form}>
				{/* <Logo width={200} height={200} className='mb-3' /> */}
				<Form className='d-flex justify-content-center'>
					<Form.Row
						style={{
							width: '75%',
							justifyContent: 'center',
						}}
					>
						<Col>
							<div style={{ minWidth: '150px' }}>
								<Form.Control
									style={{ minWidth: '100px' }}
									as='select'
									id='plz'
									value={value}
									ref={selectRef}
									onChange={handleValue}
									custom
									required
								>
									<option value=''>PLZ wählen...</option>
									<option value='1120'>1120</option>
									<option value='1160'>1160</option>
									<option value='1100'>1100</option>
									<option value='none' disabled>
										Wir sind bald auch bei Ihnen
									</option>
								</Form.Control>
							</div>
						</Col>
						<Button className={styles.button} onClick={checkAddress}>
							Submit
						</Button>
					</Form.Row>
				</Form>
			</div>
		</div>
	);
}
