export const authenticateUser = credentials => {
	return dispatch => {
		fetch("http://localhost:3000/sessions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(credentials)
		})
		.then(response => response.json())
		.then(json => dispatch({ type: "SET_CURRENT_USER", json }));
	}
}
