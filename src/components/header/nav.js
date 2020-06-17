import React,{Component} from 'react';
import './header.css';
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
            <Navbar expand="lg" fixed="top" className={`${this.state.activeClass}`}>
            <Navbar.Brand href="#home">WebServices</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav className="ml-3 mt-2">
                    HOME
                </Nav>
                <Nav className="ml-3 mt-2">
                    ABOUT US
                </Nav>
                <Nav className="ml-3 mt-2">
                    SERVICES
                </Nav>
                <Form inline className="ml-3">
                    <Button variant="outline-success">
                        Contact us
                    </Button>
                </Form>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default Navigation;