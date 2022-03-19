import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profile';

const Profile = ({
	auth: { user },
	profile: { profile, loading },
	getProfile,
}) => {
	useEffect(() => {
		getProfile(user.id);
	}, []);
	return (
		!loading &&
		profile !== null && (
			<Fragment>
				<section className="container">
					<div className="row">
						<div className="col-2">
							<div className="circle">
								<p>{profile.username[0]}</p>
							</div>
							<div className="title text-center pt-2">{profile.username}</div>
							<div className="profile-bio">{profile.bio}</div>
						</div>
						<div className="p-1 col-4">
							<div className="title">Stories</div>
							<div className="stories">
								<a href={`/story/${profile.stories[0].id}`}>
									<div className="story bg-white p-2 m-2">
										<h1 className="story-title">{profile.stories[0].title}</h1>
										<div>
											<p>{profile.stories[0].description}</p>
										</div>
									</div>
								</a>
							</div>
							<div className="story bg-white p-2 m-2">
								<h1 className="story-title">The Quick Brown Fox</h1>
								<div>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Dignissimos placeat, dolorum ullam ipsam, sapiente suscipit
										dicta eius velit amet aspernatur asperiores modi quidem
										expedita fugit. Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Dignissimos placeat, dolorum ullam ipsam,
										sapiente suscipit dicta eius velit amet aspernatur
										asperiores modi quidem expedita fugit.
									</p>
								</div>
							</div>
						</div>
						<div className="p-1 col-4">
							<div className="title">Parts</div>
							<div className="story-part pt-2">
								<p>storyname</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
									posuere ante ut pretium lobortis. Proin convallis dolor massa,
									nec congue metus imperdiet vitae. Pellentesque ut sagittis
									ante, nec auctor magna. Nulla facilisi. Praesent ut ante in
									dolor fringilla vehicula. Mauris finibus nec tellus eu
									tincidunt. Ut id tincidunt magna, quis ornare mi. Nunc eget
									aliquam augue, quis mattis libero. Maecenas et aliquam leo.
									Phasellus tincidunt arcu id molestie vulputate. Ut facilisis
									ligula sit amet tellus lobortis blandit. Pellentesque et augue
									a lorem aliquet lobortis. Pellentesque ipsum ex, auctor et
									dignissim nec, semper id tortor.
								</p>
							</div>

							<div className="story-part pt-2">
								<p>storyname</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
									posuere ante ut pretium lobortis. Proin convallis dolor massa,
									nec congue metus imperdiet vitae. Pellentesque ut sagittis
									ante, nec auctor magna. Nulla facilisi. Praesent ut ante in
									dolor fringilla vehicula. Mauris finibus nec tellus eu
									tincidunt. Ut id tincidunt magna, quis ornare mi. Nunc eget
									aliquam augue, quis mattis libero. Maecenas et aliquam leo.
									Phasellus tincidunt arcu id molestie vulputate. Ut facilisis
									ligula sit amet tellus lobortis blandit. Pellentesque et augue
									a lorem aliquet lobortis. Pellentesque ipsum ex, auctor et
									dignissim nec, semper id tortor.
								</p>
							</div>

							<div className="story-part pt-2">
								<p>storyname</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
									posuere ante ut pretium lobortis. Proin convallis dolor massa,
									nec congue metus imperdiet vitae. Pellentesque ut sagittis
									ante, nec auctor magna. Nulla facilisi. Praesent ut ante in
									dolor fringilla vehicula. Mauris finibus nec tellus eu
									tincidunt. Ut id tincidunt magna, quis ornare mi. Nunc eget
									aliquam augue, quis mattis libero. Maecenas et aliquam leo.
									Phasellus tincidunt arcu id molestie vulputate. Ut facilisis
									ligula sit amet tellus lobortis blandit. Pellentesque et augue
									a lorem aliquet lobortis. Pellentesque ipsum ex, auctor et
									dignissim nec, semper id tortor.
								</p>
							</div>
						</div>
					</div>
				</section>
			</Fragment>
		)
	);
};

Profile.propTypes = {
	getProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getProfile })(Profile);