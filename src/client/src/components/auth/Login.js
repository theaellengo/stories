import React from 'react';

const Login = () => {
	return (
		<section className="container">
			<div className="row">
				<div className="col-4">
					<div className="form-container p-2 m-2">
						<p className="title">Login</p>
						<form className="form">
							<div className="form-group">
								<input
									type="text"
									placeholder="Usename"
									name="username"
									required
								/>
							</div>
							<div className="form-group">
								<input
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

export default Login;
