import React, { Component } from 'react';

import '../styles/Item.css'
import { NavLink } from 'react-router-dom';

class Item extends Component {
	render() {
		return (
			<div className="item">
				<h3>{this.props.item.name}</h3>
				<h3>{this.props.item.price}</h3>
				<NavLink to={`/${this.props.item.user.username.replace(' ', '-').toLowerCase()}`}>{this.props.item.user.username}</NavLink>
				<a href={this.props.item.imagePath} target="_blank" rel="noopener noreferrer"><img src={this.props.item.imagePath} alt={this.props.item.imagePath} /></a>
				<pre>{this.props.item.description}</pre>
				<p>{this.props.item.user.email}</p>
			</div>
		);
	}
}

export default Item;
