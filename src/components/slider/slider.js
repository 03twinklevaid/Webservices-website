import React from 'react';
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
      };    
    return (
        <Slider {...settings}>
            <img className="carousel-img" src="https://images.unsplash.com/photo-1535406208535-1429839cfd13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            <img className="carousel-img" src="https://images.unsplash.com/photo-1528146528921-addace760bf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            <img className="carousel-img" src="https://images.unsplash.com/photo-1558805063-ce2c515264e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
            <img className="carousel-img" src="https://images.unsplash.com/photo-1499668407440-2beed1e6876e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
        </Slider>
    )

}
export default SliderComponent;