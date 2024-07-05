import React from 'react'
import Specials from '../Components/Specials'
import Salad1 from '../assets/img/salad1.png';
import "./Dish.css"

function Dessert() {
  return (
    <div className='dish-container'>
      <Specials image={Salad1} name='Dessert1' description='Description De Dessert' price={35} />
      <Specials image={Salad1} name='Dessert2' description='Description De Dessert' price={25} />
      <Specials image={Salad1} name='Dessert3' description='Description De Dessert' price={15} />
      <Specials image={Salad1} name='Dessert4' description='Description De Dessert' price={5} />
    </div>
  )
}

export default Dessert