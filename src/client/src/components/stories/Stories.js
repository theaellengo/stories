import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStories } from '../../actions/story';
import StoryItem from './StoryItem';
import story from '../../reducers/story';

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
					<a href="/">
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
					</a>
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
