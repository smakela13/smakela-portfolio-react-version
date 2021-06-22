import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
} from '../NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to='/about-me' activeStyle>
						About Me
					</NavLink>
					<NavLink to='/portfolio' activeStyle>
						Portfolio
					</NavLink>
					<NavLink to='/contact-me' activeStyle>
						Contact Me
					</NavLink>
					<NavLink to='/resume' activeStyle>
						Resume
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
