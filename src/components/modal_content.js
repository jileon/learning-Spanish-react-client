import React from 'react';

export default function Modal(props) {
	return (
		<section className="stats-modal">
			<h1>Here are your stats:</h1>
			<p>
				{' '}
				<strong>Correct:</strong> {props.correct}{' '}
			</p>
			<p>
				<strong>Incorrect:</strong> {props.incorrect}
			</p>

			<button className="modalButton" onClick={props.ModalOff}>
				Got It
			</button>
		</section>
	);
}
