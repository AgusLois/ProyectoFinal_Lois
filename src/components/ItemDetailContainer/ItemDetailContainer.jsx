import React, { useState, useEffect } from "react";
import { getStock } from "../helpers/getStock";
import Spinner from "react-bootstrap/Spinner";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const {itemId} = useParams()

  useEffect(() => {
    setLoading(true);
    getStock()
      .then((res) => {
        setItem( res.find( prod => prod.id === Number(itemId)))
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <section>
      {loading ? (
        <Spinner className="spinner" animation="border" />
      ) : (
        <ItemDetail {...item}/>
      )}
    </section>
  );
};
