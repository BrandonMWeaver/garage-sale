import React from 'react';

import { User } from '../components/User';

import '../styles/UsersContainer.css';

export const UsersContainer = props => {
	return (
		<div className="users-container">
			{props.users.map(user => <User key={user.id} user={user} />)}
		</div>
	);
}
