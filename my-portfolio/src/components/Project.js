import React from 'react';
import { Container, CardGroup, Button, Card } from 'react-bootstrap';

const Project = ({ project }) => {
	if (project) {
		return (
			<Container
				style={{
					display: 'flex',
					justifyContent: 'center',
					width: '32em',
					marginBottom: '5px',
				}}
				fluid>
				<CardGroup>
					<Card>
						<Card.Header as='h3' className='card-title'>
							{project.title}
						</Card.Header>
						<Card.Img
							variant='top'
							style={{ width: '100%' }}
							src={project.image}
							alt={project.description}
						/>
						<Card.Body>
							<Card.Text className='card-text'>
								{project.description}
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Button className='mx-1' href={project.repo}>
								Repository
							</Button>
							<Button href={project.url}>Deployed Project</Button>
						</Card.Footer>
					</Card>
				</CardGroup>
			</Container>
		);
	}
};

export default Project;
