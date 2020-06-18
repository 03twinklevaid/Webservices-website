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
                                {/* <Col md="2" sm="6" xs="6" className="icon-wrapper">
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
                                </Col> */}
                            </Row>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}
export default Technologies;