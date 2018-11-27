import React from 'react';
import {connect} from 'react-redux';
import './css/playCard.css'
import {fetchQuestions, correctAnswer, wrongAnswer} from '../actions/questions-actions';

export  class PlayCard extends React.Component{
componentDidMount(){
  this.props.dispatch(fetchQuestions());
}

	render(){
    console.log(this.props.answer);
    let userAnswer;
   return (
      <section className="card">
        <div className="current-word">
          <h3>{this.props.question}</h3>
        </div>
        <div className="feedback">
          <h3>{this.props.feedback}</h3>
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
              console.log(this.input.value);
              userAnswer=this.input.value;
              userAnswer===this.props.answer ? this.props.dispatch(correctAnswer()) : this.props.dispatch(wrongAnswer());
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
  loggedIn: state.auth.currentUser !== null,
  question: state.questions.questions[0].q1.q,
  answer:state.questions.questions[0].q1.a,
  feedback: state.questions.feedback
});

export default connect(mapStateToProps)(PlayCard);