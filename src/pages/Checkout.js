import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {

    const { state, dispatch } = useContext((CartContext));
    const navigate = useNavigate();
    const [address, setAddress] = useState("");

    const total = state.cart.reduce((sum, item) =>
       sum + item.price * item.quantity, 0
    )

    const handlePayment = () =>{
        if(!address){
            alert("Enter address");
            return;
        }

        dispatch({ type: "CLEAR_CART"});

        setTimeout(() =>{
            navigate("/success");
        }, 1000)
    };



    return (
        <div className="container my-4">
            <h2>Checkout</h2>

            <textarea className="form-control mb-3"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)} />

            <h4>Total: ₹ {total}</h4>

            <button
                className="btn btn-success mt-3"
                onClick={handlePayment}
            >
                Pay Now
            </button>
        </div>
    )
}

export default Checkout;