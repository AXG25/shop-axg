import React, { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext'
import { Link, Navigate } from "react-router-dom";
import {db} from "../../firebase/config";
import { collection, writeBatch, documentId, getDocs, query, addDoc, doc, updateDoc, getDoc, where} from "firebase/firestore";

const Checkout = () => {

  const {cart, totalCart, emptyCart} = useContext(CartContext)

   const [orderId, setOrderId] = useState(null)

  const [values, setValues] = useState({
    nombre: '',
    dirección: '',
    email: ''
  })

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
   
    if (values.nombre.length < 1){
      alert('Nombre Invalido')
      return
    }

    if (values.email.length < 1){
      alert('Email Invalido')
      return
    }

    if (values.dirección.length < 1){
      alert('Dirección Invalido')
      return
    }

    const orden = {
      cliente: values,
      items: cart,
      total: totalCart()

    }

    const batch = writeBatch(db)
    const orderRef = collection(db, 'orders')
    const productosRef = collection(db, 'productos')
    const outOfStock = []
    const itemsRef = query(productosRef, where(documentId(), 'in', cart.map(prod => prod.id)))
    const productos = await getDocs(itemsRef)

    productos.docs.forEach(doc => {
      const item = cart.find(item => item.id === doc.id)

      if (doc.data().stock >= item.cantidad){
        batch.update(doc.ref, {
          stock: doc.data().stock - item.cantidad
        })
      } else {
        outOfStock.push(item)
      }
    })

    if (outOfStock.length === 0) {
      batch.commit()
          .then(() =>{
            addDoc(orderRef, orden)
            .then((doc) => {
              setOrderId(doc.id)
              emptyCart()
            })
            .catch((error) => console.log(error))
          })
    }else{
      const outOfStockMsg = outOfStock.map(item => `${item.title}`).join(', ')
      alert(`Los siguientes productos están sin stock: ${outOfStockMsg}`)
    } 
  }

  if (orderId){
    return(
      <div className="container my-5">
        <h2>Tu compra ha sido exitosa</h2>
        <hr />
        <p>Tu código de orden es: {orderId}</p>

        <Link to="/">Volver</Link>

      </div>
    )
  }

  if (cart.length === 0){
    return <Navigate to='/'/>
  }

  return (
    <div className='container my-5 '>
      <h2>Terminar mi compra</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className='form-control my-2'
          onChange={handleInputChange}
          name='nombre'
          value={values.nombre}
          placeholder='Tu nombre'
        />

        <input
          type="text"
          className='form-control my-2'
          onChange={handleInputChange}
          name='dirección'
          value={values.dirección}
          placeholder='Tu dirección'
        />

        <input
          type="text"
          className='form-control my-2'
          onChange={handleInputChange}
          name='email'
          value={values.email}
          placeholder='Tu email'
        />

        <button className='btn btn-dark'>Finalizar</button>
      </form>
    </div>
  )
}

export default Checkout


 // cart.forEach(prod => {
      //   const docRef = doc(productosRef, prod.id)
      //   getDoc(docRef)
      //       .then((doc) =>{
      //         if(doc.data().stock - prod.cantidad >= 0){
      //          updateDoc(docRef, {stock: doc.data().stock - prod.cantidad}) 
      //         }else{
      //           alert('No hay Stock disponible')
      //         }
              
      //       })
      // });