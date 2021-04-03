import React, { useEffect } from 'react';
// import App from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import GoogleTagManager from '@components/GoogleTagManager';
import { CartContextProvider, OptionsProvider, UserProvider } from '../contexts';
import { Layout } from '../components/Layout';
import '../styles/default.scss';
// import OptionsDialog from '@components/OptionsDialog';

const MyApp = ({ Component, pageProps, paths, ...props }) => {
	const router = useRouter();

	// const [prompt, promptToInstall] = useAddToHomescreenPrompt();
	// const [isVisible, setVisibleState] = useState(false);

	// const hide = () => setVisibleState(false);

	useEffect(() => {
		const handleStart = () => {
			NProgress.start();
		};

		const handleComplete = () => {
			NProgress.done();
		};

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		};
	}, [router.events]);

	return (
		<GoogleTagManager>
			<UserProvider>
				<CartContextProvider>
					{/* <OptionsProvider>
					</OptionsProvider> */}
					<Credits />
					<Layout>
						{/* <OptionsDialog /> */}
						<Component {...pageProps} />
					</Layout>
				</CartContextProvider>
			</UserProvider>
		</GoogleTagManager>
	);
};

// MyApp.getInitialProps = async (appContext) => {
// 	const appProps = await App.getInitialProps(appContext);
// 	const paths = entertainmentItems;
// 	console.log(paths);

// 	return { ...appProps, paths };
// };

export default MyApp;

function Credits() {
	return (
		<div data-name='Credits' className='Credits d-none'>
			<div>
				Icons made by{' '}
				<a href='https://www.flaticon.com/authors/iconixar' title='iconixar'>
					iconixar
				</a>{' '}
				from{' '}
				<a href='https://www.flaticon.com/' title='Flaticon'>
					www.flaticon.com
				</a>
			</div>
			<div>
				Icons made by{' '}
				<a href='https://www.freepik.com' title='Freepik'>
					Freepik
				</a>{' '}
				from{' '}
				<a href='https://www.flaticon.com/' title='Flaticon'>
					www.flaticon.com
				</a>
			</div>
		</div>
	);
}

// import { PageTransition } from 'next-page-transitions';
// import Loader from '../components/Loader';

// <SWRConfig
// 	value={{
// 		refreshInterval: 5000,
// 		fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
// 	}}
// </SWRConfig>
// >

// <PageTransition
// 	timeout={TIMEOUT}
// 	classNames='page-transition'
// 	loadingComponent={<Loader />}
// 	loadingDelay={500}
// 	loadingTimeout={{
// 		enter: TIMEOUT,
// 		exit: 0,
// 	}}
// 	loadingClassNames='loading-indicator'
// >
// 	<Component {...pageProps} />
// </PageTransition>;
