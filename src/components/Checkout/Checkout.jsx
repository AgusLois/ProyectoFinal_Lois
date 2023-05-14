import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getFirestore } from "../../firebase/config";
import firebase from "firebase";
import "firebase/firestore";
import { Cart } from "../Cart/Cart";

export const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const [email, setEmail] = useState("");

  const [nombre, setNombre] = useState("");

  const [apellido, setApellido] = useState("");

  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Apellido:", apellido);
    console.log("Teléfono:", telefono);

    const orden = {
      buyer: {
        email,
        nombre,
        apellido,
        telefono,
      },
      item: carrito,
      total_price: precioTotal(),
      data: firebase.firestore.Timestamp.fromDate(new Date()),
    };
    console.log(orden);

    const db = getFirestore();

    const ordenes = db.collection("ordenes");

    ordenes
      .add(orden)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Su compra fue realizada con éxito",
          text: `Numero de orden: ${res.id}`,
          willClose: () => {
            vaciarCarrito();
          },
        });
      })
      .finally(() => {
        console.log("Operacion realizada con exito");
      });

    carrito.forEach((item) => {
      const docRef = db.collection("productos").doc(item.id);

      docRef.get().then((doc) => {
        docRef.update({
          stock: doc.data().stock - item.counter,
        });
      });
    });
  };

  return (
    <div className="d-flex">
      <form onSubmit={handleSubmit} className="container mt-3 w-25">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
          />
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Finalizar
        </button>
      </form>

      <div className="mt-3 w-50">
        <div className="col-6"></div>
        <div className="col-6">
          <div className="card mb-5">
            <div className="card-header">
              <h6 className="mb-0">Tu orden</h6>
            </div>
            <div className="card-body py-4">
              <Cart />
              <table className="table card-text">
                <tr>
                  <th>Total: ${precioTotal()}</th>
                  <td className="text-end text-muted"></td>
                </tr>
              </table>
            </div>
            <div className="card-footer overflow-hidden p-0">
              <div className="d-grid">
                <Link className="btn btn-primary py-3" to="/">
                  Seguir comprando
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
