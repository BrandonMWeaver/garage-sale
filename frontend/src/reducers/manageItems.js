export const manageItems = (state = [], action) => {
	switch (action.type) {
		case "GET_ITEMS":
			return action.json.map(object => {
				return {
					id: object.id,
					name: object.name,
					imagePath: object.image_path,
					description: object.description,
					price: object.price,
					sold: object.sold,
					user: object.user
				}
			});
		case "POST_ITEM":
			return [...state, action.json];
		case "SELL_ITEM":
			const item = {
				id: action.json.id,
				name: action.json.name,
				imagePath: action.json.image_path,
				description: action.json.description,
				price: action.json.price,
				sold: action.json.sold,
				user: action.json.user
			}
			const index = state.findIndex(i => i.id === item.id);
			return [...state.slice(0, index), item, ...state.slice(index + 1)];
		default:
			return state;
	}
}
