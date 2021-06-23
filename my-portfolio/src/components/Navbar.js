import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const Navigation = () => {
	return (
		<>
			<Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
				<Navbar.Brand>Sarah Mäkelä</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/'>About Me</Nav.Link>
						<Nav.Link href='/contact-me'>Contact</Nav.Link>
						<Nav.Link href='/portfolio'>Portfolio</Nav.Link>
						<Nav.Link href='/resume'>Resume</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Navigation;
