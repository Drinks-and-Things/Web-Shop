const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
// 	enabled: process.env.ANALYZE === 'true',
// });

module.exports = withPWA({
	target: 'serverless',
	pwa: {
		disable: process.env.NODE_ENV === 'development',
		dest: 'public',
		runtimeCaching,
	},
	images: {
		domains: process.env.NODE_ENV === 'development' && [
			'cdn.shopify.com',
			'images.ctfassets.net',
		],
		https: true,
	},
	webpack: (config, { isServer }) => {
		// Fixes npm packages that depend on `fs` module
		if (!isServer) {
			config.node = {
				fs: 'empty',
			};
		}

		return config;
	},
	async headers() {
		return [
			{
				source: '/:all*(svg|jpg|png)',
				locale: false,
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=9999999999, must-revalidate',
					},
				],
			},
		];
	},
});
// module.exports = {
// 	target: 'serverless',
// 	images: {
// 		domains: ['cdn.shopify.com', 'images.ctfassets.net', 'i.giphy.com'],
// 		https: true,
// 	},
// 	webpack: (config, { isServer }) => {
// 		if (!isServer) {
// 			config.node = {
// 				fs: 'empty',
// 			};
// 		}

// 		return config;
// 	},
// };

// module.exports = withPWA({
// 	target: 'serverless',
// 	pwa: {
// 		disable: process.env.NODE_ENV === 'development',
// 		dest: 'public',
// 		runtimeCaching,
// 	},
// 	images: {
// 		domains: ['cdn.shopify.com', 'images.ctfassets.net', 'i.giphy.com'],
// 	},
// 	webpack: (config, { isServer }) => {
// 		// Fixes npm packages that depend on `fs` module
// 		if (!isServer) {
// 			config.node = {
// 				fs: 'empty',
// 			};
// 		}

// 		return config;
// 	},
// 	async headers() {
// 		return [
// 			{
// 				source: '/:all*(svg|jpg|png)',
// 				locale: false,
// 				headers: [
// 					{
// 						key: 'Cache-Control',
// 						value: 'public, max-age=9999999999, must-revalidate',
// 					},
// 				],
// 			},
// 		];
// 	},
// });

// module.exports = withBundleAnalyzer({
// 	target: 'serverless',
// 	images: {
// 		domains: ['cdn.shopify.com', 'images.ctfassets.net', 'i.giphy.com'],
// 	},
// 	webpack: (config, { isServer }) => {
// 		// Fixes npm packages that depend on `fs` module
// 		if (!isServer) {
// 			config.node = {
// 				fs: 'empty',
// 			};
// 		}

// 		return config;
// 	}
// });

//assetPrefix: isProd ? '' : '',
// sassOptions: {
// 	includePaths: [path.join(__dirname, 'styles'), 'node_modules', './node_modules'],
// },
