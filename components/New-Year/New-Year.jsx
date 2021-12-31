import React, { createRef, useEffect } from 'react';
import init from './animation';

export default function NewYear({ bg }) {
	const ref = createRef();

	useEffect(() => {
		const destroy = init(ref.current);

		return () => {
			destroy();
		};
	}, []);

	return (
		<canvas
			ref={ref}
			style={{
				margin: 0,
				overflow: 'hidden',
				position: 'absolute',
				zIndex: 10
			}}
		></canvas>
	);
}
