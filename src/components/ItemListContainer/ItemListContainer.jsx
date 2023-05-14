import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getStock } from "../helpers/getStock";
import { getFirestore } from '../../firebase/config';
import { ItemList } from "../ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)
    const db = getFirestore();

    const productos = categoryId
                      ?db.collection('productos').where('category', '==', categoryId)
                      :db.collection('productos')
      productos.get()
              .then((res) =>{
              const newItem = res.docs.map((doc)=> {
                return{id: doc.id, ...doc.data()}
              })
              setItems(newItem)
            })
            .catch((err) => console.log(err))
            .finally(()=> {
              setLoading(false)
            })
    }, [categoryId, setLoading])
  

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
