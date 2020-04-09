import React, { Component } from 'react';

import '../styles/Item.css'

class Item extends Component {
	render() {
		return (
			<div className="item">
				<h3>{this.props.item.name}</h3>
			</div>
		);
	}
}

export default Item;
