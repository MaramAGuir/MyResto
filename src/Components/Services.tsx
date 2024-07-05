import React from "react";
import "./Services.css"

function Services(props: any) {
  return (
    <div className="service-container">
      <div className="service-image-container">
        <img className="service-image" src={props.image} alt={props.name} />
      </div>

      

      <p className="service-name">{props.name}</p>
      <p className="service-description">{props.description}</p>
    </div>
  );
}

export default Services;
