import React from 'react';
import Navigation from '../components/nav';

export default function HeaderBar(props) {
	return (
		<header className={props.className}>
			<Navigation />
		</header>
	);
}
