import React from 'react';
import {connect} from 'react-redux';
import './css/playCard.css'

export  class PlayCard extends React.Component{
	render(){
   return (
      <section className="card">
        <div className="current-word">
          <h3>Word</h3>
        </div>
        <div className="feedback">
          <h3>Feedback</h3>
        </div>
     
     
        <form className="user-form">
          <label htmlFor="user-answer"></label>
          <input
            name="userAnswer"
            placeholder="Click here to type"
            className="userAnswer"
            type="userAnswer"
            ref={(input) => (this.input = input)}
          />
  
          <button
            type="submit"
            className="submitButton"
            onClick={(e) => {
              e.preventDefault();
              this.input.value = '';
            }}
          >
            Submit
          </button>
        </form>
      
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(PlayCard);