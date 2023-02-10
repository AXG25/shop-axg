import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CartWidget() {

    const {cartCount} = useContext(CartContext)

    return (
        <div className="icono">
            <Link to="/cart" className="btn btn-dark">
            <FontAwesomeIcon icon = { faCartShopping }/>
            </Link>
           
            <span>{cartCount()}</span>
    
        </div>
    );
}

export default CartWidget;
