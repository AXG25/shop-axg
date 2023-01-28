import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import {ItemCount} from '../ItemCount/ItemCount'
import Select from '../ItemCount/Select'
import './ItemDetail.css'


const tallas = [
{value: 36, text: 'talla 36'}, 
{value: 38, text: 'talla 38'},
{value: 40, text: 'talla 40'}, 
{value: 42, text: 'talla 42'} 
]

const ItemDetail = ({id, title,  description,  price, pictureUrl, stock, category}) => {
  const [cantidad, setCantidad] = useState(1)
  const [talla, setTalla] = useState(null)
  const handleAgregar = () => {
    console.log({
      id,
      title,
      description,
      price,
      pictureUrl,
      stock,
      category,
      talla,
      cantidad
    })
  }


  return (
    <div className='col-5 card m-auto'>
        <h2>{title}</h2>
        <img className='img' src={pictureUrl} alt={title} />
        <br />
        <small>{category}</small>
        <p>{description}</p>
        <p>Precio: ${price}</p>
        <Select options={tallas}
        set={setTalla}/>
        <ItemCount
        cantidad={cantidad}
        setCantidad={setCantidad}
        max={stock}
        onAdd={handleAgregar}/>
        
        <br />
    </div>
  )
}

export default ItemDetail; 