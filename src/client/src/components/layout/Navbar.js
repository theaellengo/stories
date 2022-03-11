import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar bg-light">
			<h1>
				<Link to="/stories">
					<i className="fa-solid fa-pen-nib"></i> Stories
				</Link>
			</h1>
			<ul className="nav-items">
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/register">Username</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
