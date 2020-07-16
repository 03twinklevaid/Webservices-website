import React from 'react';
import './contactUs.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aos from 'aos';
import { Sections } from '../../shared/js/constants';

const Contact = () => {
    return (
        <div className="contact" data-section={Sections.AboutUs}>
            <div className="contact-banner" >
                <Container>
                    <Col md="12" className="text-right contact-banner__text"  data-aos="fade-right">
                        <h1>Contact Us</h1>
                        <hr className="contact-hr"/>
                    </Col>                    
                </Container>
            </div>
            <Container>
            <Row className="contact-us-wrapper">
                <Col md="5" className="contact-card mr-4">
                    <Col md="12" className="offerings-img-wrapper d-flex">
                        <img src={require('../../images/dropdown-icon1.png')} />
                    </Col>
                    <Col>
                        <h5>
                            <strong>
                                Talk to us
                            </strong>
                        </h5>
                        <p>
                            <a href="tel:+91 8860585403">+91 8860585403</a>
                        </p>
                    </Col>
                </Col>
                <Col md="5" className="contact-card ml-4">
                    <Col md="12" className="offerings-img-wrapper d-flex">
                        <img src={require('../../images/dropdown-icon1.png')} />
                    </Col>
                    <Col>
                        <h5>
                            <strong>
                                Email us
                            </strong>
                        </h5>
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