import React, {Component} from 'react';
import './NavBar.css'
import {Link} from 'react-router-dom';

class NavBar extends Component {

	render() {
		return (
			<nav className="navbar navbar-dark " id='navbar1'>
				<ul className="navbar-nav col-md-2 col-md-1 mr-0">
					<li><Link to='/'>Athenomics</Link></li>
				</ul>
				<ul className="navbar-nav col-md-2 col-md-1 mr-1">
					<li><Link to='/OpenRequests'>Open Requests</Link></li>
				</ul>
				<ul className="navbar-nav col-md-2 col-md-1 mr-1">
					<li><Link to='/PendingRequests'>Pending Requests</Link></li>
				</ul>
				<ul className="navbar-nav col-md-2 col-md-1 mr-1">
					<li><Link to='/Register'>Register</Link></li>
				</ul>

        <ul className="navbar-nav px-2">
          <li className="nav-item text-nowrap d-none d-sm-nonee d-sm-block">
            <small className="text-black">{this.props.account}</small>
          </li>
        </ul>
			</nav> 
		)
	}
}

export default NavBar