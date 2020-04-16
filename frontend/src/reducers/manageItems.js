export const manageItems = (state = { items: [], cart: [], errors: [] }, action) => {
	switch (action.type) {
		case "GET_ITEMS":
			return {...state, items: action.json.map(object => {
				return {
					id: object.id,
					buyerId: object.buyer_id,
					name: object.name,
					imagePath: object.image_path,
					description: object.description,
					price: object.price,
					sold: object.sold,
					user: object.user
				}
			})}
		case "GET_CART":
			return {...state, cart: action.json.map(object => {
				return {
					id: object.id,
					buyerId: object.buyer_id,
					name: object.name,
					imagePath: object.image_path,
					description: object.description,
					price: object.price,
					sold: object.sold,
					user: object.user
				}
			})}
		case "POST_ITEM":
			return {...state, errors: [], items: [...state.items, action.json]}
		case "SELL_ITEM":
			const item = {
				id: action.json.id,
				buyerId: action.json.buyer_id,
				name: action.json.name,
				imagePath: action.json.image_path,
				description: action.json.description,
				price: action.json.price,
				sold: action.json.sold,
				user: action.json.user
			}
			const index = state.items.findIndex(i => i.id === item.id);
			return {...state, items: [...state.items.slice(0, index), item, ...state.items.slice(index + 1)]}
		case "SET_ITEM_ERRORS":
			return {...state, errors: action.json.errors}
		default:
			return state;
	}
}
