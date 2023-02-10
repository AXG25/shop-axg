import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import Select from "../ItemCount/Select";
import "./ItemDetail.css";

const tallas = [
  { value: 36, text: "talla 36" },
  { value: 38, text: "talla 38" },
  { value: 40, text: "talla 40" },
  { value: 42, text: "talla 42" },
];

const ItemDetail = ({
  id,
  title,
  description,
  price,
  pictureUrl,
  stock,
  category,
}) => {
  const { agregarAlCarrito, isInCart } = useContext(CartContext);
  console.log(isInCart())
  const [cantidad, setCantidad] = useState(1);
  const [talla, setTalla] = useState("36");
  const handleAgregar = () => {
    const item = {
      id,
      title,
      description,
      price,
      pictureUrl,
      stock,
      category,
      talla,
      cantidad,
    };

    agregarAlCarrito(item);
  };

  return (
    <div className="col-5 card m-auto">
      <h2>{title}</h2>
      <img className="img" src={pictureUrl} alt={title} />
      <br />
      <small>{category}</small>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      {!isInCart(id) ? (
        <>
         <Select options={tallas} set={setTalla} />
          <br />
        <ItemCount
          cantidad={cantidad}
          setCantidad={setCantidad}
          max={stock}
          onAdd={handleAgregar}
        />
        </>
      ) : (
        <Link to="/cart" className="btn btn-dark">
          Terminar mi compra
        </Link>
      )}

      <br />
    </div>
  );
};

export default ItemDetail;
