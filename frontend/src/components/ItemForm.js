import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postItem } from '../actions/itemActions';

import '../styles/Form.css';

class ItemForm extends Component {
	state = {
		name: '',
		image: null,
		description: '',
		price: ''
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleFileChange = event => {
		if (event.target.files[0]) {
			this.setState({
				image: event.target.files[0]
			});
		}
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.postItem(this.state);
		this.setState({
			name: '',
			image: null,
			description: '',
			price: ''
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.handleChange} type="text" name="name" placeholder="name" value={this.state.name} />
				<label htmlFor="image">choose image</label>
				<input onChange={this.handleFileChange} type="file" name="image" id="image" accept="image/png, image/jpeg" />
				<textarea onChange={this.handleChange} name="description" placeholder="description" value={this.state.description} />
				<input onChange={this.handleChange} type="number" name="price" placeholder="price" value={this.state.price} />
				<input type="submit" value="Post Item" />
			</form>
		);
	}
}

export default connect(null, { postItem })(ItemForm);
