// import React, { useRef } from 'react';
import React from 'react';
import Modal from 'react-modal';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Button } from 'react-bootstrap';

Modal.defaultStyles.overlay.backgroundColor = 'rgba(1, 1, 1, 0.5)';
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
	},
};

Modal.setAppElement('#__next');

export default function DescriptionDialog({ description, modalShow, setModalShow }) {
	return (
		<Modal
			isOpen={modalShow}
			closeTimeoutMS={500}
			style={customStyles}
			contentLabel='Beschreibung des Produktes'
			onRequestClose={() => {
				setModalShow(false);
			}}
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
		</Modal>
	);
}

{
	/* <Modal
show={modalShow}
onHide={() => {
	setModalShow(false);
}}
centered
> */
}

// import { useOutsideClick } from '@utils/hooks';

// const NOOP = () => {};
// function MyModal({ show = false, onHide = NOOP, children }) {
// 	const ref = useRef(null);

// 	useOutsideClick(ref, () => {
// 		if (show === true) {
// 			onHide();
// 		}
// 	});

// 	return (
// 		<>
// 			{show === true && (
// 				<>
// 					<div className={`fade show modal-backdrop`}></div>
// 					<div
// 						role='dialog'
// 						aria-modal='true'
// 						tabIndex='-1'
// 						style={{
// 							display: 'block',
// 						}}
// 						className={`fade modal show`} //${show === true && 'show'}
// 					>
// 						<div className='modal-dialog modal-dialog-centered' ref={ref}>
// 							<div className='modal-content'>{children}</div>
// 						</div>
// 					</div>
// 				</>
// 			)}
// 		</>
// 	);
// }
