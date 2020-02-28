import React from 'react';
import { ProjectData } from '../data/projects';
import { Card, CardDeck, Button } from 'react-bootstrap';

const ProjectCard = ({ proj }) => {
  const { name, description, projectLink, githubLink, image, technologies } = proj;
  const imagePath = image ? `/img/${image}` : `https://via.placeholder.com/150`;
  return (
    <Card style={{ width: '300px' }}>
      <Card.Img variant="top"
        src={imagePath}
        alt={`${name} image`}
        onClick={() => window.open(projectLink, "_blank")} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className='project-description'>
          {description} <br />
        </Card.Text>
        <Card.Text className='project-technologies'>
          {technologies.map(tech => <span className="technology">{tech}</span>)}
        </Card.Text>
      </Card.Body>
      <Button className="btn-light" href={projectLink} target="_blank">
        <i className="fas fa-eye"></i> Hosted Project
      </Button>
      <Button className="btn-dark" href={githubLink} target="_blank">
        <i className="fab fa-github"></i> View on Github
      </Button>
    </Card>
  )
}


const Projects = () => {
  return (
    <div id="work">
      <h1 className="lg-heading">
        My
      <span className="text-secondary-color">Work</span>
      </h1>
      <h2 className="sm-heading">
        Check out some of my projects...
    </h2>
      <CardDeck className="projects">
        {ProjectData.map((proj, i) => (
          <ProjectCard key={i} proj={proj} />
        ))}
      </CardDeck>
    </div>
  );
}

export default Projects;