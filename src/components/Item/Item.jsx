import { ItemCount } from "../ItemCount/ItemCount";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

export const Item = ({ id, name, price, image, category }) => {
  return (
    <div>
      <Card className="card">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> ${price}</Card.Text>
          <Card.Text>
            {" "}
            <ItemCount />
          </Card.Text>
          <Link to={`/detail/${id}`}>
          <Button variant="outline-primary">Comprar</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
