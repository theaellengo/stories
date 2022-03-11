import React from 'react';

const Register = () => {
	return (
		<section className="container">
			<div class="row">
				<div class="col-4">
					<form className="form-container bg-white p-2 m-2">
						<p className="title">Register</p>
						<input></input>
						<button>Submit</button>
					</form>
				</div>
				<div class="col-6 py-2">
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
