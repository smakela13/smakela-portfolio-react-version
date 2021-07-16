import React from 'react';
import {Navbar, Nav, Image} from 'react-bootstrap';

const Navigation = () => {
	return (
		<>
			<Image
				src='feathers-header.jpg'
				style={{objectFit: 'cover', height: '250px', width: '100%'}}
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
						color: 'var(--champagne)',
						fontSize: '1.65em',
						fontWeight: 'bold',
					}}
					className='header-nav'>
					Soma Mäkelä
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Link
							style={{ color: 'var(--champagne)', fontSize: '1.3em' }}
							href='/'>
							About Me
						</Nav.Link>
						<Nav.Link
							style={{ color: 'var(--champagne)', fontSize: '1.3em' }}
							href='/portfolio'>
							Portfolio
						</Nav.Link>
						<Nav.Link
							style={{ color: 'var(--champagne)', fontSize: '1.3em' }}
							href='/contact-me'>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Navigation;
