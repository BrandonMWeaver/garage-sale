import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Item.css'

export const Item = props => {
	return (
		<div className="item">
			<h3>{props.item.name}</h3>
			<h3>{props.item.price}</h3>
			<NavLink to={`/${props.item.user.username.replace(/\s/g, '-').toLowerCase()}`}>{props.item.user.username}</NavLink>
			<a href={props.item.imagePath} target="_blank" rel="noopener noreferrer"><img src={props.item.imagePath} alt={props.item.imagePath} /></a>
			<pre>{props.item.description}</pre>
			<p>{props.item.user.email}</p>
		</div>
	);
}
