import React from 'react';
import './contactUs.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-banner" >
                <Container>
                    <Col md="12" className="text-right">
                        <h1>Contact Us</h1>
                        <hr className="contact-hr"/>
                    </Col>                    
                </Container>
            </div>
            <Container>
            <Row className="contact-us-wrapper">
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
                            <a href="tel:+91 8860585403">+91 8860585403</a>
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
                            <a href="mailto:twinkle.vaid@gmail.com" target="_blank">Send Email</a>
                        </button>
                    </Col>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
export default Contact;