import React from 'react';
import Project from './components/Project';

const projectList = [
	{
		title: 'Tabletop Auction House',
		description:
			'An auction house interface for roleplaying game masters and players to buy, sell, and trade in-game items for fun and profit. Written using JavaScript, Handlebars, Sequelize, MySQL/JawsDB, Heroku, and Tailwind CSS.',
		url: 'https://tabletop-auction-house.herokuapp.com/',
		image: 'shop-screenshot.png',
		repo: 'https://github.com/smakela13/Tabletop_Auction_House',
	},
	{
		title: 'Buddy Finder',
		description:
			'A search engine with a map to adopt the right pet for you. Features dynamically updated HTML and CSS powered by Materialize CSS, JavaScript, and uses server-side APIs: PetFinder, Leaflet.JS, and Mapbox.',
		url: 'https://smakela13.github.io/project-buddy-finder/',
		image: 'project-buddy-finder-history-screenshot_1.png',
		repo: 'https://github.com/smakela13/project-buddy-finder',
	},
	{
		title: 'Workout Tracker',
		description:
			'A workout tracker to log multiple exercises. Written using Express.js, Mongoose, Node.js, MongoDB Atlas, HTML, and CSS. Deployed on Heroku.',
		url: 'https://frozen-anchorage-27658.herokuapp.com/',
		image: '/tic-tac-toe-screenshot.png',
		repo: 'https://github.com/smakela13/workout-tracker',
	},
	{
		title: 'Tech Blog',
		description:
			'Blogging platform written using JavaScript, Express.js, Sequelize, MySQL/JawsDB, Handlebars, and CSS.',
		url: 'https://frozen-hollows-70537.herokuapp.com/',
		image: 'index-screenshot.png',
		repo: 'https://github.com/smakela13/tech-blog',
	},
	{
		title: 'Weather Dashboard',
		description:
			'Weather dashboard that dynamically updates. Uses OpenWeather API, JavaScript, HTML, CSS.',
		url: 'https://smakela13.github.io/weather-dashboard/',
		image: 'smakela-weather-dashboard.png',
		repo: 'https://github.com/smakela13/weather-dashboard',
	},
];

const Portfolio = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'Right',
				alignItems: 'Right',
				height: '100vh',
			}}>
			<h1>GeeksforGeeks is a Computer Science portal for geeks.</h1>
		</div>
	);
};

export default Portfolio;
