import React, { Component } from 'react';
import logo from './logo.png';
import Search from './components/search';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Bienvenidos al MercadoSearch de AlukardSins</h1>
				</header>
				<Search />
			</div>
		);
	}
}

export default App;
