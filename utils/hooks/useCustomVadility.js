import { useEffect } from 'react';

export default function useCustomValidity(ref, validationMessage = '') {
	useEffect(() => {
		if (ref.current) ref.current.setCustomValidity(validationMessage);
	}, [ref, validationMessage]);
}
