import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStories } from '../../actions/story';
import StoryItem from './StoryItem';

const Stories = ({ getStories, story: { stories, loading } }) => {
	useEffect(() => {
		getStories();
	}, [getStories]);

	return (
		!loading && (
			<Fragment>
				<section className="container">
					<h1 className="large">
						<i className="fa-solid fa-book"></i> Stories
					</h1>
					<div className="stories">
						{stories.stories.map((story) => (
							<StoryItem key={story.id} story={story} />
						))}
					</div>
				</section>
			</Fragment>
		)
	);
};

Stories.propTypes = {
	getStories: PropTypes.func.isRequired,
	story: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	story: state.story,
});

export default connect(mapStateToProps, { getStories })(Stories);
