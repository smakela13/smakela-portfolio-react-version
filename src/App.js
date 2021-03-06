import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about-me';
import Contact from './pages/contact-me';
import Portfolio from './pages/portfolio';

function App() {
	return (
		<div className='supDiv'>
			<Header />
			<Routes>
				<Route path='/contact-me' element={<Contact />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/' element={<About />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;