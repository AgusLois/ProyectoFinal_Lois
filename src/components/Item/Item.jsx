import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./item.css";

export const Item = ({ id, name, description, price, image, category }) => {
  return (
    <div>
      <Card border="light" className="card">
      <Link to={`/detail/${id}`}>
        <Card.Img variant="top" className="imgItem" src={image} />
        </Link>
        <Card.Body>
          <Link className="name" to={`/detail/${id}`}>
            <Card.Text>{name}</Card.Text>
          </Link>
          <Card.Text className="text-gray-500"> ${price}</Card.Text>
          {/* <Card.Text>
            {" "}
            <ItemCount />
          </Card.Text>
          <Link to={`/detail/${id}`}>
          <Button variant="outline-primary">Comprar</Button>
          </Link> */}
        </Card.Body>
      </Card>
    </div>
  );
};
