import React from 'react';
import ReactModal from 'react-modal';
import './css/dashboard.css';
import './css/modal.css';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../actions/protected-data';
import { Link } from 'react-router-dom';
import { stats_modalOff, stats_modalOn } from '../actions/modal-actions';
import requiresLogin from './requires-login';
import HeaderBar from './header-bar';
import Modal_Screen from './modal';

export class Dashboard extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchProtectedData());
	}

	render() {
		return (
			<React.Fragment>
				<HeaderBar className="header-bar-logged" />
				<div id="dashboard" />
				<section className="dasboard-container">
					<section className="dashboard">
						<section className="user-stats-laptop">
							<div className="stats">
								<div className="welcome-screen">
									<h4> WELCOME {this.props.username.toUpperCase()}!</h4>
									<button
										className="play-button"
										onClick={() => {
											this.props.dispatch(stats_modalOn());
										}}
									>
										stats
									</button>
								</div>

								<button className="play-button" type="button">
									<Link to="/play">Let's Learn!</Link>
								</button>
							</div>
						</section>
					</section>
				</section>

				<Modal_Screen isOpen={this.props.statsmodal} ModalOff={()=>this.props.dispatch(stats_modalOff())}/>
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
		protectedData: state.protectedData.data,
		statsmodal: state.modal.showStatsModal
	};
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
