import axios from 'axios';
import { setAlert } from './alert';
import { ADD_PART, PART_ERROR } from './types';

export const addPart =
	(user_id, story_id, { description }) =>
	async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.token,
			},
		};
		const body = JSON.stringify({ description });
		try {
			const res = await axios.post(`/${story_id}/${user_id}/add`, body, config);
			dispatch({ type: ADD_PART, payload: res.data });
			dispatch(
				setAlert('The part was successfully added to the story.', 'success')
			);
		} catch (err) {
			dispatch({
				type: PART_ERROR,
				payload: { msg: err.response.statusText, status: err.response.status },
			});
			dispatch(setAlert(err.response.statusText, 'danger'));
		}
	};
