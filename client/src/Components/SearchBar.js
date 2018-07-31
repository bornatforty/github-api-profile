import React, { Component } from 'react'
import './SearchBar.css'
import {connect} from 'react-redux'
import 'font-awesome/css/font-awesome.min.css'
import {getUser} from '../Actions/Actions'

export class SearchBar extends Component {
	static defaultProps = {
		searchValue: {},
		user: {}
	}
	state ={
		searchValue: ''
	}
	searchValue = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

handleSubmit = (e) => {
	e.preventDefault()
	getUser(this.state.searchValue)
	this.setState({
		searchValue: ''
	})
}

 render() {
   return (
   	<div className="searchContainer">
   		<span className="fa fa-github fa-2x"></span>
   		<form onSubmit={this.handleSubmit}>
			<input onChange={this.searchValue} name="searchValue" value={this.state.searchValue} type="text" className="searchInput" placeholder="Search or jump to..."/>
   		</form>
   			<a href="http://github.com/pulls">Pull Requests</a>
   			<a href="http://github.com/issues">Issues</a>
   			<a href="http://github.com/marketplace">Marketplace</a>
   			<a href="http://github.com/explore">Explore</a>
   				<div className="userNav">
   					<span className="fa fa-bell-o"></span>
   					<span className="fa fa-plus"></span>
   					<span className="fa fa-caret-down"></span>
   					<img src={this.props.user.avatar_url} id="imgsmall" alt={this.props.user.name} />
   				</div>
   	</div>
     
   )
 }
}

function mapStateToProps(state) {
	return {
		user: state.Reducer.data.user
	}
}

export default connect(mapStateToProps)(SearchBar)