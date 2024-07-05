import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import logo from "../assets/logo/logo.png";
import BasketIcon from "../assets/icons/Basket.svg";
import { Link } from "react-router-dom";
import Cart from "./Cart"; // Import Cart component
import { useSelector } from "react-redux";
import { RootState } from "../state/store"; // Adjust path as per your project structure

function NavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary bg-body-secondary"
    >
      <Container fluid className="nav-container">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="router-link" to="/">
              Home
            </Link>
            <Link className="router-link" to="/Dishes">
              Menu
            </Link>
            <NavDropdown title="Offers" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Map">Location</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Delivery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Coming Soon
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Nothing Here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="right-nav">
            <Nav.Link eventKey={2} href="#memes">
              <div className="basket-container" onClick={handleToggleCart}>
                <img
                  className="basket-icon"
                  alt="basket-icon"
                  src={BasketIcon}
                />
                <p className="basket-text">{totalQuantity}</p> {/* Update the cart count */}
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {isCartOpen && <Cart onClose={handleCloseCart} />}
    </Navbar>
  );
}

export default NavBar;
