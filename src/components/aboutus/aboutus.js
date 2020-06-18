import React from 'react';
import './aboutus.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    return(
        <div className="about-us">
            <Container>
              <Row>
                <Col md="12" className="text-left">
                    <h1>Overview</h1>
                    <hr />
                </Col>
                <div>
                <Col md="7" className="about-us__text">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem.
                    </p>
                </Col>
                    
                </div>
              </Row>
            </Container> 
        </div>
    )
}

export default About;