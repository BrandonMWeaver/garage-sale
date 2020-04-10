export const manageCurrentUser = (state = null, action) => {
	switch (action.type) {
		case "SET_CURRENT_USER":
			console.log(action.json)
			return action.json;
		default:
			return state
	}
}
