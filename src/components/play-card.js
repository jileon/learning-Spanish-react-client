import React from 'react';
import { connect } from 'react-redux';
import './css/playCard.css';
import {fetchProtectedData, updateStats,correctAnswer, wrongAnswer,resetFeedback} from '../actions/protected-data';

export class PlayCard extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchProtectedData());
	}

	correct = () => {
		this.props.dispatch(correctAnswer());
		this.props.dispatch(updateStats(this.props.id, 1, 0));
	};

	incorrect = () => {
		this.props.dispatch(wrongAnswer());
		this.props.dispatch(updateStats(this.props.id, 0, 1));
	};

	guessMode = ()=>{
		let userAnswer;
		return(
		<section className="card">
		<div className="current-word">
			<h3>{this.props.question}</h3>
		</div>
		<form className="user-form">
			<label htmlFor="user-answer" />
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
					userAnswer = this.input.value;
					userAnswer.toLowerCase() === this.props.answer.toLowerCase() ? this.correct() :
					this.incorrect();
					this.input.value = '';
				}}
			>
				Submit
			</button>
		</form>
	</section>);
	}

	feedbackMode = ()=>{
		let userAnswer;
		return(
		<section className="card">
		<div className="current-word">
			<h3>{this.props.question}</h3>
		</div>
		<div className="feedback">
					<h3>{this.props.feedback}</h3>
				</div>
		<form className="user-form">
		<button type="button" onClick={(e) =>{
			this.props.dispatch(fetchProtectedData());
			this.props.dispatch(resetFeedback())

			} }>
						Next
			</button>
		</form>
	</section>);
	}



	render() {
		return (
			<React.Fragment>
						{!this.props.feedback?this.guessMode():this.feedbackMode()}
			</React.Fragment>

		);
	}
}

const mapStateToProps = (state) => ({
	loggedIn: state.auth.currentUser !== null,
	id: state.auth.currentUser.id,
	question: state.protectedData.data.question.question,
	answer: state.protectedData.data.question.answer,
	feedback: state.protectedData.feedback,
	correct: state.protectedData.data.correct,
	incorrect: state.protectedData.data.incorrect
});

export default connect(mapStateToProps)(PlayCard);
