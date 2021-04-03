export { formatNumber } from './formatNumber';
export { fetchFromShopify, fetchMultipleNodes, fetchNode } from './ServerShopify';
// export { default as useEventCallback } from './useEventCallback';

// export function checkStock(totalInventory, availableForSale) {
// 	let inventory, available;
// 	if (totalInventory === 0 && availableForSale === true) {
// 		inventory = undefined;
// 		available = true;
// 	} else if (totalInventory === 0 && availableForSale === false) {
// 		inventory = 1;
// 		available = false;
// 	} else if (totalInventory > 0) {
// 		inventory = totalInventory;
// 		available = true;
// 	}

// 	return { inventory, available };
// }
