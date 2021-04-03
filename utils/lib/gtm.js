export const pageview = (url) => {
	window &&
		window.dataLayer &&
		window.dataLayer.push({
			event: 'pageview',
			page: url,
		});
};
