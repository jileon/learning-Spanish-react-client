import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {Link} from 'react-router-dom';
import './css/dashboard.css';
import HeaderBar from './header-bar';


export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
    console.log(this.props.protectedData[0].correct, 'protectedData Correct')
    // console.log(this.props.protectedData[0].correct, 'protectedData')

        return (
            <React.Fragment>
            <HeaderBar/>
            <section className="dashboard">
                <section className="dashboard-username">
                   <p> WELCOME {this.props.username.toUpperCase()}!</p>
                </section>
                <section className="dashboard-protected-data">
                   <p> Here are your stats:</p>
                        <p> Correct: {this.props.protectedData[0].correct}</p>
                        <p> Incorrect: {this.props.protectedData[0].incorrect}</p>
                </section>

                <section>
                    <p>Ready to Learn?</p>
                    <Link to="/play">
                    <button type='button'>Let's Play!</button>
                    </Link>
                </section>
            </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        id: state.auth.currentUser.id,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
