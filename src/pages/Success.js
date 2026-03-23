import { Link } from "react-router-dom";

function Success(){

    return(
       <div className="text-center mt-5">
        <h2> Payment Successful!</h2>
        <p>Your Order has been placed.</p>

        <Link to="/" className="btn btn-primary mt-3">
        Go to Home
        </Link>
        </div>
    )
}

export default Success;