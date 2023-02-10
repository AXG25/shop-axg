import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from "react-icons/bs";

const Cart = () => {

    const {cart, emptyCart, totalCart, removeItem} = useContext(CartContext)

  return (
    <div className='container my-5'>
      <h2>Tu compra</h2>
      <hr />
      {
        cart.map(item => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: {item.price * item.cantidad}</p>
            <button className='btn btn-outline-dark' onClick={() => removeItem(item.id)}><BsFillTrashFill/> Eliminar </button>
            <hr />
          </div>
        ))
      }

      <h4>Total a pagar: {totalCart()}</h4>

      <button className='btn btn-outline-dark' onClick={emptyCart}>Vaciar carrito</button>
    </div>
  )
}

export default Cart
