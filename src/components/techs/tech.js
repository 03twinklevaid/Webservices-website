import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './tech.scss';
const Technologies = () =>{
    return (
        <div className="techs">
            {/* <img src={require('../../images/bg-bottom-transparent.svg')} alt="technology section"/> */}
            <Container>
                    <Row>
                        <Col md="12" className="tech-section-heading text-left">
                            <h1> Technology stack</h1>
                            <hr className="hr-tech" />
                        </Col>
                        <Col className="tech-section-content">
                            <Row className="tech-content-wrapper mb-4">
                                <Col md="2" sm="6" xs="6" className="icon-wrapper">
                                    <img className="img-fluid" src={require('../../images/Node.js_logo.svg')} />
                                </Col>
                                <Col md="2" sm="6" xs="6" className="icon-wrapper">
                                    <img className="img-fluid" src={require('../../images/ruby.svg')} />
                                </Col>
                                <Col md="2" sm="6" xs="6" className="icon-wrapper">
                                    <img className="img-fluid" src={require('../../images/mongodb-green-png-download-750750-free-transparent-mongodb-mongodb-png-900_760.jpg')} />
                                </Col>
                                <Col md="2" sm="6" xs="6" className="icon-wrapper">
                                    <img className="img-fluid" src={require('../../images/blockchain.jpg')} />
                                </Col>
                            </Row>
                            <Row className="tech-content-wrapper">
                                <Col md="2" sm="6" xs="6" className="icon-wrapper">
                                    hh
                                    <br/>
                                    jj
                                    <br />
                                </Col>
                                <Col md="2" sm="6" xs="6" className="icon-wrapper">
                                    uu
                                </Col>
                                <Col md="2" sm="6" xs="6" className="icon-wrapper">
                                    pp
                                </Col>
                                <Col md="2" sm="6" xs="6" className="icon-wrapper">
                                    rr
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}
export default Technologies;