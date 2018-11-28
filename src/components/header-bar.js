import React from 'react';
import Navigation from '../components/nav';

export default function HeaderBar(props) {
	return (
		<section className={props.className}>
			<Navigation />
		</section>
	);
}
