import React, { createContext, useReducer, useEffect, useContext } from 'react';
import Client from 'shopify-buy';
import toast from 'react-hot-toast';
import { CartReducer, sumItems } from './reducers/cart_V1';
import { SHOPIFY_ACCESS_TOKEN, SHOPIFY_DOMAIN } from '@utils/lib/const';
import {
	UPDATE_INITIAL_STATE,
	ADD_ITEM,
	CHECKOUT,
	DECREASE,
	INCREASE,
	CLEAR,
	TOGGLE_DRAWER,
	REMOVE_ITEM,
} from './actions/cart_V1';

const client = Client.buildClient({
	domain: SHOPIFY_DOMAIN,
	storefrontAccessToken: SHOPIFY_ACCESS_TOKEN,
});

const storage = [];
const initialState = {
	// client,
	checkout: { lineItems: [] },
	lineItems: storage,
	...sumItems(storage),
	drawerOpen: false,
};

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(CartReducer, initialState);

	useEffect(async () => {
		// const checkoutID = localStorage.getItem('checkoutID')
		// 	? JSON.parse(localStorage.getItem('checkoutID'))
		// 	: null;

		// if (checkoutID && checkoutID !== null) {
		// 	try {
		// 		const checkout = await fetchCheckout(checkoutID);
		// 		if (!checkout.completedAt) {
		// 			updateInitialState(checkout);
		// 			return;
		// 		}
		// 	} catch (e) {
		// 		console.error(e);
		// 		localStorage.setItem('checkoutID', null);
		// 	}
		// }

		// const newCheckout = await createNewCheckout();
		// updateInitialState(newCheckout);

		const lineItems = localStorage.getItem('cart')
			? JSON.parse(localStorage.getItem('cart'))
			: [];

		updateInitialState(lineItems);
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'cart',
			JSON.stringify(state.lineItems.length > 0 ? [...state.lineItems] : [])
		);
	}, [state]);

	const toggleDrawer = () => {
		dispatch({
			type: TOGGLE_DRAWER,
		});
	};

	const updateInitialState = (payload) => {
		dispatch({
			type: UPDATE_INITIAL_STATE,
			payload,
		});
	};

	const addLineItem = (payload) => {
		dispatch({
			type: ADD_ITEM,
			payload,
		});
	};

	const increase = (payload) => {
		dispatch({
			type: INCREASE,
			payload,
		});
	};

	const removeProduct = (payload) => {
		dispatch({
			type: REMOVE_ITEM,
			payload,
		});
	};

	const decrease = (payload) => {
		dispatch({
			type: DECREASE,
			payload,
		});
	};

	const clearCart = () => {
		dispatch({
			type: CLEAR,
		});
	};

	const handleCheckout = () => {
		dispatch({
			type: CHECKOUT,
		});
	};

	const contextValues = {
		removeProduct,
		toggleDrawer,
		addLineItem,
		increase,
		decrease,
		clearCart,
		handleCheckout,
		...state,
	};

	return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>;
};

export function useCart() {
	return useContext(CartContext);
}

export default CartContextProvider;
