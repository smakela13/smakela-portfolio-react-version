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
						<Card.Header as='h2' className='card-title'>
							{project.title}
						</Card.Header>
						<Card.Img
							variant='top'
							style={{ width: '100%' }}
							src={process.env.PUBLIC_URL + project.image}
							alt={project.description}
						/>
						<Card.Body>
							<Card.Text className='card-text'>
								{project.description}
							</Card.Text>
						</Card.Body>
						<Card.Footer className='card-header'>
							<Button className='m-1 btn-dark align-middle' href={project.repo} target='_blank'>
								Repository
							</Button>
							<Button className='m-1 btn-dark align-middle' href={project.url} target='_blank'>
								Deployed Project
							</Button>
						</Card.Footer>
					</Card>
				</CardGroup>
			</Container>
		);
	}
};

export default Project;
