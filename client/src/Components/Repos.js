import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Repos.css'
import RepoBar from './RepoBar'

export class Repos extends Component {
	static defaultProps = {
		user: {},
		repos: []
	}

 render() {
   return (
		<div id="repoContainer">
			<nav id="repoNav">
				<a href="#">Overview</a>
				<a href="#">Repositories</a><span className="repoInfo">{this.props.user.public_repos}</span>
				<a href="#">Stars</a><span className="repoInfo">{this.props.user.public_gists}</span>
				<a href="#">Followers</a><span className="repoInfo">{this.props.repos.followers}</span>
				<a href="#">Following</a><span className="repoInfo">{this.props.repos.following}</span>
			</nav>
			<RepoBar />
			<div>
			{this.props.repos.map (repo => {
				return <div key={'repo' + repo.id}>
							<h3>{repo.name}</h3>
							<p>{repo.language}</p>
							<p>{repo.updated_at}</p>
						</div>
			})}
			</div>
     	</div>
   )
 }
}

function mapStateToProps(state) {
	return {
		repos: state.Reducer.data.repos
	}
}

export default connect(mapStateToProps)(Repos)