import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
} from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	user: null,
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: true,
				user: payload,
			};
		case LOGIN_SUCCESS:
			localStorage.setItem('token', payload.access_token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
			};
		case AUTH_ERROR:
		case REGISTER_FAIL:
		case LOGIN_FAIL:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
			};
		case REGISTER_SUCCESS:
		default:
			return state;
	}
}
