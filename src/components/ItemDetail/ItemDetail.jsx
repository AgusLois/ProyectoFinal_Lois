import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import "./itemDetail.css";

export const ItemDetail = ({
  id,
  name,
  description,
  price,
  image,
  category,
  stock,
}) => {
  const navigate = useNavigate();

  const volverHaciaAtras = () => {
    navigate(-1);
  };

  const { addToCart } = useContext(CartContext);

  const [counter, setCounter] = useState(1);

  const sumarAlCarrito = () => {
    const newItem = {
      id,
      name,
      image,
      price,
      category,
      counter,
      stock,
    };
    console.log(newItem);
    addToCart(newItem);
    Swal.fire({
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <div className="item">
      <div className="container w-75">
        <div className="d-flex">
          <img className="imgDetail" src={image}></img>
          <div className="infoDetail">
            <h1 className="infoDetail">{name}</h1>
            <h3 className="infoDetail">${price}</h3>
            <p className="infoDetail description">{description}</p>

            <div className="input-group w-25 mb-4 infoDetail">
              <ItemCount max={stock} modify={setCounter} cantidad={counter} />
              <div className="flex-grow-1 w-50 mt-4">
                <Button variant="outline-secondary" onClick={sumarAlCarrito}>
                  Agregar al carrito
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="outline-info"
          onClick={volverHaciaAtras}
          className="mt-3"
        >
          Volver atras
        </Button>
      </div>
    </div>
  );
};
