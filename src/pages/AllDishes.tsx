import React from 'react'
import Specials from '../Components/Specials'
import Salad1 from '../assets/img/salad1.png';
import "./Dish.css"

function AllDishes() {
  return (
    <div className='dish-container'>
      <div className='dish-container'>
      <Specials image={Salad1} name='MainDish1' description='description de main' price={35} />
      <Specials image={Salad1} name='MainDish2' description='description de main' price={25} />
      <Specials image={Salad1} name='MainDish3' description='description de main' price={15} />
      <Specials image={Salad1} name='MainDish4' description='description de main' price={5} />
      <Specials image={Salad1} name='BreakFast1' description='Description de BraekFast' price={35} />
      <Specials image={Salad1} name='BreakFast2' description='Description de BraekFast' price={25} />
      <Specials image={Salad1} name='BreakFast3' description='Description de BraekFast' price={15} />
      <Specials image={Salad1} name='BreakFast4' description='Description de BraekFast' price={5} />
      <Specials image={Salad1} name='Dessert1' description='Description De Dessert' price={35} />
      <Specials image={Salad1} name='Dessert2' description='Description De Dessert' price={25} />
      <Specials image={Salad1} name='Dessert3' description='Description De Dessert' price={15} />
      <Specials image={Salad1} name='Dessert4' description='Description De Dessert' price={5} />
    </div>
    </div>
  )
}

export default AllDishes