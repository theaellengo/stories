import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { getStory } from '../../actions/story';
import { addPart } from '../../actions/part';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert';

const Story = ({ getStory, addPart, story: { story, loading }, auth }) => {
	const { id } = useParams();

	const [formData, setFormData] = useState({ part: '' });
	const { part } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log('submit');
		try {
			//addPart(auth.user.id, { title, description });
		} catch (error) {
			setAlert(error, 'danger');
		}
	};

	useEffect(() => {
		getStory(id);
	}, [getStory]);

	return !loading && story == null ? (
		<Navigate to="/stories"></Navigate>
	) : (
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
					{auth.isAuthenticated && (
						<div className="part-form">
							<form className="form p-2 m-2" onSubmit={(e) => onSubmit(e)}>
								<div className="form-group">
									<textarea
										value={part}
										onChange={(e) => onChange(e)}
										type="text"
										placeholder="..."
										name="part"
										cols="30"
										rows="5"
									/>
								</div>
								<input
									type="submit"
									className="btn btn-primary"
									value="AddPart"
								/>
							</form>
						</div>
					)}
				</div>
			</Fragment>
		)
	);
};

Story.propTypes = {
	getStory: PropTypes.func.isRequired,
	addPart: PropTypes.func.isRequired,
	story: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	story: state.story,
	auth: state.auth,
});

export default connect(mapStateToProps, { getStory, addPart })(Story);
