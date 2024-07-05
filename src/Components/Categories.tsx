import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Categories.css'

function Categories(props : any) {

  const navigate = useNavigate();

  function handleCategorieClicked() {
    switch (props.name) {
      case 'Main Dish':
        return navigate("/Dishes/Main") ;
      case 'Break Fast':
        return navigate("/Dishes/Break_Fast") ;
      case 'Dessert':
        return navigate("/Dishes/Dessert") ;
      case 'Browse All' :
        return navigate("/Dishes/All")
      default:
        return navigate("/Dishes") ;
    }
  } 

  return (
    <div onClick={handleCategorieClicked} className='categorie-container'>
      <div className='categorie-image-container'>
        <img className='categorie-image' src={props.image} alt={props.name} />  
      </div>

      <p className='categorie-name'>{props.name}</p>
      <p className="categorie-stock">({props.stock} dishes)</p>
    </div>
  )
}


export default Categories;