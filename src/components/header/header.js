import React,{Component} from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useSelector} from 'react-redux';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            activeClass: ''
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            console.log("offset", window.scrollY);
            if(window.scrollY > 520) {
                this.setState({
                    activeClass: 'header-bg'
                })
            }
            else if(window.scrollY < 520) {
                this.setState({
                    activeClass: ''
                })
            }
        });
    }
    render() {
        console.log("state", this.state)
        return (
            <Row className={`header-wrapper ${this.state.activeClass}`}>
            <Col md="6" className="d-flex">
                <Col md="3" sm="3" xs="3" className="header-Content">
                    <strong><h6>HOME</h6></strong>
                </Col>
                <Col md="3" sm="3" xs="3" className="header-Content">
                    <strong><h6>ABOUT US</h6></strong>
                </Col>
                <Col md="3" sm="3" xs="3" className="header-Content">
                    <strong><h6>SERVICES</h6></strong>
                </Col>
                <Col md="3" sm="3" xs="3" className="contact-btn header-Content">
                    <button>
                        <strong>
                            CONTACT
                        </strong>
                    </button>
                </Col>
            </Col>
        </Row>
        )
    }
}
export default Header;