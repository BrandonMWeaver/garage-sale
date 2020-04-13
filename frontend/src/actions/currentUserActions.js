export const createUser = user => {
	return dispatch => {
		fetch("http://localhost:3000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			credentials: "include",
			body: JSON.stringify(user)
		})
		.then(response => response.json())
		.then(json => dispatch({ type: "SET_CURRENT_USER", json }));
	}
}

export const authenticateUser = credentials => {
	return dispatch => {
		fetch("http://localhost:3000/sign-in", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			credentials: "include",
			body: JSON.stringify(credentials)
		})
		.then(response => response.json())
		.then(json => dispatch({ type: "SET_CURRENT_USER", json }));
	}
}

export const destroyCurrentUser = () => {
	return dispatch => {
		fetch("http://localhost:3000/sign-out", {
			credentials: "include"
		})
		.then(response => response.json())
		.then(json => dispatch({ type: "DESTROY_CURRENT_USER", json }));
	}
}

export const getCurrentUser = () => {
	return dispatch => {
		fetch("http://localhost:3000/current-user", {
			credentials: "include"
		})
		.then(response => response.json())
		.then(json => dispatch({ type: "SET_CURRENT_USER", json }));
	}
}
