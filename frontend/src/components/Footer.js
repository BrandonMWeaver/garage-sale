import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Footer.css';

export const Footer = () => {
	return (
		<footer>
			<NavLink to="/about">About</NavLink>
		</footer>
	);
}
