const initialState = {
	repos: {},
	user: {},
	data: []
}

export default function(state = initialState, action){
	switch(action.type){
		case 'GET_USER':
			return {...state, data: action.payload}

		case 'GET_REPOS':
			return {...state, repos: action.payload}

		default:
			return state
	}
} //data payload from actions used to change state