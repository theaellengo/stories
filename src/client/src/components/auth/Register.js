import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Register = () => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
		password2: '',
		bio: '',
	});

	const { username, password, password2, bio } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			console.log('passwords do not match');
		} else {
			const newUser = {
				username,
				password,
				bio,
			};

			try {
				const config = {
					headers: {
						'Content-Type': 'application/json',
					},
				};
				const body = JSON.stringify(newUser);
				const res = await axios.post('/register', body, config);
			} catch (err) {
				console.error(err.response.data);
			}
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

export default Register;
