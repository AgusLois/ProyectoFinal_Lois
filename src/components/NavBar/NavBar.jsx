import React, { useState } from "react";
import "./navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import {
  Container,
  Nav,
  Navbar,
  Badge,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar collapseOnSelect className="nav">
        <Container className="justify-content-center">
          <Link className="navStyle" to="/">
            Pixel
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="navStyle" to="/productos/clothes">
                Ropa
              </Link>
              <Link className="navStyle" to="/productos/shoes">
                Zapatos
              </Link>
              <Link className="navStyle" to="/productos/shoes">
                Accesorios
              </Link>
            </Nav>
            <Nav>
              <Button onClick={handleShow}>
                <CartWidget /> <Badge bg="danger">3</Badge>
              </Button>
              <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Mi Carrito</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Aca va a ir una vista previa del carrito proximamente
                </Offcanvas.Body>
              </Offcanvas>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
