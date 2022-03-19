import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert';
import { addStory } from '../../actions/story';

const StoryForm = ({ addStory, auth }) => {
	const [formData, setFormData] = useState({
		title: '',
		description: '',
	});

	const { title, description } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			addStory(auth.user.id, { title, description });
		} catch (error) {
			setAlert(error, 'danger');
		}
	};

	return (
		<section className="container">
			<div className="row">
				<div className="col-10">
					<div className="form-container p-2 m-2">
						<p className="title">Create New Story</p>
						<form className="form" onSubmit={(e) => onSubmit(e)}>
							<div className="form-group">
								<input
									value={title}
									onChange={(e) => onChange(e)}
									type="text"
									placeholder="Title"
									name="title"
									required
								/>
							</div>
							<div className="form-group">
								<textarea
									value={description}
									onChange={(e) => onChange(e)}
									type="text"
									placeholder="..."
									name="description"
									cols="30"
									rows="5"
								/>
							</div>
							<input
								type="submit"
								className="btn btn-primary"
								value="Add Story"
							/>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

StoryForm.propTypes = {
	addStory: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { addStory })(StoryForm);
