import CartContext from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function ProductCard({ item, setShowCart }) {
  const { dispatch } = useContext(CartContext);


  return (
    <div className="card h-100 shadow-sm">
      <Link to={`/product/${item.id}`}><img src={item.thumbnail} className="card-img-top" alt="item.title" style={{
        height: "200px",
        objectFit: "contain"
      }} /> </Link>

      <div className="card-body d-flex flex-column">
       
        <h6>
          <Link to={`/product/${item.id}`} className="card-title" style={{textDecoration:"none"}}>{item.title}</Link>
        </h6>
        <h5 className="text-success">
          ₹ {item.price}
        </h5>
       

        <button className="btn btn-warning mt-auto"
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: item
            })
            setShowCart(true);
          }}>Add to Cart</button>

      </div>
    </div>
  )
}

export default ProductCard;