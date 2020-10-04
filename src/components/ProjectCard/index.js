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
        <Card className='projectCard shadow'>
          <Card.Img
            variant='top'
            src={props.imgUrl}
            alt={props.name}
          />
          <Card.Body>
            <Card.Title className='text-center'>{props.name}</Card.Title>
            <Card.Text>
              <p> {props.description}</p>
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