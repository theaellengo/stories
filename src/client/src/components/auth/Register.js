import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const initialState = {
	username: '',
	password: '',
	password2: '',
	bio: '',
};

const Register = ({ setAlert }) => {
	const [formData, setFormData] = useState(initialState);

	const { username, password, password2, bio } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			setAlert('Passwords do not match.', 'danger');
			setFormData(initialState);
		} else {
			console.log('success');
		}
	};

	return (
		<section className="container">
			<div className="row">
				<div className="col-4">
					<div className="form-container p-2 m-2">
						<p className="title">Register</p>
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
									required
								/>
							</div>
							<div className="form-group">
								<input
									value={password2}
									onChange={(e) => onChange(e)}
									type="password"
									placeholder="Confirm Password"
									name="password2"
									minLength="6"
									required
								/>
							</div>
							<div className="form-group">
								<textarea
									value={bio}
									onChange={(e) => onChange(e)}
									type="text"
									placeholder="About you..."
									name="bio"
									cols="30"
									rows="5"
								/>
							</div>
							<input
								type="submit"
								className="btn btn-primary"
								value="Register"
							/>
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

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Register);
