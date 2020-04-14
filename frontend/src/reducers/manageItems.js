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
					user: object.user
				}
			});
		case "POST_ITEM":
			return [...state, action.json];
		default:
			return state;
	}
}
