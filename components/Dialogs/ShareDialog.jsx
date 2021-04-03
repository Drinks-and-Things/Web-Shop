import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Target, Targets } from './MyDialog';
import { socialMedia } from './media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';

function ShareDialog({ onHide, ...props }) {
	return (
		<Modal
			onHide={onHide}
			size='lg'
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
		</Modal>
	);
}

export default ShareDialog;
