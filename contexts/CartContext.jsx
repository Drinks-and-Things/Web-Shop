import React, { createContext, useEffect, useContext, useState } from 'react';
import { buildClient } from 'shopify-buy';
import { SHOPIFY_ACCESS_TOKEN, SHOPIFY_DOMAIN } from '@utils/lib/const';

const client = buildClient({
	domain: SHOPIFY_DOMAIN,
	storefrontAccessToken: SHOPIFY_ACCESS_TOKEN
});

const initialState = {
	client,
	checkout: { lineItems: [] }
};

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [state, setState] = useState(initialState);
	const [checkoutID, setCheckoutID] = useState('');

	useEffect(async () => {
		const checkoutID = localStorage.getItem('checkoutID')
			? localStorage.getItem('checkoutID')
			: null;

		if (checkoutID && checkoutID !== null) {
			try {
				const checkout = await client.checkout.fetch(checkoutID);
				if (!checkout.completedAt) {
					localStorage.setItem('checkoutID', checkout.id);
					setCheckoutID(checkout.id);
					updateInitialState(checkout);
					return;
				}
			} catch (e) {
				console.error(e);
				localStorage.setItem('checkoutID', null);
			}
		}

		const newCheckout = await client.checkout.create();
		setCheckoutID(newCheckout.id);
		localStorage.setItem('checkoutID', newCheckout.id);
		updateInitialState(newCheckout);
	}, []);

	const updateInitialState = (payload) => {
		setState({
			...state,
			checkout: payload
		});
	};

	const addProductToCart = async (lineItem) => {
		const checkout = await client.checkout.addLineItems(checkoutID, [lineItem]);
		setState({
			...state,
			checkout
		});
	};

	const removeLineItem = async (lineItemID) => {
		const checkout = await client.checkout.removeLineItems(checkoutID, [lineItemID]);
		setState({
			...state,
			checkout
		});
	};

	const updateLineItem = async (lineItemID, quantity) => {
		const checkout = await client.checkout.updateLineItems(checkoutID, [
			{ id: lineItemID, quantity }
		]);
		setState({
			...state,
			checkout
		});
	};

	const clearCart = async () => {
		const checkout = await client.checkout.clearLineItems();
		setState({
			...state,
			checkout
		});
	};

	const contextValues = {
		addProductToCart,
		removeLineItem,
		updateLineItem,
		clearCart,
		...state
	};

	return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>;
};

export function useCart() {
	return useContext(CartContext);
}

export default CartContextProvider;
