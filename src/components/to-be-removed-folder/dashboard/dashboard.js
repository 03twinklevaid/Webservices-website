import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../logo/logo';
import Welcome from '../../welcome/welcome';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
        <Container>
          <Row className="border">
            <Col className="logo">
              <Logo></Logo>
            </Col>
            <Col className="welcome">
              <Welcome></Welcome>
            </Col>
          </Row>
          <Row>
            <Col md={{span:3, offset:4}} className="stand-neck">
            </Col>
          </Row>
          <Row>
            <Col md="12" className="stand-base">
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Dashboard;