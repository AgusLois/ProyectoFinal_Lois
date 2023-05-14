import React, { useState, useContext } from "react";
import "./navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import {
  Container,
  Nav,
  Navbar,
  Badge,
  Button,
  Offcanvas,
  Stack,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { CartContext } from "../context/CartContext";

export const NavBar = () => {
  const { calcularCantidad, precioTotal } = useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar className="nav">
        <Container style={{ marginTop: "0px" }}>
          <Navbar.Brand>
            <Link className="navStyle" to="/">
              Pixel
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Link className="navStyle" to="/productos/clothes">
                Ropa
              </Link>
              <Link className="navStyle" to="/productos/shoes">
                Zapatos
              </Link>
              <Link className="navStyle" to="/productos/accesories">
                Accesorios
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Button variant="outline-dark" onClick={handleShow}>
                <span className="position-relative">
                  <CartWidget />
                  <Badge
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    bg="danger"
                  >
                    {calcularCantidad()}
                  </Badge>
                </span>
              </Button>
              <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Mi Carrito</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Cart />
                </Offcanvas.Body>
                <div className="modal-footer sidebar-cart-footer shadow">
                  <div className="w-100">
                    <strong className="m-4">Subtotal: ${precioTotal()}</strong>
                    <hr />
                    <div className="d-grid gap-3">
                      <Stack gap={2} className="col-md-5 mx-auto w-50 h-50">
                        <Button className="m-3" variant="dark">
                          <Link className="linkStyle" to="/checkout">
                            Finalizar compra
                          </Link>
                        </Button>
                      </Stack>
                    </div>
                  </div>
                </div>
              </Offcanvas>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
