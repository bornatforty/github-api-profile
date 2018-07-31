import axios from 'axios'
import store from '../Services/Store'

export function getUser(userName) {
	axios.get('https://api.github.com/users/' + userName).then(resp =>{
		console.log(resp.data)
		const user = resp.data
	axios.get('https://api.github.com/users/' + userName +'/repos').then(resp2 =>{
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