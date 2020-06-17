import React from 'react';
import './aboutus.css';
import Technologies from '../techs/tech';
import Col from 'react-bootstrap/Col';

const About = () => {
    return(
        <div>
            <Col md="12">
                <h1>Overview</h1>
            </Col>
            <Col md="12" className="our-services-text">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                </p>
            </Col>
            <Col md="12" className="p-0">
                <Technologies />
            </Col>
        </div>
    )
}

export default About;