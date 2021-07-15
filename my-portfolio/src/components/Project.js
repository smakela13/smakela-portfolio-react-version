import {Button} from 'bootstrap'
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Project = ({project}) => {
	if (project) {
		return (
			<>
				<Row xs={1} md={2} className='g-4'>
					{Array.from({length: 4}).map((_, idx) => (
						<Col>
							<Card>
								<Card.Img variant='top' src={project.image} alt={project.description} />
								<Card.Body>
									<Card.Title>{project.name}</Card.Title>
									<Card.Text>
										{project.description}
										<Button href={project.repo}>Repository</Button>
										<Button href={project.url}>Deployed Project</Button>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</>
		)
	}
};

export default Project;
