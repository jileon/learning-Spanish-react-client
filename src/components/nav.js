import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import {resetFeedback} from '../actions/protected-data';

export class Navigation extends React.Component {
	logOut() {
		this.props.dispatch(resetFeedback());
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	displayLoggedOut = () => {
		return (
			<section className="navigation-bar">
				<h1>
					<a href="#home">Learning Spanish</a>
				</h1>
				<nav className="navigation-bar-nav">
		
					<ul className="navLinks">
						<li>
							<a href="#register">Register</a>
						</li>
						<li>
							<a href="#login">Login</a>
						</li>
					</ul>
				</nav>
			</section>
		);
	};

	displayLoggedIn = () => {
		return (
			<section className="navigation-bar">
				<h1>
				<Link to="/dashboard">Learning Spanish</Link>
				</h1>
				<nav className="navigation-bar-nav">
					<ul className="navLinks">
						<li>
							<Link to="/dashboard">Dashboard</Link>
						</li>
						<li>
						<Link to="/play">Play</Link>
						</li>
						<li>
						<a href='#home' onClick={() => this.logOut()}>Logout</a>
						</li>
					</ul>
				</nav>
			</section>
		);
	};

	render() {
		return (
			<React.Fragment>
				{	this.props.loggedIn ? this.displayLoggedIn() :
					this.displayLoggedOut()}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loggedIn: state.auth.currentUser !== null
	};
};
export default connect(mapStateToProps)(Navigation);
