import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import story from '../../reducers/story';

const StoryItem = ({
	story: { id, title, description, user_username, user_id },
}) => {
	return (
		story !== null && (
			<a href={`/story/${id}`}>
				<div className="story bg-white p-2 m-2">
					<h1 className="story-title">{title}</h1>
					<div>
						<a href={`/profile/${user_id}`}>
							<h4 className="story-owner">{user_username}</h4>
						</a>
						<p>{description}</p>
					</div>
				</div>
			</a>
		)
	);
};

StoryItem.propTypes = {
	story: PropTypes.object.isRequired,
};

export default connect(null, {})(StoryItem);
