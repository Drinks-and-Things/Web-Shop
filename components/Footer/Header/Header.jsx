import React from 'react';

export default function Header({ children, className, ...props }) {
	return (
		<h5 className={`text-uppercase font-weight-bold mb-4 ${className}`} {...props}>
			{children}
		</h5>
	);
}
