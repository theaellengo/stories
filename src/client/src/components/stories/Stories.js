import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStories } from '../../actions/story';

const Stories = ({ getStories, story: stories, loading }) => {
	useEffect(() => {
		getStories();
	}, [getStories]);

	return (
		<section>
			<a href="/">
				<div className="story bg-white p-2 m-2">
					<h1 className="story-title">The Quick Brown Fox</h1>
					<div>
						<h4 className="story-owner">Username</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Dignissimos placeat, dolorum ullam ipsam, sapiente suscipit dicta
							eius velit amet aspernatur asperiores modi quidem expedita fugit.
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Dignissimos placeat, dolorum ullam ipsam, sapiente suscipit dicta
							eius velit amet aspernatur asperiores modi quidem expedita fugit.
						</p>
					</div>
				</div>
			</a>
		</section>
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
