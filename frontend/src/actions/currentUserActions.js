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

export const getCart = currentUser => {
	return dispatch => {
		fetch(`http://localhost:3000/items/${currentUser.id}/cart`, {
			credentials: "include"
		})
		.then(response => response.json())
		.then(json => dispatch({ type: "GET_CART", json }));
	}
}

export const removeItemFromCart = item => {
	return dispatch => {
		fetch(`http://localhost:3000/items/${item.id}/remove-item-from-cart`, {
			credentials: "include"
		})
		.then(response => response.json())
		.then(json => dispatch({ type: "GET_CART", json }));
	}
}

export const destroyItemsInCart = () => {
	return dispatch => {
		fetch("http://localhost:3000/items/destroy-items-in-cart", {
			credentials: "include"
		})
		.then(response => response.json())
		.then(json => dispatch({ type: "GET_CART", json }));
	}
}
