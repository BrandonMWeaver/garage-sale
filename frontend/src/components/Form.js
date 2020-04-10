import React, { Component } from 'react';

import '../styles/Form.css';

class Form extends Component {
	render() {
		return (
			<form>
				<input type="text" placeholder="username" />
				<input type="password" placeholder="password" />
				<input type="submit" value={this.props.type} />
			</form>
		);
	}
}

export default Form;
