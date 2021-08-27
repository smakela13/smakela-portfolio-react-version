import React from 'react';
import Navigation from './Navbar';
import { Navbar, Nav, Image } from 'react-bootstrap';

const Header = () => {
	return (
		<>
			<Image
				src={process.env.PUBLIC_URL + '/feathers-header.jpg'}
				style={{objectFit: 'cover', height: '250px', width: '100%'}}
				alt='header image with feathers'
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
						fontSize: '2.75em',
						marginLeft: '10px',
						fontFamily: 'Merienda, cursive',
					}}
					className='h1'>
					Soma Mäkelä
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ml-auto' aria-label='Navigation'>
						<Navigation />
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Header;
