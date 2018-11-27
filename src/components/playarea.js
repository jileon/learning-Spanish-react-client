import React from 'react';
import{connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import HeaderBar from './header-bar';
import './css/playArea.css'


export class PlayArea extends React.Component{

  render(){
    if (!this.props.loggedIn) {
      return <Redirect to="/#register" />;
  }

  return(
    <React.Fragment>
       <HeaderBar />
        <section id='#play-area' className="play-page">
       <h1>helllooooo</h1>
       <section className='card'>
       <div className='label'>
        <h3>Word</h3>
       </div>
       </section>



       <section className='houses'>
       <img src={require('./images/AS_houses_1.png')} alt="houses"></img>
       </section>
       </section> 
       
    </React.Fragment>
  )
  }
}



const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(PlayArea);