import React, { Component } from 'react'
import { connect } from 'react-redux'
import './SideBar.css'

export class SideBar extends Component {
	static defaultProps = {
		user: {}
	}

 render() {
   return (
   	<div className="sideContainer">
   		<img src={this.props.user.avatar_url} id="imglarge" alt={this.props.user.name} />
   		<h1>{this.props.user.name}</h1>
   		<h3>{this.props.user.login}</h3>
   		<p>{this.props.user.bio}</p>
   		<button className="fauxButton">Follow</button>
   	</div>
     
   )
 }
}

function mapStateToProps(state) {
	return {
		user: state.Reducer.user
	}
}

export default connect(mapStateToProps)(SideBar)