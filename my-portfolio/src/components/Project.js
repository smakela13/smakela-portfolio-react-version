import React from 'react';
import { CardGroup, Button, Card } from 'react-bootstrap';

const Project = ({project}) => {
	if (project) {
		return (
				<CardGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', maxWidth: '30em', marginBottom: '2px' }}>
					<Card style={{flex: 1}}>
						<Card.Img variant='top' style={{width: '100%'}} src={project.image} alt={project.description} />
						<Card.Body>
							<Card.Title className='card-title'>{project.title}</Card.Title>
							<Card.Text className='card-text'>
								{project.description}
								<br />
								<Button className='my-1' href={project.repo}>Repository</Button> <br />
								<Button href={project.url}>Deployed Project</Button>
							</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
		)
	}
};

export default Project;
