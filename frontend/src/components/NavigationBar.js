import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { destroyCurrentUser } from '../actions/currentUserActions';

import '../styles/NavigationBar.css';

const NavigationBar = props => {
	return (
		<div className="navigation-bar">
			<NavLink to='/' className="left">Home</NavLink>
			{props.currentUser && "id" in props.currentUser ?
			<>
			<NavLink to='/' onClick={props.destroyCurrentUser}>Sign Out</NavLink>
			<NavLink to="/post-item">Post Item</NavLink>
			<NavLink to="/cart" className="left">Cart</NavLink>
			</>
			:
			<>
			<NavLink to="/sign-in">Sign In</NavLink>
			<NavLink to="/create-account">Create Account</NavLink>
			</>
			}
			<NavLink to="/users">Users</NavLink>
		</div>
	);
}

export default connect(state => ({ currentUser: state.currentUser }), { destroyCurrentUser })(NavigationBar);
