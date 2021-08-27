import React from 'react';
import { Image } from 'react-bootstrap';

const About = () => {
	return (
		<div>
			<section className='main-content-box'>
				<h1>About Me</h1>
				<Image
					className='about-img'
					src={process.env.PUBLIC_URL + '/Soma-Makela.jpg'}
					alt='Soma Mäkelä'
					roundedCircle
					fluid
				/>
				<div className='about-text'>
					<p>
						Welcome to my portfolio! I'm a Full Stack Web Developer with a
						publishing industry background.
					</p>
					<p>
						I’m detail oriented, great at collaborating with others, have
						excellent written and verbal communication skills, and am a
						strategic thinker. From my work as a Publisher, I’m keenly
						familiar with deadlines and a fast-paced environment. Learning
						is something I’m truly passionate about.
					</p>
					<p>
						In terms of programming, I'm comfortable with HTML5, CSS,
						JavaScript, GitHub, Node.js, WordPress, and responsive web
						design. I am familiar with Python, PHP, and MySQL. My skills
						are growing every day.
					</p>
					<p>
						Take a look at what I've included in my portfolio. You can
						also view my GitHub repository for more projects. Feel free to
						contact me via the Contact form or through LinkedIn.
					</p>
				</div>
				<h2>Skills</h2>
				<div className='about-text'>
					<p>
						<span>Languages:</span> JavaScript ES6+, HTML5, CSS3, SQL,
						Python, PHP
					</p>
					<p>
						<span>Applications:</span> GitHub, WordPress, MySQL, MongoDB,
						Heroku
					</p>
					<p>
						<span>Tools:</span> Node.js, React.js, Express.js, Handlebars.js,
						Sequelize, Git, Tailwind CSS, Materialize CSS, Bootstrap,
						Mongoose, Apollo GraphQL, APIs, Google Lighthouse,
						Progressive Web Apps, jQuery, Flask, SQLAlchemy, Jinja2, AWS
					</p>
				</div>
			</section>
		</div>
	);
};

export default About;
