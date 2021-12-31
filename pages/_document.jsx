/** @format */

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { AppleSplashScreen, GTM, Icons } from '../components/Meta-Links';
import { GTM_ID } from '@lib/const';

const APP_NAME = 'Drinks & Things';

export default class extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);

		const isProduction = process.env.NODE_ENV !== 'development';

		return { ...initialProps, isProduction };
	}

	render() {
		const { isProduction } = this.props;

		return (
			<Html lang='de' dir='ltr'>
				<Head>
					<meta charSet='utf-8' />
					<meta property='og:locale' content='de' />
					<meta name='application-name' content={APP_NAME} />
					<meta name='keywords' content='online bar' />
					<meta name='format-detection' content='telephone=no' />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta name='apple-mobile-web-app-status-bar-style' content='default' />
					<meta name='apple-mobile-web-app-title' content={APP_NAME} />
					<meta name='format-detection' content='telephone=no' />
					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='theme-color' content='#000' />

					{/* PWA */}
					<link rel='manifest' href='/manifest.json' />

					{/* Apple PWA Screens*/}
					<AppleSplashScreen />

					{/* Icons for Tabs and shortcuts */}
					<Icons />

					{/* Google Tag Manager */}
					{isProduction && <GTM />}

					{/* Global Site Tag (gtag.js) - Google Analytics */}
					{/* <GoogleAnalytics /> */}
				</Head>
				<body className='preload'>
					{/* <div class='snowflakes' aria-hidden='true'>
						<div className='snowflake'>❅</div>
						<div className='snowflake'>❆</div>
						<div className='snowflake'>❅</div>
						<div className='snowflake'>❆</div>
						<div className='snowflake'>❅</div>
						<div className='snowflake'>❆</div>
						<div className='snowflake'>❅</div>
						<div className='snowflake'>❆</div>
						<div className='snowflake'>❅</div>
						<div className='snowflake'>❆</div>
						<div className='snowflake'>❅</div>
						<div className='snowflake'>❆</div>
						<div className='snowflake'>❆</div>
						<div className='snowflake'>❅</div>
						<div className='snowflake'>❆</div>
					</div> */}
					{/* Google Tag Manager (noscript) */}
					{isProduction && (
						<noscript
							dangerouslySetInnerHTML={{
								__html: `
			<iframe
				src='https://www.googletagmanager.com/ns.html?id=${GTM_ID}'
				height='0'
				width='0'
				style='display:none;visibility:hidden'
			></iframe>
		`
							}}
						/>
					)}
					{/* End Google Tag Manager (noscript) */}
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
