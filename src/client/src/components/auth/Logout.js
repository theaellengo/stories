import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert';

const Logout = ({ logout, isAuthenticated }) => {
	if (isAuthenticated) {
		logout();
		setAlert('User successfully logged out', 'success');
	}
	return <Navigate to="/"></Navigate>;
};

Logout.propTypes = {
	logout: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Logout);
