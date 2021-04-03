import React from 'react';

export default function Text({ children, className, ...props }) {
	return (
		<li className={`mb-2 text-muted ${className}`} {...props}>
			{children}
		</li>
	);
}
