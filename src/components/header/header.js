import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useSelector} from 'react-redux';

const Header = () => {
    const isShowHome = useSelector(state => state.homeReducer.showHome)
    return (
        <Row className="header-wrapper">
            <Col md="3" sm="3" xs="3" className="header-Content">
                <strong><h6>HOME</h6></strong>
            </Col>
            <Col md="3" sm="3" xs="3" className="header-Content">
                <strong><h6>ABOUT US</h6></strong>
            </Col>
            <Col md="3" sm="3" xs="3" className="header-Content">
                <strong><h6>OUR SERVICES</h6></strong>
            </Col>
            <Col md="3" sm="3" xs="3" className="contact-btn header-Content">
                <button>
                    <strong>
                        CONTACT
                    </strong>
                </button>
            </Col>
        </Row>
    )
}
export default Header;