import React from 'react';

const Profile = () => {
	return (
		<section className="container">
			<div className="row">
				<div className="col-2">
					<div className="circle">
						<p>t</p>
					</div>
					<div className="title text-center pt-2">Username</div>
					<div className="profile-bio">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</div>
				<div className="p-3 col-8">
					<ul className="profile-choices">
						<li>
							<button className="btn btn-light">
								<div className="title">Stories</div>
							</button>
						</li>
						<li>
							<button className="btn btn-light">
								<div className="title">Parts</div>
							</button>
						</li>
					</ul>

					<div className="stories">
						<div className="story bg-white p-2 m-2">
							<h1 className="story-title">The Quick Brown Fox</h1>
							<div>
								<h4 className="story-owner">Username</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Dignissimos placeat, dolorum ullam ipsam, sapiente suscipit
									dicta eius velit amet aspernatur asperiores modi quidem
									expedita fugit. Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Dignissimos placeat, dolorum ullam ipsam,
									sapiente suscipit dicta eius velit amet aspernatur asperiores
									modi quidem expedita fugit.
								</p>
							</div>
						</div>
						<div className="story bg-white p-2 m-2">
							<h1 className="story-title">The Quick Brown Fox</h1>
							<div>
								<h4 className="story-owner">Username</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Dignissimos placeat, dolorum ullam ipsam, sapiente suscipit
									dicta eius velit amet aspernatur asperiores modi quidem
									expedita fugit. Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Dignissimos placeat, dolorum ullam ipsam,
									sapiente suscipit dicta eius velit amet aspernatur asperiores
									modi quidem expedita fugit.
								</p>
							</div>
						</div>

						<div className="story-part px-2 m-2">
							<p>username</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
								posuere ante ut pretium lobortis. Proin convallis dolor massa,
								nec congue metus imperdiet vitae. Pellentesque ut sagittis ante,
								nec auctor magna. Nulla facilisi. Praesent ut ante in dolor
								fringilla vehicula. Mauris finibus nec tellus eu tincidunt. Ut
								id tincidunt magna, quis ornare mi. Nunc eget aliquam augue,
								quis mattis libero. Maecenas et aliquam leo. Phasellus tincidunt
								arcu id molestie vulputate. Ut facilisis ligula sit amet tellus
								lobortis blandit. Pellentesque et augue a lorem aliquet
								lobortis. Pellentesque ipsum ex, auctor et dignissim nec, semper
								id tortor.
							</p>
						</div>

						<div className="story-part px-2 m-2">
							<p>username</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
								posuere ante ut pretium lobortis. Proin convallis dolor massa,
								nec congue metus imperdiet vitae. Pellentesque ut sagittis ante,
								nec auctor magna. Nulla facilisi. Praesent ut ante in dolor
								fringilla vehicula. Mauris finibus nec tellus eu tincidunt. Ut
								id tincidunt magna, quis ornare mi. Nunc eget aliquam augue,
								quis mattis libero. Maecenas et aliquam leo. Phasellus tincidunt
								arcu id molestie vulputate. Ut facilisis ligula sit amet tellus
								lobortis blandit. Pellentesque et augue a lorem aliquet
								lobortis. Pellentesque ipsum ex, auctor et dignissim nec, semper
								id tortor.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
