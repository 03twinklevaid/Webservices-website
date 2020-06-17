import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './tech.css';
const Technologies = () =>{
    return (
        <Container fluid>
            <Row className="tech-section">
                <Col md="12" className="tech-section-bg">   
                </Col>
                <Col md="12">
                    <img src={require('../../images/bg-bottom-transparent.svg')} alt="technology section"/>
                </Col>
                <Col md="6" className="tech-section-heading">
                    <h1 className="tech-section-heading"> Technology stack</h1>
                </Col>
                <Col md={{span:"5", offset:"7"}} className="tech-section-content">
                    <Row className="tech-content-wrapper mb-4">
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
    )
}
export default Technologies;