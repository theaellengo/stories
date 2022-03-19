import { GET_STORIES, STORIES_ERROR } from '../actions/types';

const initialState = {
	stories: [],
	story: null,
	loading: true,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_STORIES:
			return {
				...state,
				stories: payload,
				loading: false,
			};
		case STORIES_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};
		default:
			return state;
	}
}
