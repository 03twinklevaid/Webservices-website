import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './slider.scss';
import { Sections } from '../../shared/js/constants';

class SliderComponent extends Component {
  settings = {
    arrows: false,
    adaptiveHeight: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    fade: true,
    // beforeChange: (current, next) => { },
    // afterChange: (current) => this.props.updateBackground(`slide-${current}`)
  };

  sectionSlideMap = {
    [Sections.Banner]: 0,
    [Sections.AboutUs]: 1,
    [Sections.Technologies]: 2,
    [Sections.Offerings]: 3,
    [Sections.ContactUs]: 4,
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.activeSection !== this.props.activeSection) {
      this.slider.slickGoTo(this.sectionSlideMap[nextProps.activeSection]);
    }
  }

  render() {
    return (
      <Slider ref={slider => (this.slider = slider)} {...this.settings} >
        <div id="slide1" className="slider-item"></div>
        <div id="slide2" className="slider-item"></div>
        <div id="slide3" className="slider-item"></div>
        <div id="slide4" className="slider-item"></div>
        <div id="slide5" className="slider-item"></div>
      </Slider>
    )
  }
}
export default SliderComponent;