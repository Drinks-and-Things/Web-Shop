import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './Service.module.scss';

export default function Service(props) {
	const {
		as: Component = 'a',
		icon,
		bg = '#000',
		href,
		tooltip,
		target = '_blank',
		position = 'left',
		children,
		className,
		...rest
	} = props;
	return (
		<Component
			style={{
				backgroundColor: bg,
			}}
			href={href}
			target={target}
			className={`${className} ${s.service} ${s[position]}`}
			data-tooltip={tooltip}
			{...rest}
		>
			<span className='sr-only sr-only-focusable'>{tooltip}</span>

			{children ? (
				children
			) : (
				// <a href=''>
				/* </a> */
				<FontAwesomeIcon icon={icon} />
			)}
		</Component>
	);
}
