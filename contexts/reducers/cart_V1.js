import {
	UPDATE_INITIAL_STATE,
	ADD_ITEM,
	CHECKOUT,
	DECREASE,
	INCREASE,
	CLEAR,
	REMOVE_ITEM,
	TOGGLE_DRAWER,
} from '../actions/cart';

export const sumItems = (lineItems) => {
	let itemCount = lineItems.reduce((total, product) => total + product.quantity, 0);
	let total = lineItems
		.reduce((total, product) => total + product.price * product.quantity, 0)
		.toFixed(2);
	return { itemCount, total };
};

export const CartReducer = (state, action) => {
	switch (action.type) {
		case TOGGLE_DRAWER:
			return {
				...state,
				drawerOpen: !state.drawerOpen,
			};
		case UPDATE_INITIAL_STATE:
			state.lineItems = action.payload;
			return {
				...state,
				...sumItems(state.lineItems),
				lineItems: [...state.lineItems],
			};
		case ADD_ITEM:
			if (!state.lineItems.find((item) => item.id === action.payload.product.id)) {
				state.lineItems.push({
					...action.payload.product,
					quantity: action.payload.amount,
				});
			}

			return {
				...state,
				...sumItems(state.lineItems),
				lineItems: [...state.lineItems],
			};
		case REMOVE_ITEM:
			return {
				...state,
				...sumItems(state.lineItems.filter((item) => item.id !== action.payload.id)),
				lineItems: [...state.lineItems.filter((item) => item.id !== action.payload.id)],
			};
		case INCREASE:
			state.lineItems[
				state.lineItems.findIndex((item) => item.id === action.payload.product.id)
			].quantity += action.payload.amount;
			return {
				...state,
				...sumItems(state.lineItems),
				lineItems: [...state.lineItems],
			};
		case DECREASE:
			state.lineItems[state.lineItems.findIndex((item) => item.id === action.payload.id)]
				.quantity--;
			return {
				...state,
				...sumItems(state.lineItems),
				lineItems: [...state.lineItems],
			};
		case CHECKOUT:
			return {
				lineItems: [],
				checkout: true,
				...sumItems([]),
			};
		case CLEAR:
			return {
				lineItems: [],
				...sumItems([]),
			};
		default:
			return state;
	}
};
