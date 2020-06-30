import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Header from '../header/header';
import Navigation from '../header/nav';
import About from '../aboutus/aboutus';
import Technologies from '../techs/tech';
import SliderComponent from '../slider/slider';
import Contact from '../contact/contactUs';
import Container from 'react-bootstrap/Container';
import { viewOfferings } from '../../redux/actions/action';
import { viewLess } from '../../redux/actions/action';
import './home.scss';
import { connect } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            activeScrollTop: ''
        }
    }

    componentDidMount() {
        AOS.init({
            duration: 2000,
            offset: 200,
        });
        window.addEventListener('scroll', () => {
            if (window.scrollY > 572) {
                this.setState({
                    activeScrollTop: 'active'
                })
            }
            else if (window.scrollY < 572) {
                this.setState({
                    activeScrollTop: ''
                })
            }
        });
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    render() {
        return (
            <Container fluid>
                <Navigation />
                <SliderComponent />
                {/* <Row className="home-image">
                    <Col md="12">
                        <img src={require('../../images/creative-process.gif')} alt="creative gif"/>
                    </Col>
                    <Col md = "12" className="home-image-overlay-typewriter">
                        <h6>Welcome to Twinkle.com</h6>
                    </Col>
                </Row> */}
                <About />
                <Technologies />
                <Row className="home-hr">
                    <Col md="12" className="our-offerings">
                        <Col md="12" className="text-left">
                            <h1>Our Offerings</h1>
                            <hr />
                        </Col>
                        <Row className="p-20">
                            <Col md="4">
                                <Row className="p-20">
                                    <Col md="12" className="offerings-img-wrapper d-flex">
                                        <img src={require('../../images/dropdown-icon2.png')} />
                                    </Col>
                                    <Col md="12">
                                        <h5>
                                            <strong>
                                                Web Application Development
                                            </strong>
                                        </h5>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md="4">
                                <Row className="border-left p-20">
                                    <Col md="12" className="offerings-img-wrapper d-flex">
                                        <img src={require('../../images/dropdown-icon3.png')} />
                                    </Col>
                                    <Col>
                                        <h5>
                                            <strong>
                                                E-commerce Solutions
                                            </strong>
                                        </h5>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md="4">
                                <Row className="border-left p-20">
                                    <Col md="12" className="offerings-img-wrapper d-flex">
                                        <img src={require('../../images/dropdown-icon1.png')} />
                                    </Col>
                                    <Col>
                                        <h5>
                                            <strong>
                                                Responsive Web Designing
                                            </strong>
                                        </h5>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Col md="12" className="home-offerings-hr">
                            <hr />
                        </Col>
                        {
                            this.props.isviewOfferings ?
                                <Row className="p-20">
                                    <Col md="4">
                                        <Row className="p-20">
                                            <Col md="12" className="offerings-img-wrapper d-flex">
                                                <img src={require('../../images/dropdown-icon1.png')} />
                                            </Col>
                                            <Col>
                                                <h5>
                                                    <strong>
                                                        Responsive Web Designing
                                                </strong>
                                                </h5>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="4">
                                        <Row className=" border-left p-20">
                                            <Col md="12" className="offerings-img-wrapper d-flex">
                                                <img src={require('../../images/dropdown-icon1.png')} />
                                            </Col>
                                            <Col>
                                                <h5>
                                                    <strong>
                                                        Responsive Web Designing
                                                </strong>
                                                </h5>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="4">
                                        <Row className="border-left p-20">
                                            <Col md="12" className="offerings-img-wrapper d-flex">
                                                <img src={require('../../images/dropdown-icon1.png')} />
                                            </Col>
                                            <Col>
                                                <h5>
                                                    <strong>
                                                        Responsive Web Designing
                                                </strong>
                                                </h5>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="12" className="offerings-btn-margin view-less">
                                        <button onClick={() => this.props.viewLess()}>
                                            View Less
                                    </button>
                                    </Col>
                                </Row> :
                                <Row className="p-20">
                                    <Col md="12" className="offerings-btn-margin view-all-offerings">
                                        <button onClick={() => this.props.viewOfferings()}>
                                            View all Offerings
                                    </button>
                                    </Col>
                                </Row>
                        }
                    </Col>
                    <Contact />
                    <div className={`scroll-to-top ${this.state.activeScrollTop}`} onClick={this.scrollTop}>
                        <span className="material-icons-round">
                            keyboard_arrow_up
                      </span>
                    </div>
                </Row>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        isviewOfferings: state.viewOfferings.viewOfferings
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        viewLess: () => {
            dispatch(viewLess())
        },
        viewOfferings: () => {
            dispatch(viewOfferings())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);