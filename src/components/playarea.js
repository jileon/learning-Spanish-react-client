import React from 'react';
import{connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import HeaderBar from './header-bar';


export class PlayArea extends React.Component{

  render(){
    if (!this.props.loggedIn) {
      return <Redirect to="/#register" />;
  }

  return(
    <React.Fragment>
       <HeaderBar />
       <h1>helllooooo</h1>
    </React.Fragment>
  )
  }
}



const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(PlayArea);
