import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import About from './pages/about-me';
import Contact from './pages/contact-me';
import Portfolio from './pages/portfolio';

function App() {
	return (
		<div className='supDiv'>
			<Header />
			<Switch>
				<Route exact path='/contact-me' component={Contact} />
				<Route exact path='/portfolio' component={Portfolio} />
				<Route exact path='/' component={About} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;