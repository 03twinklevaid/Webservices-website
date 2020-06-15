import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './slider.css';
const SliderComponent = () => {
    const settings = {
        arrows: false,
        adaptiveHeight: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        fade: false,
      };    
    return (
        <Row>
            <Col md="12" className="p-0">
                <Slider {...settings}>
                    <div className="d-flex carousel">
                        <div className="carousel-img-wrapper">
                            <img className="carousel-img" src="https://static1.tothenew.com/sites/default/files/styles/banner_image_inner_large/public/2020-04/header_banner_bg.png?itok=h5Owzsgr" />
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
                    </div>
                </Slider>
            </Col>
        </Row>
    )

}
export default SliderComponent;