import React from "react";

import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import "./Location.css";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";

function Location() {
  const center = { lat: 35.83768612123824, lng: 10.633649103281218 };
  const zoom = 17;

  return (
    <>
      <NavBar />
      <div className="maps-container">
        <p className="top-text">Welcome</p>
        <p className="bottom-text">You're Welcome To Visit Us At Our Location</p>
        <div className="map-container">
          <MapContainer className="testt" center={center} zoom={zoom}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[35.83772971555592, 10.63366564957467]}>
              <Popup>Come Visit</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Location;
