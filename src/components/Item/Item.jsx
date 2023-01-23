import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({ prod }) => {
  return (
    <div className="col-3 card m-4">
      <img src={prod.pictureUrl} alt={prod.title} />
      <h4>{prod.title}</h4>
      {/* <p>{prod.description}</p> */}
      <small>{prod.category}</small>
      <p>
        Precio: <b>${prod.price}</b>
      </p>
      <Link to={`/detail/${prod.id}`} className="btn btn-outline-dark m-2">Ver mas</Link>
    </div>
  );
};

export default Item;
