import React from "react";
import Item from "../Item/Item.jsx";

const ItemList = ({ productos }) => {
  console.log(productos);

  return (
    <div className="container my-5">
      <h2>Nuestros productos</h2>
      <hr />
      <div className="row my-4">
        {productos.map((prod => ( 
          <Item key={prod.id} prod={prod}/> 
        )))}
      </div>
    </div>
  );
};

export default ItemList;
