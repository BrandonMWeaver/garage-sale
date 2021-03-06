export const getUsers = () => {
	return dispatch => {
		dispatch({ type: "LOADING" });
		fetch("http://localhost:3000/users", {
			credentials: "include"
		})
		.then(response => response.json())
		.then(json => dispatch({ type: "GET_USERS", json }));
	}
}
