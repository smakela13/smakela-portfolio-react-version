import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about-me';
import Contact from './pages/contact-me';
import Portfolio from './pages/portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
		<Router>
			<div className='supDiv'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={About} />
					<Route path='/contact-me' component={Contact} />
					<Route path='/portfolio' component={Portfolio} />
				</Switch>
				<Footer />
			</div>
		</Router>
  );
}

export default App;