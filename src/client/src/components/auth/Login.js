import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert';

const Login = ({ login, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const { username, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			login({ username, password });
		} catch (error) {
			setAlert(error, 'danger');
		}
		setFormData({ username: '', password: '' });
	};

	if (isAuthenticated) {
		return <Navigate to="/stories"></Navigate>;
	}

	return (
		<section className="container">
			<div className="row">
				<div className="col-4">
					<div className="form-container p-2 m-2">
						<p className="title">Login</p>
						<form className="form" onSubmit={(e) => onSubmit(e)}>
							<div className="form-group">
								<input
									value={username}
									onChange={(e) => onChange(e)}
									type="text"
									placeholder="Usename"
									name="username"
									required
								/>
							</div>
							<div className="form-group">
								<input
									value={password}
									onChange={(e) => onChange(e)}
									type="password"
									placeholder="Password"
									name="password"
									minLength="6"
								/>
							</div>
							<input type="submit" className="btn btn-primary" value="Login" />
						</form>
					</div>
				</div>
				<div className="col-6 p-2">
					<h1 className="large">Stories</h1>
					<p className="lead">
						Connect with the community through literature by <br />
						creating, sharing, and adding to each other’s stories.
					</p>
					<img className="py-3" src="images/man-reading-book.jpg" />
				</div>
			</div>
		</section>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
