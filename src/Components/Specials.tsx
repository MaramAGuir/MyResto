import React from "react";
import "./Specials.css";
import { useDispatch } from "react-redux";
import { CartItem, addToCart } from "../state/Cart/cartSlice"; // Adjust the path as per your actual setup

interface SpecialsProps {
  
  image: string;
  name: string;
  description: string;
  price: number;
}

const Specials: React.FC<SpecialsProps> = ({
  
  image,
  name,
  description,
  price,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newItem: CartItem = {
      id: name,
      image: image,
      name: name,
      price: price,
      quantity: 1, // Start with quantity 1 when adding to cart
    };

    dispatch(addToCart(newItem));
  };

  return (
    <div className="special-container" onClick={handleAddToCart}>
      <div className="special-image-container">
        <img className="special-image" src={image} alt={name} />
      </div>
      <p className="special-name">{name}</p>
      <p className="special-description">{description}</p>
      <p className="special-price">
        <span className="dollar-sign">$</span>
        {price}
      </p>
    </div>
  );
};

export default Specials;
