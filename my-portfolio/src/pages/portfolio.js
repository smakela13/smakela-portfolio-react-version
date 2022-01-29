import React from 'react';
import Project from '../components/Project';

const projectList = [
	{
		title: 'Tabletop Auction House',
		description:
			'An auction house interface for roleplaying game masters and players to buy, sell, and trade in-game items for fun and profit. Written using JavaScript, Handlebars, Sequelize, MySQL/JawsDB, Heroku, and Tailwind CSS.',
		url: 'https://tabletop-auction-house.herokuapp.com/',
		image: '/shop-screenshot.png',
		repo: 'https://github.com/smakela13/Tabletop_Auction_House',
	},
	{
		title: 'Buddy Finder',
		description:
			'A search engine with a map to adopt the right pet for you. Features dynamically updated HTML and CSS powered by Materialize CSS, JavaScript, and uses the server-side APIs: PetFinder, Leaflet.JS, and Mapbox.',
		url: 'https://smakela13.github.io/project-buddy-finder/',
		image: '/project-buddy-finder-history-screenshot_1.png',
		repo: 'https://github.com/smakela13/project-buddy-finder',
	},
	{
		title: 'Java Tech News',
		description:
			'Blog that allows for login, sign-up, posting, and more written with Java, JavaScript, HTML5, CSS, Spring Boot, MySQL, Thymeleaf, and Heroku.',
		url: 'https://java-tech-news.herokuapp.com/',
		image: '/java-tech-news.png',
		repo: 'https://github.com/smakela13/java-tech-news',
	},
	{
		title: 'Google Books Search Engine',
		description:
			'Google Books API search engine helps readers find new books and save them to their profile. Built using MERN stack, Bootstrap, Apollo GraphQL, and Google Books API.',
		url: 'https://intense-woodland-01867.herokuapp.com/',
		image: '/google-books-screenshot.png',
		repo: 'https://github.com/smakela13/google-books-search-engine',
	},
	{
		title: 'Workout Tracker',
		description:
			'A workout tracker to log multiple exercises. Written using Express.js, Mongoose, Node.js, MongoDB Atlas, HTML, and CSS. Deployed on Heroku.',
		url: 'https://frozen-anchorage-27658.herokuapp.com/',
		image: '/last-workout-screenshot.png',
		repo: 'https://github.com/smakela13/workout-tracker',
	},
	{
		title: 'Tech Blog',
		description:
			'Blogging platform written using JavaScript, Express.js, Sequelize, MySQL/JawsDB, Handlebars, and CSS.',
		url: 'https://frozen-hollows-70537.herokuapp.com/',
		image: '/index-screenshot.png',
		repo: 'https://github.com/smakela13/tech-blog',
	},
	{
		title: 'Weather Dashboard',
		description:
			'Weather dashboard that dynamically updates. Uses OpenWeather API, JavaScript, HTML, CSS.',
		url: 'https://smakela13.github.io/weather-dashboard/',
		image: '/smakela-weather-dashboard.png',
		repo: 'https://github.com/smakela13/weather-dashboard',
	},
	{
		title: 'Work Day Scheduler',
		description:
			'Work day scheduler to help plan your day written with jQuery, MomentJS, Bootstrap, and HTML.',
		url: 'https://smakela13.github.io/work-day-calendar/index.html',
		image: '/work-day-scheduler.png',
		repo: 'https://github.com/smakela13/work-day-calendar',
	},
	{
		title: 'JavaScript Quiz',
		description:
			'Quiz about JavaScript written in JavaScript, HTML5, and CSS.',
		url: 'https://smakela13.github.io/javascript-quiz/index.html',
		image: '/javascript-quiz.png',
		repo: 'https://github.com/smakela13/javascript-quiz',
	},
];

const renderProjects = () => {
	return projectList.map((project, i) => {
		return <Project key={i} project={project} />;
	});
};

const Portfolio = () => {
	return (
		<div className='main-content-box'>
			<h1>Portfolio</h1>
			<div className='row'>{renderProjects()}</div>
		</div>
	);
};

export default Portfolio;
