import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR } from './types';

export const getCurrentProfile = () => async (dispatch) => {
	try {
		const config = {
			headers: { Authorization: 'Bearer ' + localStorage.token },
		};
		const res = await axios.get('/user', config);
		dispatch({ type: GET_PROFILE, payload: res.data });
	} catch (err) {
		dispatch({
			type: PROFILE_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};
