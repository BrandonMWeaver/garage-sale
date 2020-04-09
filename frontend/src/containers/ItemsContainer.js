import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Item from '../components/Item';
import { getItems } from '../actions/itemActions';

import '../styles/ItemsContainer.css';

class ItemsContainer extends Component {
	componentDidMount() {
		this.props.getItems();
	}

	render() {
		return (
			<div className="items-container">
				<Route exact path='/' render={() => this.props.items.map(item => <Item key={item.id} item={item} />)} />
			</div>
		);
	}
}

export default connect(state => state, { getItems })(ItemsContainer);
