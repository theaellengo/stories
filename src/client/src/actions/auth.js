import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from './types';

export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}
	try {
		const config = {
			headers: { Authorization: 'Bearer ' + localStorage.token },
		};
		const res = await axios.get(`/user`, config);
		dispatch({ type: USER_LOADED, payload: res.data });
	} catch (err) {
		dispatch({ type: AUTH_ERROR });
	}
};

export const register =
	({ username, password, bio }) =>
	async (dispatch) => {
		const config = {
			headers: { 'Content-Type': 'application/json' },
		};
		const body = JSON.stringify({ username, password, bio });
		try {
			await axios.post('/register', body, config);
			dispatch({ type: REGISTER_SUCCESS });
			dispatch(setAlert(`User successfully registered`, 'success'));
		} catch (err) {
			const error = err.response.data.message;
			if (error) dispatch(setAlert(error, 'danger'));
			dispatch({ type: REGISTER_FAIL });
		}
	};

export const login =
	({ username, password }) =>
	async (dispatch) => {
		const config = {
			headers: { 'Content-Type': 'application/json' },
		};
		const body = JSON.stringify({ username, password });
		try {
			const res = await axios.post('/login', body, config);
			dispatch({ type: LOGIN_SUCCESS, payload: res.data });
			dispatch(loadUser());
			dispatch(setAlert(`User successfully logged in.`, 'success'));
		} catch (err) {
			const error = err.response.data.message;
			if (error) dispatch(setAlert(error, 'danger'));
			dispatch({ type: LOGIN_FAIL });
		}
	};

export const logout = () => async (dispatch) => {
	dispatch({ type: LOGOUT });
};
