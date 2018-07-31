import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SideBar from './SideBar'
import Repos from './Repos'
import './Main.css'

export class Main extends Component {
 render() {
   return (
   	<div>
   		<SearchBar />
   		<div className="grandeContainer">
   			<SideBar />
   			<Repos />
  	 	</div>
     </div>
   )
 }
}

export default Main