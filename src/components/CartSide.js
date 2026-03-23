import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

function CartSide(){

 const { state, dispatch} = useContext(CartContext);

 const total = state.cart.reduce(
    (sum,item) => sum + item.price * item.quantity, 0
 )

    return(
        <div style={{padding:"10px"}}>

            <h4> <Link to="/cart" className="text-black">Cart ({state.cart.length})</Link></h4>

            {state.cart.map(item =>(
                <div key={item.id} style={{borderBottom:"1px solid #ccc",
                    marginBottom:"10px"
                }}>
                  <h6>{item.title}</h6>
                  <p>₹ {item.price}</p>

                  <div style={{textAlign:"center", marginBottom:"10px"}}>
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
                       <br/>
                    <button style={{border:"1px solid #ffc107", backgroundColor:"white", marginTop:"5px"}} onClick={() =>{
                    dispatch({
                        type: "REMOVE_FROM_CART",
                        payload:item.id
                    })
                  }}><i className="bi bi-trash"></i></button>
                  
                  </div>

                  

                </div>
            ))}

            <hr/>

            <h5>Total: ₹ {total}</h5>
        </div>
    )
}

export default CartSide;