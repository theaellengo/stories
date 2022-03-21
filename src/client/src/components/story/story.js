import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getStory } from '../../actions/story';
import PropTypes from 'prop-types';

const Story = ({ getStory, story: { story, loading } }) => {
	const { id } = useParams();

	useEffect(() => {
		getStory(id);
	}, [getStory]);

	return (
		!loading && (
			<Fragment>
				<div className="container">
					<h1 className="large">{story.title}</h1>
					<div className="story p-2 m-2">
						<a href={`/profile/${story.user_id}`}>
							<p>{story.user_username}</p>
						</a>
						<p>{story.description}</p>
					</div>
					<div className="parts">
						{story.parts.map((part) => (
							<div className="part px-2 m-2">
								<a href={`/profile/${part.user_id}`}>
									<p>{part.user_username}</p>
								</a>
								<p>{part.part}</p>
							</div>
						))}
					</div>
				</div>
			</Fragment>
		)
	);
};

Story.propTypes = {
	getStory: PropTypes.func.isRequired,
	story: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	story: state.story,
});

export default connect(mapStateToProps, { getStory })(Story);
