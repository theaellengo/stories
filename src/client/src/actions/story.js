import axios from 'axios';
import { setAlert } from './alert';
import {
	GET_STORIES,
	STORIES_ERROR,
	GET_STORY,
	STORY_ERROR,
	ADD_STORY,
} from './types';

export const getStories = () => async (dispatch) => {
	try {
		const res = await axios.get('/stories');
		dispatch({ type: GET_STORIES, payload: res.data });
	} catch (err) {
		dispatch({
			type: STORIES_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

export const getStory = (story_id) => async (dispatch) => {
	try {
		const res = await axios.get(`/story/${story_id}`);
		dispatch({ type: GET_STORY, payload: res.data });
	} catch (err) {
		dispatch({
			type: STORY_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
		dispatch(setAlert('Error retreiving story.', 'danger'));
	}
};

export const addStory =
	(user_id, { title, description }) =>
	async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.token,
			},
		};
		const body = JSON.stringify({ title, description });
		try {
			const res = await axios.post(`/${user_id}/add`, body, config);
			dispatch(setAlert('The story was successfully added.', 'success'));
			dispatch({ type: ADD_STORY, payload: res.data });
		} catch (err) {
			dispatch({
				type: STORY_ERROR,
				payload: { msg: err.response.statusText, status: err.response.status },
			});
			dispatch(setAlert(err.response.statusText, 'danger'));
		}
	};
