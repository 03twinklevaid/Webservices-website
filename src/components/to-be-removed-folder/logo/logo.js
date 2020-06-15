import React from 'react';
import './logo.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Logo = () => {
    return (
        <Row>
            <Col md="12" className="logo-hr">
                <hr />
            </Col>
            <Col md="12 logo-color">
                <h2>Twinkle.com</h2>
            </Col>
            <Col md="12 logo-color">
                <h6>Website Development Company</h6>
            </Col>
        </Row>
    )
}
export default Logo;