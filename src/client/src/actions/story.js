import axios from 'axios';
import { setAlert } from './alert';
import { GET_STORIES, STORIES_ERROR } from './types';

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
