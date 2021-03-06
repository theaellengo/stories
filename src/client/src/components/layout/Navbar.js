import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
	const authLinks = (
		<ul className="nav-items">
			<li>{user && <Link to="/add">Add Story</Link>}</li>
			<li>
				<a onClick={logout}>Logout</a>
			</li>
			<li>{user && <Link to="/user">{user.username}</Link>}</li>
		</ul>
	);

	const guestLinks = (
		<ul className="nav-items">
			<li>
				<Link to="/login">Login</Link>
			</li>
			<li>
				<Link to="/register">Register</Link>
			</li>
		</ul>
	);

	return (
		<nav className="navbar bg-light">
			<h1>
				<Link to="/stories">
					<i className="fa-solid fa-pen-nib"></i> Stories
				</Link>
			</h1>
			{!loading && (
				<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
			)}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
