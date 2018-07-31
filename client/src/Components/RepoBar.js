import React, { Component } from 'react'
import './RepoBar.css'
import {connect} from 'react-redux'
import 'font-awesome/css/font-awesome.min.css'
import {getUser} from '../Actions/Actions'

export class RepoBar extends Component {
   static defaultProps = {
      searchValue: {},
      repos: {}
   }
   state = {
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
   	<div className="repoContainer">
   		<form onSubmit={this.handleSubmit}>
			<input onChange={this.searchValue} value={this.state.searchValue} type="text" className="repoSearch"/>
   		</form>
   				<div className="repoNav">
   					<button className="repoButton">Type: <span className="fauxStyle">All <i className="fa fa-caret-down"></i></span></button>
   					<button className="repoButton">Language: <span className="fauxStyle">All <i className="fa fa-caret-down"></i></span></button>
   					<button className="newButton"><i className="fa fa-book"></i>New</button>
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

export default connect(mapStateToProps)(RepoBar)