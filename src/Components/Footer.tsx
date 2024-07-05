import React from 'react'
import "./Footer.css"
import { Col, Container, Row } from 'react-bootstrap'

import logo from "../assets/logo/logo.png";
import facebook from "../assets/img/facebook.svg" ;
import instagram from "../assets/img/instagram.svg" ;
import twitter from "../assets/img/twitter.svg" ;
import youtube from "../assets/img/youtube.svg" ;

function Footer() {
  return (
    <>
      <Container className='footer-container'>
        <Row>
          <Col md={3}>
            <img className='logo-image' src={logo} alt="logo" />

            <p className="mid-description-footer">Savor the artistry where every dish is a culinary masterpiece</p>
          </Col>
          <Col md={3} >
            <p>Usefull Links</p>
            <p>About Us</p>
            <p>Events</p>
            <p>Blogs</p>
            <p>FAQ</p>
          </Col>
          <Col md={3}>
            <p>Main Menu</p>
            <p>Home</p>
            <p>Offers</p>
            <p>Menu</p>
            <p>Reservation</p>
          </Col>
          <Col md={3}>
            <p>Contact Us</p>
            <p>Example@gmail.com</p>
            <p>+216 12 345 678</p>
            <p>Social Media</p>
          </Col>
        </Row>
      </Container>
      <div className="Footer-Media">
        <div className="social-image-container facebook-container">
          <img src={facebook} alt="" />
        </div>
        <div className="social-image-container">
          <img src={instagram} alt="" />
        </div>
        <div className="social-image-container">
          <img src={twitter} alt="" />
        </div>
        <div className="social-image-container">
          <img src={youtube} alt="" />
        </div>
        <p className="copyright-text">Copyright   ©     2023 Dscode | All rights reserved</p>
      </div>
    </>
  )
}

export default Footer