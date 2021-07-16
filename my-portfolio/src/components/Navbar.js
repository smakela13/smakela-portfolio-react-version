import React from 'react';
import {Navbar, Nav, Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


const Navigation = () => {
	return (
		<>
			<Image
				src={process.env.PUBLIC_URL + '/feathers-header.jpg'}
				style={{ objectFit: 'cover', height: '250px', width: '100%' }}
				fluid
			/>
			<Navbar
				collapseOnSelect
				sticky='top'
				expand='sm'
				bg='dark'
				variant='dark'
				className='header'>
				<Navbar.Brand
					style={{
						color: '#F4EFC9',
						fontSize: '1.65em',
						fontWeight: 'bold',
					}}
					className='header-nav'>
					Soma Mäkelä
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ml-auto'>
						<LinkContainer to='/'>
							<Nav.Link className='portfolio-nav-links' href='/'>
								About Me
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/portfolio'>
							<Nav.Link
								className='portfolio-nav-links'
								href='/portfolio'>
								Portfolio
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/contact-me'>
							<Nav.Link
								className='portfolio-nav-links active'
								href='/contact-me'>
								Contact
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Navigation;
