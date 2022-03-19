import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR } from './types';

export const getProfile = (id) => async (dispatch) => {
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

export const getUser = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/user/${id}`);
		return res.data;
	} catch (err) {
		dispatch(setAlert('Cannot get user', 'danger'));
	}
};
