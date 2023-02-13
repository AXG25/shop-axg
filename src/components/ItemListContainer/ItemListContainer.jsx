import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from '../../firebase/config'

function ItemListContainer() {

  const {categoryId} = useParams()
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    
    const productosRef = collection(db, "productos")
    const q = categoryId
                ?query(productosRef, where("category", "==", categoryId ))
                : productosRef
    getDocs(q)
      .then((res)=>{
        setProductos( res.docs.map((doc) => {
          return{
            ...doc.data(),
            id: doc.id
          }
        }))
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId]);

  return (
    <div className="">
      {
        loading
          ? <h2>Cargando...</h2>
          : <ItemList productos={productos} />
      }
    </div>
  );
}

export default ItemListContainer;
