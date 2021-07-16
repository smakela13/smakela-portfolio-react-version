import React from 'react';
import {Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Navigation = () => {
	return (
		<>
			<LinkContainer to='/'>
				<Nav.Link className='portfolio-nav-links active'>
					About Me
				</Nav.Link>
			</LinkContainer>
			<LinkContainer to='/portfolio'>
				<Nav.Link	className='portfolio-nav-links active'>
					Portfolio
				</Nav.Link>
			</LinkContainer>
			<LinkContainer to='/contact-me'>
				<Nav.Link	className='portfolio-nav-links active'>
					Contact
				</Nav.Link>
			</LinkContainer>
		</>
	);
};

export default Navigation;
