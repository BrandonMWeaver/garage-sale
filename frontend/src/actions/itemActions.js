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
