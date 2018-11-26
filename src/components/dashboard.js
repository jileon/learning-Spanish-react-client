import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import './css/dashboard.css';
import HeaderBar from './header-bar';
export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <React.Fragment>
            <HeaderBar/>
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
            </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
