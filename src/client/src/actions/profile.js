import axios from 'axios';
import { CLEAR_PROFILE, GET_PROFILE, PROFILE_ERROR } from './types';

export const getProfile = (id) => async (dispatch) => {
	dispatch({ type: CLEAR_PROFILE });
	try {
		const res = await axios.get(`/user/${id}`);
		dispatch({ type: GET_PROFILE, payload: res.data });
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};
