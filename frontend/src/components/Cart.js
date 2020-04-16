import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCart, removeItemFromCart } from '../actions/currentUserActions';

import '../styles/Cart.css';

class Cart extends Component {
	componentDidMount() {
		this.props.getCart(this.props.currentUser)
	}

	render() {
		return (
			<div className="cart">
				<h3>{`${this.props.currentUser.username}'s Cart:`}</h3>
				{this.props.items.map(item => {
					return (
						<div key={item.id}>
							<p>{item.name}</p>
							<p className="button" onClick={() => this.props.removeItemFromCart(item)}>x</p>
							<p>${item.price}</p>
						</div>
					);
				})}
				<h3>{`Total: $${this.props.items.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2)}`}</h3>
			</div>
		);
	}
}

export default connect(state => ({ currentUser: state.currentUser, items: state.manageItems.cart }), { getCart, removeItemFromCart })(Cart);
