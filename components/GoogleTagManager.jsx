import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtm from '@lib/gtm';

export default function GoogleTagManager({ children }) {
	const router = useRouter();

	useEffect(() => {
		router.events.on('routeChangeComplete', gtm.pageview);
		router.events.on('routeChangeError', gtm.pageview);

		return () => {
			router.events.off('routeChangeComplete', gtm.pageview);
			router.events.off('routeChangeError', gtm.pageview);
		};
	}, [router.events]);

	return children;
}
