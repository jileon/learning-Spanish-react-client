import React from 'react';
import './css/dashboard.css';
import './css/modal.css';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../actions/protected-data';
import { Link } from 'react-router-dom';
import { stats_modalOff, stats_modalOn } from '../actions/modal-actions';
import requiresLogin from './requires-login';
import HeaderBar from './header-bar';
import ModalScreen from './modal';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <React.Fragment>
        <ModalScreen
          isOpen={this.props.statsmodal}
          ModalOff={() => this.props.dispatch(stats_modalOff())}
          correct={this.props.protectedData.correct}
          incorrect={this.props.protectedData.incorrect}
        />
        <HeaderBar className="header-bar-logged" />
        <div id="dashboard" />
        <section className="dasboard-container">
          <section className="dashboard">
            <section className="user-stats-laptop">
              <div className="stats">
                <h4> WELCOME {this.props.username.toUpperCase()}!</h4>
                <div className="buttons">
                  <button
                    className="play-button"
                    onClick={() => {
                      this.props.dispatch(stats_modalOn());
                    }}
                  >
                    stats
                  </button>
                  <button className="play-button" type="button">
                    <Link to="/play">Let's Learn!</Link>
                  </button>
                </div>
              </div>
            </section>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
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
