import axios from 'axios'
import store from '../Services/Store'

export function getUser() {
	axios.get('https://api.github.com/users/scabbalicious').then(resp => {
		const user = resp.data
		console.log(resp.data)
		axios.get('https://api.github.com/users/scabbalicious/repos').then(resp2 => {
			const repos = resp2.data
			console.log(resp2.data)

			store.dispatch({
				type: "GET_USER",
				payload: {
					user: user,
					repos: repos
				}
			})
		})
	})
}