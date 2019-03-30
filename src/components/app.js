import { h, Component } from 'preact';
//import { Router } from 'preact-router';

// import Header from './header';
import Home from './home';
//import Profile from './profile';

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Home/>
			</div>
		);
	}
}
