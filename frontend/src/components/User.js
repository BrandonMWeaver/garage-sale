import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/User.css';

export const User = props => {
	return (
		<div className="user">
			<h3>{props.user.username}</h3>
			<NavLink to={`/${props.user.username.replace(/\s/g, '-').toLowerCase()}`}>{`View ${props.user.username}'s items`}</NavLink>
		</div>
	);
}
