import React from 'react';
import './welcome.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../header/header';
import '../../../node_modules/hover.css/css/hover.css';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {showHomeScreen} from '../../redux/actions/action';
const Welcome = () => {
    const dispatch = useDispatch();
    // const isShowHome = useSelector(state => state.showHome)
    return (
        <div className="features">
            <Row className="features-header">
                <Col md={{span:10, offset:1}}>
                    <Header></Header>
                </Col>
            </Row>
            <Row className="features-text-heading">
                <Col md={{span:1, offset:1}} className="text-shadow">
                    <h4><strong>Welcome</strong></h4>
                </Col>
            </Row>
            <Row>
                <Col md={{span:8, offset:1}} className="mb-10">
                    <p className="features-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={{span:1, offset:1}} className="text-shadow">
                    <strong>twinkle.vaid@gmail.com </strong>
                </Col>
            </Row>
            <Row>
                <Col md={{span:3, offset:1}} className="mb-10 text-shadow">
                    <strong>123-456-789</strong>
                </Col>
            </Row>
            <Link to="/home">
            <div className="features-overlay" onClick = {() => dispatch(showHomeScreen())}>
                <Row className="features-overlay-heading">
                    <Col md={{span:10, offset:1}} className="text-shadow">
                        <h2>Welcome</h2>
                    </Col>
                </Row>
                <Row className="features-overlay-text">
                    <Col md={{span:10, offset:1}} className="text-shadow">
                        <h6>Thanks for visiting us, click here for more...</h6>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" className="features-overlay-hr">
                        <hr />
                    </Col>
                </Row>
            </div>
            </Link>
        </div>
    )
}
export default Welcome;