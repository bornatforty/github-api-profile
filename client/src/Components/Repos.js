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
				return <div key={'repo' + repo.id} className="repoStuff">
							<div className="eachRepo">
								<p className="repoName">{repo.name}</p>
								<p className="repoCaption">{repo.description}</p>
								<p className="repoCaption">{repo.language}</p>
							</div>
						</div>
			})}
			</div>
     	</div>
   )
 }
}

function mapStateToProps(state) {
	return {
		repos: state.Reducer.repos
	}
}

export default connect(mapStateToProps)(Repos)