import React from 'react';
import Head from 'next/head';

export default function MyHead({
	title = 'Drinks & Things',
	description = 'Drinks & Things deine Online Bar für jede Party und Feier.Usere einzige Maßnahme, DICH zufrieden zu stellen 👊',
	image = 'https://cdn.shopify.com/s/files/1/0558/2739/8864/files/Logo256.jpg?v=1617393741',
	alt = 'Drinks & Things Logo',
	handle = '',
	children,
}) {
	const siteUrl = 'drinksundthings.at';

	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={description} />
			<link rel='canonical' href={siteUrl} />

			{/* Open Graph */}
			<meta property='og:locale' content='de_DE' />
			<meta property='og:type' content='website' />
			<meta property='og:url' content={`${siteUrl}${handle}`} />
			<meta property='og:title' content={`${title}`} key='ogtitle' />
			<meta property='og:description' content={description} key='ogdesc' />
			<meta property='og:image' content={image} key='ogimage' />
			<meta property='og:site_name' content='Drinks & Things' />

			{/* Twitter */}
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={image} />
			<meta name='twitter:image:alt' content={alt} />

			{/* Viewport */}
			<meta
				name='viewport'
				content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
			/>
			{children}
		</Head>
	);
}

/* <meta charSet='utf-8' />
<meta property='og:locale' content='de' />
<meta name='application-name' content={APP_NAME} />
<meta name='keywords' content='online bar' />
<meta name='apple-mobile-web-app-capable' content='yes' />
<meta name='apple-mobile-web-app-status-bar-style' content='default' />
<meta name='apple-mobile-web-app-title' content={APP_NAME} />
<meta name='format-detection' content='telephone=no' />
<meta name='mobile-web-app-capable' content='yes' />
<meta name='theme-color' content='#000' />

{/* PWA 
}*/
/* <link rel='manifest' href='/manifest.json' /> */

/* <AppleSplashScreen /> */

/* Icons for Tabs and shortcuts */
/* <Icons /> */
