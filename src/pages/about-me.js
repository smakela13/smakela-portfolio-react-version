import React from 'react';
import {Image} from 'react-bootstrap';

const About = () => {
	return (
		<div>
			<section className='main-content-box'>
				<h1>About Me</h1>
				<Image
					className='about-img'
					src={process.env.PUBLIC_URL + '/Soma-Makela.png'}
					alt='picture of Soma Mäkelä'
					roundedCircle
					fluid
				/>
				<div className='about-text'>
					<p>
						Welcome to my portfolio! I'm a Full Stack Developer who loves frontend and full stack development. 
					</p>
					<p>
						I'm detail oriented, great at collaborating with others, and a strategic thinker when meeting tight deadlines.
						My passion for coding and problem solving has led me to a career in web development, and I'm always looking for opportunities to learn and grow.
					</p>
					<p>
						Take a look at what I've included in my portfolio.
						You can
						also view my GitHub <a
							href='https://github.com/smakela13?tab=repositories'
							target='_blank'
							aria-label='Repositories'
							rel='noreferrer'>
							repositories
						</a> for more projects. Feel free to contact me via the
						Contact page or through <a
							href='https://www.linkedin.com/in/soma-makela/'
							aria-label='LinkedIn'
							target='_blank'
							rel='noreferrer'>
							LinkedIn
						</a>. I look forward to hearing from you!
					</p>
				</div>
				<h2>Skills</h2>
				<div className='about-text'>
					<p>
						<span>Languages:</span> JavaScript ES6+, HTML5, CSS3, Java,
						SQL, Python
					</p>
					<p>
						<span>Applications:</span> GitHub, WordPress, Heroku, Visual
						Studio Code, Eclipse
					</p>
					<p>
						<span>Tools and Frameworks:</span> Node.js, React.js, Angular,
						Express.js, MongoDB, JSX, Handlebars.js, Git, Mongoose ODM,
						Tailwind CSS, Materialize CSS, Bootstrap, Sequelize, MySQL,
						Oracle DB, Spring Boot, Thymeleaf, jQuery, Apollo GraphQL,
						REST API, Google Lighthouse, Progressive Web Apps, Bash, Unix,
						Flask
					</p>
				</div>
			</section>
		</div>
	);
};

export default About;
