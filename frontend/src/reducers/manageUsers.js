export const manageUsers = (state = [], action) => {
	switch (action.type) {
		case "GET_USERS":
			return action.json.map(object => {
				return {
					id: object.id,
					username: object.username
				}
			});
		default:
			return state;
	}
}
