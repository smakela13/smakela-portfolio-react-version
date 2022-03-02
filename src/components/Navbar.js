import React from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation = () => {
	return (
		<>
			<Link to='/'>
				<Nav className='portfolio-nav-links active'>
					About Me
				</Nav>
			</Link>
			<Link to='/portfolio'>
				<Nav className='portfolio-nav-links active'>
					Portfolio
				</Nav>
			</Link>
			<Link to='/contact-me'>
				<Nav className='portfolio-nav-links active'>
					Contact
				</Nav>
			</Link>
		</>
	);
};

export default Navigation;
