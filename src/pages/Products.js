import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import CartContext from "../context/CartContext";

function Products() {

  const { id } = useParams();

  const { data, loading, error } =
    useFetch("https://dummyjson.com/products");

  const { dispatch } = useContext(CartContext);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  // find product
  const product = data.products.find(item => item.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="container mt-4">

      <div className="row">

        {/* Image */}
        <div className="col-md-5">
          <img
            src={product.thumbnail} alt="product"
            className="img-fluid"
            style={{ height: "400px", objectFit: "contain" }}
          />
        </div>

        {/* Details */}
        <div className="col-md-7">

          <h3>{product.title}</h3>

          <p className="text-muted">{product.category}</p>

          <h4>₹ {product.price}</h4>

          <p>{product.description}</p>

          <button
            className="btn btn-warning"
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: product
              })
            }
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default Products;