import { UPDATE_INITIAL_STATE, ADD_ITEM, CLEAR, REMOVE_ITEM, UPDATE_ITEM } from '../actions/cart';

export const CartReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_INITIAL_STATE:
			return {
				...state,
				checkout: action.payload,
			};
		// case ADD_ITEM:

		// 	if (!state.checkout.lineItems.find((item) => item.id === action.payload.product.id)) {
		// 		state.checkout.lineItems.push({
		// 			...action.payload.product,
		// 			quantity: action.payload.amount,
		// 		});
		// 	}

		// 	return {
		// 		...state,
		// 		lineItems: [...state.lineItems],
		// 	};
		// case REMOVE_ITEM:
		// 	return {
		// 		...state,
		// 		lineItems: [...state.lineItems.filter((item) => item.id !== action.payload.id)],
		// 	};
		// case UPDATE_ITEM:
		// 	return {
		//         ...state.checkout,
		//         checkout: [],
		// 	};
		// case CLEAR:
		// 	const lineItems = [];
		// 	return {
		//         state.checkout.lineItems= [],
		// 		...state,
		// 	};
		default:
			return state;
	}
};
