import React from 'react'
import { Button } from 'react-bootstrap'
import {ItemCount} from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({id, title,  description,  price, pictureUrl, stock, category}) => {
  return (
    <div className='col-5 card m-auto'>
        <h2>{title}</h2>
        <img className='img' src={pictureUrl} alt={title} />
        <br />
        <small>{category}</small>
        <p>{description}</p>
        <p>Precio: ${price}</p>
        <ItemCount/>
        <br />
        <Button variant='dark'>Comprar</Button>
    </div>
  )
}

export default ItemDetail; 