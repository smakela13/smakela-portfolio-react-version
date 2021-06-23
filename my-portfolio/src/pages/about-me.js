import React from 'react';
import {Image} from 'react-bootstrap';

const About = () => {
	return (
		<div
			style={{
				justifyContent: 'Right',
				alignItems: 'Right',
			}}>
      <section className="main-content-box">
        <h2 id="about-me">About Me</h2>
            <Image className="about-img" src="Sarah-Makela.jpg" alt="Sarah Mäkelä" roundedCircle fluid />
            <div className="about-text">
              <p> 
                Welcome to my portfolio! I'm a Full Stack Web Developer with a publishing industry background.
              </p>
              <p>
                I’m detail oriented, great at collaborating with others, have excellent written and verbal communication skills, and am a strategic thinker. From my work as a Publisher, I’m keenly familiar with deadlines and a fast-paced environment. Learning is something I’m truly passionate about.
              </p>
              <p>
                In terms of programming, I'm comfortable with HTML5, CSS, JavaScript, GitHub, Node.js, WordPress, and responsive web design. I am familiar with Python, PHP, and MySQL. My skills are growing every day.
              </p>
              <p>
                Take a look below to see what I've included in my portfolio. You can also view my GitHub repository for more projects. Feel free to contact me via email or through LinkedIn.
              </p>
            </div>
        </section>
		</div>
	);
};

export default About;
