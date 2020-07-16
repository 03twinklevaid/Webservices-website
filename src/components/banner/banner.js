import React, { Component } from 'react';
import './banner.scss';
import { Sections } from '../../shared/js/constants';
import Container from 'react-bootstrap/Container';

class Banner extends Component {
	render() {
		return (
			<div className="banner" data-section={Sections.Banner} data-aos="fade-down">
        <Container>
          <div className="banner-content">
            <h1 data-aos="fade-right" data-aos-delay="500">We make digital</h1>
            <h1 className="big-text" data-aos="fade-right" data-aos-delay="1500">& magical…</h1>  
            {/* <div className="animated-text-wrapper">
              <h1 className="animated-text">Products</h1>
              <div className="animated-text-overlay"></div>
            </div> */}
            <h1 data-aos="fade-up" data-aos-delay="2000">PRODUCTS</h1>
            <h1 data-aos="fade-up" data-aos-delay="2500">BRANDS</h1>
            <h1 data-aos="fade-up" data-aos-delay="3000">EXPERIENCES</h1>
          </div>
        </Container>
			</div>
		)
	}
}

export default Banner;