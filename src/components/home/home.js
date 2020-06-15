import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../header/header';
import SliderComponent from '../slider/slider';
import Contact from '../contact/contactUs';
import Container from 'react-bootstrap/Container';
import {viewOfferings} from '../../redux/actions/action';
import {viewLess} from '../../redux/actions/action';
import './home.css';
import {useSelector, useDispatch} from 'react-redux';
import Technologies from '../techs/tech';
const Home = () => {
    const isShowHome = useSelector(state => state.homeReducer.showHome);
    const isviewOfferings = useSelector(state => state.viewOfferings.viewOfferings)
        
    const dispatch = useDispatch();
    return (
        <Container fluid>
            <Row>
                <Col md="12">
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <SliderComponent />
                </Col>
            </Row>
            <Row className="home-image">
                <Col md="12">
                    <img src={require('../../images/creative-process.gif')} alt="creative gif"/>
                </Col>
                <Col md = "12" className="home-image-overlay-typewriter">
                    <h6>Welcome to Twinkle.com</h6>
                </Col>
            </Row>
            <Row className="home-hr">
                <Col md="12">
                    <hr />
                </Col>
                <Col md="12">
                    <h1>Overview</h1>
                </Col>
                <Col md="12" className="our-services-text">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                    </p>
                </Col>
                <Col md="12">
                    <Technologies />
                </Col>
                <Col md="12" className="our-offerings">
                    <Col md="12" className="home-hr">
                        <hr />
                    </Col>
                    <Col md="12">
                        <h1>Our Offerings</h1>
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
                        isviewOfferings ? 
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
                                <button onClick={()=> dispatch(viewLess())}> 
                                    View Less 
                                </button>
                            </Col>
                        </Row> :                        
                        <Row className="p-20">
                            <Col md="12" className="offerings-btn-margin view-all-offerings">
                                <button onClick={()=> dispatch(viewOfferings())}> 
                                    View all Offerings 
                                </button>
                            </Col>
                        </Row>
                    }
                </Col>
                <Col md="12" className="p-0">
                    <Contact />
                </Col>
            </Row>
        </Container>
    )
}
export default Home;