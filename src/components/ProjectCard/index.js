import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function ProjectCard(props) {
  return (
    <Container>
      
      <div className='row'>
       
        <Card className='projectCard'>
          <Card.Img
            variant='top' 
            src={process.env.PUBLIC_URL + props.imgUrl}
            // src = "../../img/music_app.png" 
            alt={props.name}
          />
          <Card.Body>
            <Card.Title className='text-center'>{props.name}</Card.Title>
            <Card.Text>
              <p className = 'desc'> {props.description}</p>
              <p className = 'tech'><span className='tech-title'>Technologies:</span> {props.technology}</p>
              <div className='links'>
                <Button variant='outline-light btn btn-primary' href={props.link}>
                  Deployed App
                </Button>
                <Button
                  variant='outline-light btn btn-success'
                  href={props.github}
                  style={{ alignContent: 'right'}}
                >
                  GitHub Repo
                </Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
    
  );
}

export default ProjectCard;