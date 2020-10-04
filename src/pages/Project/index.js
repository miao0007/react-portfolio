import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import projects from '../../projects.json';
import ProjectCard from '../../components/ProjectCard';

function Project() {
  return (
    <div>
       <div className="jumbotron jumbotron-fluid j-color">
                <div className="container text-center">
                    <h1 className="font-weight-bolder title-font a-h1"> My Projects</h1>
                   
                </div>    
            </div>
      <Container className='pt-5'>
        
        <Row>
          {projects.map(project => (
            <Col size='sm-12 md-6 lg-4' key={project.name}>
              <ProjectCard
                name={project.name}
                description={project.description}
                imgUrl={project.imgUrl}
                github={project.github}
                link={project.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Project;