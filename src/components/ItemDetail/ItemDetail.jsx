import React from "react";
import { Card, Button } from "react-bootstrap";

export const ItemDetail = ({ id, name, price, image, category }) => {
  return (
    <div className="item">
      <Card style={{ width: "19rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            aut tempora perspiciatis soluta sint nihil error deserunt at, nemo
            quas nobis. Ducimus, mollitia accusantium autem quia ullam tempore
            sint laboriosam?
          </p>
          <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
