import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Index = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Navigate to="/stories"></Navigate>;
	} else {
		return <Navigate to="/login"></Navigate>;
	}
};

Index.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Index);
