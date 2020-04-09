import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Item from '../components/Item';

import '../styles/ItemsContainer.css';

class ItemsContainer extends Component {
	render() {
		return (
			<div className="items-container">
				<Route exact path='/' render={() => [1,2,3,4,5].map((n) => <Item key={n} item={{ name: "Example" }} />)} />
			</div>
		);
	}
}

export default ItemsContainer;
