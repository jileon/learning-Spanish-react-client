import React from 'react';
import { connect } from 'react-redux';
import './css/playCard.css';
import { fetchQuestions, correctAnswer, wrongAnswer} from '../actions/questions-actions';
import {fetchProtectedData, updateStats} from '../actions/protected-data';

export class PlayCard extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchQuestions());
	}

	correct = () => {
		this.props.dispatch(correctAnswer());
		this.props.dispatch(updateStats(this.props.id, 1, 0));
	};

	incorrect = () => {
		this.props.dispatch(wrongAnswer());
		this.props.dispatch(updateStats(this.props.id, 0, 1));
	};

	render() {
		console.log(this.props.answer);
		console.log(this.props.correct, 'correct');
		console.log(this.props.correct + 1, 'correct plus 1');
		console.log(this.props.correct, 'incorrect');
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


								userAnswer === this.props.answer ? this.correct() :
								this.incorrect();
							this.input.value = '';
						}}
					>
						Submit
					</button>
					<button type="button" onClick={(e) => this.props.dispatch(fetchProtectedData())}>
						Next
					</button>
				</form>
			</section>
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
