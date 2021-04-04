import { ShareDialog } from '@components/Dialogs';
import { ShareIcon } from '@components/Icons';
import { faComment, faShareAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useOutsideClick } from '@utils/hooks';
import React, { useRef, useState } from 'react';
import s from './Chat.module.scss';
import Service from './Service';
import { services } from './services';

export default function Chat({ className, footerVisible, ...rest }) {
	const ref = useRef(null);
	const [servicesOpened, setServicesOpened] = useState(false);
	const [modalShow, setModalShow] = useState(false);

	async function Share() {
		if (navigator.share) {
			try {
				await navigator.share({
					title: `Drinks and Things | drinksundthings.at`,
					text: `Check out Drinks and Things on drinksundthings.at`,
					url: 'drinksundthings.at',
				});
				console.log('Successfully shared');
			} catch (error) {
				console.error(error);
			}
		} else {
			setModalShow(true);
		}
	}

	useOutsideClick(ref, () => {
		setServicesOpened(false);
	});

	return (
		<>
			<div ref={ref} className={`${s.sy__whatshelp} ${className}`} {...rest}>
				<div className={`${s.services} ${servicesOpened === true ? s.active : ''}`}>
					<Service
						key='Teilen'
						as='a'
						target='_self'
						className={`${s.sywh__services} ${
							servicesOpened === true ? s.fadeIn : s.fadeOut
						}`}
						tooltip='Teilen'
						icon={faShareAlt}
						onClick={() => Share()}
					>
						<ShareIcon className={s.share} width='30px' height='30px' />
					</Service>
					{services.map((service) => (
						<Service
							key={service.tooltip}
							as='a'
							target='_self'
							href={service.link}
							className={`${s.sywh__services} ${
								footerVisible ? 'bg-light text-primary' : ''
							} ${servicesOpened === true ? s.fadeIn : s.fadeOut}`}
							bg={service.bg}
							icon={service.icon}
							tooltip={service.tooltip}
						/>
					))}
				</div>
				<Service
					as='button'
					bg='#000'
					className={`${s.sywh__open__services} ${
						footerVisible ? 'bg-light text-primary' : ''
					} ${!servicesOpened ? '' : s.opened}`}
					position='left'
					tooltip='Jetzt kontaktieren'
					onClick={() => setServicesOpened(!servicesOpened)}
				>
					{servicesOpened === true ? (
						<FontAwesomeIcon icon={faTimes} />
					) : (
						<FontAwesomeIcon icon={faComment} />
					)}
				</Service>
			</div>
			<ShareDialog show={modalShow} onHide={() => setModalShow(false)} />
		</>
	);
}
