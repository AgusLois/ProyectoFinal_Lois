import React, { useContext } from "react";
import { Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { CartContext } from "../context/CartContext";
import "./cart.css";

export const Cart = () => {
  const { carrito, precioTotal, removerItem, vaciarCarrito } =
    useContext(CartContext);
  return (
    <div className="container" style={{ marginTop: "0px" }}>
      {carrito.length === 0 ? (
        <>
          <h3>Carrito vacio</h3>
          <hr />
        </>
      ) : (
        <>
          {carrito.map((prod) => (
            <>
              <div className="sidebar-cart-product-wrapper custom-scrollbar">
                <div className="navbar-cart-product">
                  <div className="d-flex align-items-center">
                    <img className="imgCart" src={prod.image}></img>
                    <div>
                      <Link
                        class="navbar-cart-product-link text-dark link-animated"
                        to={`/detail/${prod.id}`}
                      >
                        <strong className="link-animated">{prod.name}</strong>
                      </Link>
                      <small className=" d-block text-muted">
                        cantidad: {prod.counter}
                      </small>
                      <strong className="d-block text-sm">${prod.price}</strong>
                    </div>
                    <RxCross2
                      className="ms-5"
                      onClick={() => removerItem(prod.id)}
                    />
                  </div>
                </div>
              </div>
              <hr />
            </>
          ))}
        </>
      )}
    </div>
  );
};
