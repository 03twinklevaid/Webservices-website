import React,{Component} from 'react';
import './nav.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            activeClass: ''
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
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
        return (
            <Navbar variant="dark" expand="lg" fixed="top" className={`${this.state.activeClass}`}>
            <Navbar.Brand href="/">
              <span className="logo">AT</span>
              <span className="text">tech</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="#home">HOME</Nav.Link>
                  <Nav.Link href="#link">ABOUT US</Nav.Link>
                  <Nav.Link href="#services">SERVICES</Nav.Link>
                  <Button variant="outline-success ml-2">CONTACT US</Button>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Navigation;