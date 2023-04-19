import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStock } from "../helpers/getStock";
import { ItemList } from "../ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getStock()
      .then((res) => {
        if (categoryId) {
          setItems(res.filter((prod) => prod.category === categoryId));
        } else {
          setItems(res);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoryId]);
  return (
    <div>
      {loading ? (
        <Spinner className="spinner" animation="border" />
      ) : (
        <ItemList products={items} />
      )}
    </div>
  );
};
