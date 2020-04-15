import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from '../components/Item';

import { getItems } from '../actions/itemActions';

import '../styles/ItemsContainer.css';

class ItemsContainer extends Component {
	componentDidMount() {
		this.props.getItems(this.props.resource);
	}

	render() {
		return (
			<div className="items-container">
				{this.props.items.map(item => {
					return <Item key={item.id} item={item} />
				})}
			</div>
		);
	}
}

export default connect(state => ({ items: state.items }), { getItems })(ItemsContainer);
