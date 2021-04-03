import React, { useRef } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Button } from 'react-bootstrap';

export default function DescriptionDialog({ description, modalShow, setModalShow }) {
	return (
		<MyModal
			show={modalShow}
			onHide={() => {
				setModalShow(false);
			}}
			centered
		>
			<div className='p-4'>
				{documentToReactComponents(description)}
				<div className='d-flex pt-2 justify-content-center'>
					<Button
						onClick={() => {
							setModalShow(false);
						}}
					>
						Schließen
					</Button>
				</div>
			</div>
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
