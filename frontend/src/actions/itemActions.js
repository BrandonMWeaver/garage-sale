export const getItems = () => {
	return dispatch => {
		dispatch({ type: "LOADING" });
		fetch("http://localhost:3000/items")
		.then(response => response.json())
		.then(json => dispatch({ type: "GET_ITEMS", json }));
	}
}
