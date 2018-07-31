const initialState = {
	repos: [],
	user: {}
}

export default function(state = initialState, action){
	switch(action.type){
		case 'GET_USER':
			return {...state, user: action.payload.user, repos: action.payload.repos}

		case 'GET_REPOS':
			return {...state, repos: action.payload}

		default:
			return state
	}
} //data payload from actions used to change state