import React from 'react';
import { Greeting } from './Greeting';

export class AppPropTypes extends React.Component {
	render() {
		return (
			<Greeting name={ 12 } />
		);
	}
};
