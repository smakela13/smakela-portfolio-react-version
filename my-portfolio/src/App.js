import React from 'react';
import './App.css';
// import logo from './logo.svg';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about-me';
import Contact from './pages/contact-me';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

// <img src={logo} className="App-logo" alt="logo" />

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about-me' component={About} />
		<Route path='/contact-me' component={Contact} />
		<Route path='/portfolio' component={Portfolio} />
		<Route path='/resume' component={Resume} />
	</Switch>
	</Router>
);
}

export default App;