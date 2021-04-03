import React, { useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Target, Targets } from './MyDialog';
import { socialMedia } from './media';

function ShareDialog({ onHide, show, ...props }) {
	return (
		<MyModal
			show={show}
			onHide={onHide}
			aria-labelledby='contained-modal-title-vcenter'
			centered
			{...props}
		>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Targets>
					{socialMedia.map(({ name, href, icon: Icon, width }) => (
						<Target media={name} key={name} href={href}>
							<Icon width={width} />
						</Target>
					))}
				</Targets>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={onHide}>Schließen</Button>
			</Modal.Footer>
		</MyModal>
	);
}

export default ShareDialog;

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
