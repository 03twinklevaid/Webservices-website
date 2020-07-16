import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './tech.scss';
import { Sections } from '../../shared/js/constants';
const Technologies = () => {
  return (
    <div className="tech" data-section={Sections.Technologies}>
      {/* <img src={require('../../images/bg-bottom-transparent.svg')} alt="technology section"/> */}
      <Container>
        <Row>
          <Col md="12" className="tech__heading" data-aos="fade-left" data-aos-delay="500">
            Technology stack
          </Col>
          <div className="text__icons-wrapper">
            <div className="tech__icon" data-aos="zoom-in" data-aos-delay="800">
              <img className="img-fluid  align-self-start" src={require('../../images/ror.png')} alt="a"/>
            </div>
            <div className="tech__icon" data-aos="zoom-in" data-aos-delay="1000">
              <img className="img-fluid" src={require('../../images/Node.js_logo.svg')} alt="a"/>
            </div>
            <div className="tech__icon" data-aos="zoom-in" data-aos-delay="1200">
              <img className="img-fluid" src={require('../../images/angular-1.svg')} alt="a"/>
            </div>
            <div className="tech__icon" data-aos="zoom-in" data-aos-delay="1400">
              <img className="img-fluid" src={require('../../images/react-1.png')} alt="a"/>
            </div>
            <div className="tech__icon" data-aos="zoom-in" data-aos-delay="200">
              <img className="img-fluid" src={require('../../images/bitcoin.png')} alt="a"/>
            </div>
            <div className="tech__icon" data-aos="zoom-in" data-aos-delay="400">
              <img className="img-fluid" src={require('../../images/electron.svg')} alt="a"/>
            </div>
            <div className="tech__icon" data-aos="zoom-in" data-aos-delay="600">
              <img className="img-fluid" src={require('../../images/uiux.svg')} alt="a"/>
            </div>
            <div className="tech__icon" data-aos="zoom-in" data-aos-delay="800">
              <img className="img-fluid" src={require('../../images/react.svg')} alt="a"/>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}
export default Technologies;