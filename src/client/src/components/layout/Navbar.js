import React from 'react';

const Navbar = () => {
	return (
		<nav className="navbar bg-light">
			<h1>
				<a href="/stories">
					<i className="fa-solid fa-pen-nib"></i> Stories
				</a>
			</h1>
			<ul className="nav-items">
				<li>
					<a href="/logout">Logout</a>
				</li>
				<li>
					<a href="/stories">Username</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
