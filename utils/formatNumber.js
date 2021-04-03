export const formatNumber = (number) => {
	return new Intl.NumberFormat('de-AT', { style: 'currency', currency: 'EUR' }).format(number);
};
