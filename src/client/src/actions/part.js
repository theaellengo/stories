import axios from 'axios';
import { setAlert } from './alert';
import { ADD_PART, PART_ERROR } from './types';

export const addPart = (user_id, story_id, part) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.token,
		},
	};
	const body = JSON.stringify(part);
	try {
		const res = await axios.post(`${story_id}/${user_id}/add`, body, config);
		dispatch(
			setAlert('The part was successfully added to the story.', 'success')
		);
		dispatch({ type: ADD_PART, payload: res.data });
	} catch (err) {
		dispatch({
			type: PART_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
		dispatch(setAlert(err.response.statusText, 'danger'));
	}
};
