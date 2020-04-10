import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/NavigationBar.css';

export const NavigationBar = () => {
	return (
		<div className="navigation-bar">
			<NavLink to='/'>Home</NavLink>
			<NavLink to="/sign-in">Sign In</NavLink>
			<NavLink to="/create-account">Create Account</NavLink>
		</div>
	);
}
