import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about-me';
import Contact from './pages/contact-me';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={About} />
		<Route path='/contact-me' component={Contact} />
		<Route path='/portfolio' component={Portfolio} />
		<Route path='/resume' component={Resume} />
    </Switch>
    <Footer />
	</Router>
);
}

export default App;