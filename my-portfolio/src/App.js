import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './pages/about-me';
import Contact from './pages/contact-me';
import Portfolio from './pages/portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
		<BrowserRouter>
			<div className='supDiv'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={About} />
					<Route exact path='/contact-me' component={Contact} />
					<Route exact path='/portfolio' component={Portfolio} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
  );
}

export default App;