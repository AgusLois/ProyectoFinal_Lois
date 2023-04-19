import { Item } from "../Item/Item";
import "./itemList.css";
import { Row } from "react-bootstrap";

export const ItemList = ({ products }) => {
  return (
    <Row className="justify-content-flex-start container" xs={1} md={3} lg={4}>
      {products.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </Row>
  );
};
