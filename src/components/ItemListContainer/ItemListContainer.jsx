import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {

  const {categoryId} = useParams()
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if (categoryId){
          setProductos(res.filter(prod => prod.category === categoryId));
        } else {
          setProductos(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId]);

  return (
    <div className="">
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
