import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {

	render() {
		return (
			<nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
				<ul className="navbar-brand col-sm-3 col-md-2 mr-0">
					<li><Link to='/'>Athenomics</Link></li>
				</ul>
				<ul className="navbar-open col-sm-3 col-md-2 mr-1">
					<li><Link to='/OpenRequests'>Open Requests</Link></li>
				</ul>
				<ul className="navbar-open col-sm-3 col-md-2 mr-1">
					<li><Link to='/PendingRequests'>Pending Requests</Link></li>
				</ul>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-nonee d-sm-block">
            <small className="text-white">{this.props.account}</small>
          </li>
        </ul>
			</nav> 
		)
	}
}

export default NavBar