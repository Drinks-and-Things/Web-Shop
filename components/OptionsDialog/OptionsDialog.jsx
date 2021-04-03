import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';

export default function OptionsDialog({
	options = [],
	modalShow,
	setModalShow,
	setSelectedOptions,
	confirmAdd,
}) {
	const [tmpOptions, setTmpOptions] = useState({});

	useEffect(() => {
		const current = options.reduce((obj, { fields }) => {
			obj[fields.name] = fields.values[0];
			return obj;
		}, {});

		setTmpOptions(current);
	}, []);

	function selectOption(name, option) {
		// console.log(`gewählter ${name}: ${option}`);
		setTmpOptions({ ...tmpOptions, [name]: option });
	}

	const confirmAttributes = async () => {
		const customAttributes = Object.entries(tmpOptions).map(([key, value]) => ({
			key,
			value,
		}));

		setSelectedOptions(customAttributes);
		console.log(customAttributes);
		setModalShow(false);
		await confirmAdd();
	};

	return (
		<MyModal
			show={modalShow}
			onHide={() => {
				confirmAttributes();
			}}
			centered
		>
			<Container className='p-4'>
				{options && options.length > 0
					? options.map(({ fields }, i) => (
							<Row
								key={fields.name}
								className={
									'd-flex justify-content-center' + (i !== 0 ? 'mt-3' : '')
								}
							>
								<p className='h3 font-weight-bold align-items-center d-flex justify-content-center'>
									{fields.name}
								</p>
								<div
									role='listbox'
									className='d-flex justify-content-center flex-wrap'
								>
									{fields.values.map((option) => (
										<Button
											key={option}
											variant='outline-primary'
											role='option'
											className={
												tmpOptions[fields.name] === option && 'active'
											}
											style={{
												margin: '.25em',
											}}
											onClick={() => selectOption(fields.name, option)}
										>
											{option}
										</Button>
									))}
								</div>
							</Row>
					  ))
					: null}
				<Row className='pt-2 justify-content-center'>
					<Button onClick={confirmAttributes}>Bestätigen</Button>
				</Row>
			</Container>
		</MyModal>
	);
}

import { useOutsideClick } from '@utils/hooks';
const NOOP = () => {};
function MyModal({ show = false, onHide = NOOP, children }) {
	const ref = useRef(null);

	useOutsideClick(ref, () => {
		if (show === true) {
			onHide();
		}
	});

	return (
		<>
			{show === true && (
				<>
					<div className={`fade show modal-backdrop`}></div>
					<div
						role='dialog'
						aria-modal='true'
						tabIndex='-1'
						style={{
							display: 'block',
						}}
						className={`fade modal show`} //${show === true && 'show'}
					>
						<div className='modal-dialog modal-dialog-centered' ref={ref}>
							<div className='modal-content'>{children}</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}
