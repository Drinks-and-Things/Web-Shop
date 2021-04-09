import { useEffect, useState } from 'react';

export default function useIsStandalone(params) {
	const [isStandalone, setIsStandalone] = useState(false);

	useEffect(() => {
		setIsStandalone(checkIsStandalone());
	}, []);

	return isStandalone;
}

function checkIsStandalone() {
	return navigator.standalone || window.matchMedia('(display-mode: standalone)').matches
		? true
		: false;
}
