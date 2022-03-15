import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

export const register =
	({ username, password, bio }) =>
	async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const body = JSON.stringify({ username, password, bio });

		try {
			const res = await axios.post('/register', body, config);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
			dispatch(setAlert(`User successfully registered`, 'success'));
		} catch (err) {
			const error = err.response.data.message;
			if (error) {
				dispatch(setAlert(error, 'danger'));
			}
			dispatch({
				type: REGISTER_FAIL,
			});
		}
	};
