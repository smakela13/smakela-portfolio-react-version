import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const Navigation = () => {
	return (
		<>
			<Navbar collapseOnSelect sticky='top' expand='sm' bg='dark' variant='dark' className='header'>
				<Navbar.Brand className='header-nav'>Soma Mäkelä</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/'>About Me</Nav.Link>
						<Nav.Link href='/portfolio'>Portfolio</Nav.Link>
						<Nav.Link href='/contact-me'>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Navigation;
