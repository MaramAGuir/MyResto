import React from 'react'
import "./Dish.css"
import Specials from '../Components/Specials'
import Salad1 from '../assets/img/salad1.png';

function MainDishes() {
  return (
    <div className='dish-container'>
      <Specials image={Salad1} name='MainDish1' description='description de main' price={35} />
      <Specials image={Salad1} name='MainDish2' description='description de main' price={25} />
      <Specials image={Salad1} name='MainDish3' description='description de main' price={15} />
      <Specials image={Salad1} name='MainDish4' description='description de main' price={5} />
    </div>
  )
}

export default MainDishes