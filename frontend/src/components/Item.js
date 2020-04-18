import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { sellItem } from '../actions/itemActions';

import '../styles/Item.css'

const Item = props => {
	return (
		<div className="item">
			<h3>{props.item.name}</h3>
			<NavLink to={`/users/${props.item.user.username.replace(/\s/g, '-').toLowerCase()}`}>{props.item.user.username}</NavLink>
			{props.item.imagePath ? <a href={props.item.imagePath} target="_blank" rel="noopener noreferrer"><img src={props.item.imagePath} alt={props.item.imagePath} /></a> : null}
			<pre>{props.item.description}</pre>
			<p>{props.item.user.email}</p>
			{props.currentUser && "id" in props.currentUser ?
			props.item.user.id === props.currentUser.id ?
			<div className="owned-item">
				<p>You own this item</p>
			</div>
			:
			<button onClick={() => props.sellItem(props.item)} disabled={props.item.sold} style={{backgroundColor: props.item.sold ?
			props.item.buyerId === props.currentUser.id ?
			"#FFCD05" : "#690505"
			: "#053737"}}>
				{props.item.sold ?
				props.item.buyerId === props.currentUser.id ? "In Cart" : "Unavailable"
				:
				`$${parseFloat(props.item.price).toFixed(2)}`}
			</button>
			:
			null}
		</div>
	);
}

export default connect(state => ({ currentUser: state.currentUser, items: state.manageItems.items }), { sellItem })(Item);
