import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './slider.scss';
import GLOBE from 'vanta/dist/vanta.globe.min';

// const SliderComponent = () => {
class SliderComponent extends Component {
    settings = {
        arrows: false,
        adaptiveHeight: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        fade: true,
    };

    constructor() {
        super();
    }

    componentDidMount() {
        this.vantaEffect = GLOBE({
            el: '.globe-bg',
            mouseControls: true,
            touchControls: true,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00
        });
    }

    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy();
    }

    render() {
        return (
            <Row>
                <div className="globe-bg">
                    {/* Foreground content goes here */}
                </div>
                <Col md="12" className="p-0">
                    <div id="globe-bg"></div>
                    <Slider {...this.settings}>
                        <div id="slide1" className="carousel-item">
                            <div className="carousel-item-content">
                                <h1>AAAA</h1>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item">

                        </div>
                        <div id="slide3" className="carousel-item">

                        </div>
                        <div id="slide4" className="carousel-item">

                        </div>
                    </Slider>
                </Col>
            </Row>
        )
    }
}
export default SliderComponent;

{/* <div className="d-flex carousel">
    <div className="carousel-img-wrapper">
        <img className="carousel-img" src={require('../../images/green-potted-plant-on-white-ceramic-vase-1166644.jpg')} />
    </div>
    <div className="carousel-content">
        <h2>This is Screen 1</h2>
    </div>
</div>
<div className="d-flex carousel">
    <div className="carousel-img-wrapper">
        <img className="carousel-img" src="https://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2016-07/Success-Stories.jpg?itok=-cwgxevq" />
    </div>
    <div className="carousel-content">
        <h2>This is Screen 2</h2>
    </div>
</div>
<div className="d-flex carousel">
    <div className="carousel-img-wrapper">
        <img className="carousel-img" src="https://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2019-04/ecom-banner.png?itok=KUKM6bLi" />
    </div>
    <div className="carousel-content">
        <h2>This is Screen 3</h2>
    </div>
</div>
<div className="d-flex carousel">
    <div className="carousel-img-wrapper">
        <img className="carousel-img" src="https://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2016-07/Technology_0.jpg?itok=ndptHTsi" />
    </div>
    <div className="carousel-content">
        <h2>This is Screen 4</h2>
    </div>
</div> */}