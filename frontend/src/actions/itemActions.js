export const getItems = resource => {
	return dispatch => {
		dispatch({ type: "LOADING" });
		fetch(`http://localhost:3000/${resource}`, {
			credentials: "include"
		})
		.then(response => response.json())
		.then(json => dispatch({ type: "GET_ITEMS", json }));
	}
}

export const postItem = item => {
	return dispatch => {
		const formData = new FormData();
		formData.append("name", item.name);
		if (item.image) {
			formData.append("image", item.image);
		}
		formData.append("description", item.description);
		formData.append("price", item.price);
		fetch("http://localhost:3000/items", {
			method: "POST",
			credentials: "include",
			body: formData
		})
		.then(response => response.json())
		.then(json => "errors" in json ? dispatch({ type: "SET_ITEM_ERRORS", json }) : dispatch({ type: "POST_ITEM", json }));
	}
}

export const sellItem = item => {
	return dispatch => {
		fetch(`http://localhost:3000/items/${item.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			credentials: "include"
		})
		.then(response => response.json())
		.then(json => dispatch({ type: "SELL_ITEM", json }))
	}
}
