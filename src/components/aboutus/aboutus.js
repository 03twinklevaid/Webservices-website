import React, { Component } from 'react';
import './aboutus.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aos from 'aos';
import { Sections } from '../../shared/js/constants';

class About extends Component {
  constructor() {
    super();
  }

  componentWillReceiveProps() {
    Aos.refresh();
  }

  render() {
    return (
      <div className="about-us" data-section={Sections.AboutUs}>
        <Container>
          <Row>
            {/* <Col md="12" data-aos="fade-up">
              <h1 className="about-us__heading">Overview</h1>
            </Col> */}
            <Col md="12" className="about-us__text" data-aos="fade-left" data-aos-delay="500">
              Leading digital agency with solid design and development expertise. We build websites, mobile applications, and elaborate online business services.
            </Col>
            <Col md="12" className="about-us__image" data-aos="fade-right" data-aos-delay="1000">
              <img src={require('../../images/mockup3.png')} alt="About Us" className="img-fluid"/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default About;