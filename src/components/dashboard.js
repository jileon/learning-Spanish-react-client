import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';
import { Link } from 'react-router-dom';
import './css/dashboard.css';
import HeaderBar from './header-bar';

export class Dashboard extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchProtectedData());
	}

	render() {
		return (
			<React.Fragment>
				<HeaderBar className="header-bar-logged" />
				<section className="dasboard-container">
					<section className="dashboard">
							<section className="user-stats-laptop">
                            <div className='stats'>
                            <div className='welcome-screen'>
									<p> WELCOME {this.props.username.toUpperCase()}!</p>
									<p> Here are your stats:</p>
									<p> Correct: {this.props.protectedData.correct}</p>
									<p> Incorrect: {this.props.protectedData.incorrect}</p>
                                    </div>
                                    <div className='ready-screen'>
									<p className='ready'>Ready to Learn?</p>
									<Link to="/play">
										<button className='play-button' type="button">Let's Play!</button>
									</Link>
                                    </div>
                                    </div>
							</section>
					</section>
				</section>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	const { currentUser } = state.auth;
	return {
		username: state.auth.currentUser.username,
		id: state.auth.currentUser.id,
		name: `${currentUser.firstName} ${currentUser.lastName}`,
		protectedData: state.protectedData.data
	};
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
