import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart(){

    const { state, dispatch } = useContext(CartContext);
     const total = state.cart.reduce(
    (sum,item) => sum + item.price * item.quantity, 0
 )

    return(
         <>
         <h1>Cart Page</h1>
          {state.cart.length === 0 ? (<h3>No items in cart</h3>) : (
            state.cart.map(item =>(
            <div key={item.id} style={{border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                gap: "20px"
            }}>
                <img src={item.thumbnail} width="80"/>
                <div>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                </div>
                <div>
                    <button style={{border:"1px solid #ffc107", backgroundColor:"white"}} onClick={() => 
                        dispatch({
                            type: "DECREASE_QTY",
                            payload: item.id
                        })
                    }>-</button>
                    <span style={{margin:"0 10px"}}>{item.quantity}</span>
                    <button style={{border:"1px solid #ffc107", backgroundColor:"white"}} onClick={() =>
                        dispatch({
                            type: "INCREASE_QTY",
                            payload: item.id
                        })
                    }>+</button>
                  </div>
                <button style={{border:"1px solid #ffc107", backgroundColor:"white", marginTop:"2px"}} onClick={() =>
                    dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item.id
                    })
                }><i className="bi bi-trash"></i></button>
            </div>
         ))
          )}
         <hr/>

            <h5>Total: ₹ {total}</h5>

            <Link to="/checkout" className="btn btn-warning mt-3">
            Proceed to Checkout
            </Link>
         </>
    )
}

export default Cart;