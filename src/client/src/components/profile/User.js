import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profile';

const User = ({
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
							<div className="title">Stories {profile.stories.length}</div>
							<div className="stories">
								{profile.stories.map((story) => (
									<a href={`/story/${story.id}`}>
										<div className="story bg-white p-2 m-2">
											<h1 className="story-title">{story.title}</h1>
											<div>
												<p>{story.description}</p>
											</div>
										</div>
									</a>
								))}
							</div>
						</div>
						<div className="p-1 col-4">
							<div className="title">Parts {profile.parts.length}</div>
							{profile.parts.map((part) =>
								part.story_id === null ? (
									<Fragment>
										<div className="story-part-deleted pt-2">
											<p>{part.part}</p>
										</div>
									</Fragment>
								) : (
									<Fragment>
										<a href={`/story/${part.story_id}`}>
											<div className="story-part pt-2">
												<p>{part.part}</p>
											</div>
										</a>
									</Fragment>
								)
							)}
						</div>
					</div>
				</section>
			</Fragment>
		)
	);
};

User.propTypes = {
	getProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getProfile })(User);
