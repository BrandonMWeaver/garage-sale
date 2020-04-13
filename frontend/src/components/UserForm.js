import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authenticateUser, createUser } from '../actions/currentUserActions';

import '../styles/Form.css';

class UserForm extends Component {
	state = this.props.type === "Sign In" ? { username: '', password: '' } : { username: '', email: '', password: '' }

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		if (this.props.type === "Sign In") {
			this.props.authenticateUser({
				username: this.state.username,
				password: this.state.password
			});
			this.setState({
				username: '',
				password: ''
			});
		}
		else {
			this.props.createUser({
				username: this.state.username,
				email: this.state.email,
				password: this.state.password
			});
			this.setState({
				username: '',
				email: '',
				password: ''
			});
		}
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.handleChange} name="username" type="text" placeholder="username" value={this.state.username} />
				{this.props.type === "Sign In" ? null : <input onChange={this.handleChange} name="email" type="email" placeholder="email" value={this.state.email} />}
				<input onChange={this.handleChange} name="password" type="password" placeholder="password" value={this.state.password} />
				<input type="submit" value={this.props.type} />
				{this.props.currentUser && "errors" in this.props.currentUser ? this.props.currentUser.errors.map((error, index) => <p key={index}>{error}</p>) : null}
			</form>
		);
	}
}

export default connect(state => ({ currentUser: state.currentUser }), { authenticateUser, createUser })(UserForm);
