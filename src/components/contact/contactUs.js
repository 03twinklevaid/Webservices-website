import React from 'react';
import './contactUs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
    return (
        <Container fluid>
            <Row className="contact-us-wrapper">
                <Col md="12" className="contact-us-banner p-0">
                    <img src={require('../../images/Contact-Us.png')} />
                    <h1 className="overlay-text">Contact Us</h1>
                    {/* <h6 className="overlay-text-content">
                        Want to get in touch?We'd love to hear from you.Here's how you can reach us...
                    </h6> */}
                </Col>
                <Col md="4" className="contact-card-call">
                    <Col md="12" className="offerings-img-wrapper d-flex">
                        <img src={require('../../images/dropdown-icon1.png')} />
                    </Col>
                    <Col>
                        <h5>
                            <strong>
                                Talk to us
                            </strong>
                        </h5>
                        <p className="fs-14">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        </p>
                        <p>
                            +91 987654321
                        </p>
                    </Col>
                </Col>
                <Col md="4" className="contact-card-email">
                    <Col md="12" className="offerings-img-wrapper d-flex">
                        <img src={require('../../images/dropdown-icon1.png')} />
                    </Col>
                    <Col>
                        <h5>
                            <strong>
                                Email us
                            </strong>
                        </h5>
                        <p className="fs-14"> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        </p>
                        <button className="email-us-btn">
                            Email us
                        </button>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}
export default Contact;