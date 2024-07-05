import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Categories from '../Components/Categories'
import "./Dishes.css"

import MainDish from '../assets/img/MainDish.svg';
import BreakFast from '../assets/img/breakfast.png';
import Dessert from '../assets/img/desserts.png';
import Juice from '../assets/img/Juice.png';
import { Outlet } from 'react-router-dom'

function Dishes() {
  return (
    <>
      <NavBar />
      <div className='dishes-categories'>
        <Categories className="dishes-categorie" image={MainDish} name="Main Dish" stock="86" />
        <Categories className="dishes-categorie" image={BreakFast} name="Break Fast" stock="12" />
        <Categories className="dishes-categorie" image={Dessert} name="Dessert" stock="48" />
        <Categories className="dishes-categorie" image={Juice} name="Browse All" stock="255" />
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
      

      <Footer />
    </>
  )
}

export default Dishes