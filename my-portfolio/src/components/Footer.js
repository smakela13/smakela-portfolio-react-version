import React from 'react';
import {Image} from 'react-bootstrap';

const Footer = () => {
  return (
		<>
			<footer className='footer'>
				<a href='https://github.com/smakela13'>
					<Image src={process.env.PUBLIC_URL + '/GitHub-1.png'} style={{width: '64px', marginRight: '1em', marginBottom: '.5em'}} />
				</a>
				<a href='https://www.linkedin.com/in/sarah-makela-0967b91b8/'>
          <Image src={process.env.PUBLIC_URL + '/LinkedIn.png'} style={{width: '64px', marginRight: '1em', marginBottom: '.5em'}}/>
				</a>
				<a href='https://www.twitter.com/smakela13'>
					<Image src={process.env.PUBLIC_URL + '/twitter-64.png'} style={{width: '64px'}}/>
				</a>
				<h2>Made with ❤️️ by Soma Mäkelä</h2>
				<p>&copy; 2021 Soma Mäkelä</p>
			</footer>
		</>
  );
};

export default Footer;