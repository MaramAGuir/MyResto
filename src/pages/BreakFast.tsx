import React from 'react'
import Specials from '../Components/Specials'
import Salad1 from '../assets/img/salad1.png';
import "./Dish.css"

function BreakFast() {
  return (
    <div className='dish-container'>
      <Specials image={Salad1} name='BreakFast1' description='Description de BraekFast' price={35} />
      <Specials image={Salad1} name='BreakFast2' description='Description de BraekFast' price={25} />
      <Specials image={Salad1} name='BreakFast3' description='Description de BraekFast' price={15} />
      <Specials image={Salad1} name='BreakFast4' description='Description de BraekFast' price={5} />
    </div>
  )
}

export default BreakFast