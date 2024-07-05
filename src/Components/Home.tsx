import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../state/store';
import { increment, decrementAsync } from '../state/reserveCounter/reserveCounterSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginModal from './LoginModal'; // Import the LoginModal component

import PlayIcon from '../assets/icons/Polygon 1.svg';
import Circle from '../assets/img/Rectangle 9.svg';
import Person from '../assets/img/Intersect.svg';
import HotSpicy from '../assets/img/HotSpicy.svg';
import Food1 from '../assets/img/FoodImage1.svg';
import Food2 from '../assets/img/FoodImage2.svg';
import MainDish from '../assets/img/MainDish.svg';
import BreakFast from '../assets/img/breakfast.png';
import Dessert from '../assets/img/desserts.png';
import Juice from '../assets/img/Juice.png';
import Salad1 from '../assets/img/salad1.png';
import Salad2 from '../assets/img/salad2.png';
import Salad3 from '../assets/img/salad3.png';
import Chef from '../assets/img/Chef.png';
import F1 from '../assets/img/feedback1.svg';
import F2 from '../assets/img/feedback2.svg';
import F3 from '../assets/img/feedback3.svg';
import star from '../assets/img/star.svg';
import Catering from '../assets/img/catering.svg';
import FastDelivery from '../assets/img/fastdelivery.svg';
import Online from '../assets/img/online.svg';
import GiftCards from '../assets/img/giftcards.svg';

import Categories from './Categories';
import './Home.css';
import Specials from './Specials';
import Services from './Services';

function Home() {
   
  const reserveCount = useSelector((state: RootState) => state.reserveCounter.value);
  const dispatch: AppDispatch = useDispatch();

  

  function handleReserveClicked() {
    if (confirm("Are you sure you want to reserve?")) {
      if (reserveCount < 21) {
        dispatch(increment());
      } else {
        alert('The Reservation List Is Full. Try Again Later.');
      }
    } else {
      alert("That's sad. Please visit us again soon!");
    }
  }

  

  return (
    <>
      
      <Container className="Top-Container">
        <Row>
          <Col className="Text-Col" md={6}>
            <h1 className="Title Main-Title">
              Dive into Delights Of Delectable 
              <span className="Title-Food">Food</span>
            </h1>
            <h2 className="Title Sub-Title">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
            </h2>
            <div className="B-Div">
              <h4>There Are <span>{reserveCount}</span> People Currently Pending On The Reserve List</h4>
              <button onClick={handleReserveClicked} className="Reserve-Button">Reserve Now</button>
            </div>
          </Col>
          <Col className="image-col" md={6}>
            <div className="image-wrapper">
              <img src={Circle} alt="Decorative Circle" className="circle-img" />
              <img src={Person} alt="Person image" className="person-img" />
              <img src={HotSpicy} alt="HotSpicy" className="spicy-img" />
              <img src={Food1} alt="Food" className="food-img-I" />
              <img src={Food2} alt="Food" className="food-img-II" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="categories-container">
        <p className="top-text">CUSTOMERS FAVORITES</p>
        <p className="bottom-text">Popular Categories</p>
        <div className="categories">
          <Categories image={MainDish} name="Main Dish" stock="86" />
          <Categories image={BreakFast} name="Break Fast" stock="12" />
          <Categories image={Dessert} name="Dessert" stock="48" />
          <Categories image={Juice} name="Browse All" stock="255" />
        </div>
      </div>
      <div className="specials-container">
        <div className="special-text-container">
          <p className="top-text">Special Dishes</p>
          <p className="bottom-text">Standout Dishes From Our Menu</p>
        </div>
        <div className="specials">
          <Specials image={Salad1} name="Fattoush salad" description="Description of the item" price={15} />
          <Specials image={Salad2} name="Vegetable salad" description="Description of the item" price={25} />
          <Specials image={Salad3} name="Egg vegi salad" description="Description of the item" price={35} />
        </div>
      </div>
      <Container className="Mid-Container">
        <Row>
          <Col className="image-col" md={6}>
            <div className="image-wrapper">
              <img src={Circle} alt="Decorative Circle" className="circle-img" />
              <img src={Chef} alt="Person image" className="person-img chef" />
              <img src={HotSpicy} alt="HotSpicy" className="spicy-img" />
            </div>
          </Col>
          <Col className="Text-Col mid-text-col" md={6}>
            <p className="top-text">TESTIMONIALS</p>
            <p className="mid-text">What Our Customers Say About Us</p>
            <p className="mid-description">
              “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
            </p>
            <div style={{ position: 'relative', width: 'fit-content' }}>
              <img src={F1} alt="Portrait" style={{ position: 'absolute', top: 0, left: 0 }} />
              <img src={F2} alt="Portrait" style={{ position: 'absolute', top: -5, left: 50 }} />
              <img src={F3} alt="Portrait" style={{ position: 'absolute', top: -5, left: 100 }} />
            </div>
            <div className="feedback-text-container">
              <p className="feedback-text">Customer Feedback</p>
              <div className="feedback-bottom">
                <img src={star} alt="star" />
                <p className="feedback-text-rating">4.9</p>
                <p className="feedback-rating-text">(18.6K Reviewers)</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="midlow-container">
        <Row>
          <Col className="Text-Col midlow-text-col" md={6}>
            <p className="top-text">OUR STORY & SERVICES</p>
            <p className="mid-text">Our Culinary Journey And Services</p>
            <p className="mid-description">
              Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
            </p>
            <button className="Explore-Button">Explore</button>
          </Col>
          <Col className="service-col">
            <div className="service-col-grid">
              <Services
                name="Catering"
                description="Delight your guests with our flavors and presentation"
                image={Catering}
              />
              <Services
                name="Fast delivery"
                description="We deliver your order promptly to your door"
                image={FastDelivery}
              />
              <Services
                name="Online Ordering"
                description="Explore menu & order with ease using our Online Ordering"
                image={Online}
              />
              <Services
                name="Gift Cards"
                description="Give the gift of exceptional dining with Foodi Gift Cards"
                image={GiftCards}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
