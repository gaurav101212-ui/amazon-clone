import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import useFetch from "../hooks/useFetch";


function Navbar({ search, setSearch }) {

    const { state } = useContext(CartContext)
    const { data } = useFetch("https://dummyjson.com/products");
    const [showDropdown, setShowDropdown] = useState(false);

    const suggestions = search
        ? data.products.filter(item =>
            item.title?.toLowerCase().includes(
                search.toLowerCase()
            )
        ).slice(0, 5)
        : [];

        const handleLogout = () => {
  localStorage.removeItem("login");
  window.location.reload();
};

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">

            <div className="container-fluid">

                <Link className="navbar-brand" to="/">Amazon Clone</Link>



                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form className="d-flex mx-auto w-50">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search Amazon"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setShowDropdown(true);
                            }}
                            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                        />
                    </form>
                    {showDropdown && suggestions.length > 0 && (
                        <div style={{
                            position: "absolute",
                            background: "white",
                            width: "40%",
                            top: "50px",
                            left: "30%",
                            zIndex: 1000,
                            border: "1px solid #ccc"
                        }}>
                            {suggestions.map(item => (
                                <div
                                    key={item.id}
                                    style={{
                                        padding: "10px",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => {
                                        setSearch(item.title);
                                        setShowDropdown(false);
                                    }}
                                >
                                    {item.title}
                                </div>
                            ))}
                        </div>
                    )}





                    <div className="d-flex align-items-center text-white">
                        <Link to="/login" className="text-white text-decoration-none">
                            Login
                        </Link>
                        <button onClick={handleLogout} className="btn text-white btn-sm">
                            Logout
                        </button>
                        <Link to="/cart" className="text-white text-decoration-none">Cart ({state.cart.length})</Link>
                    </div>
                </div>

            </div>
        </nav >
    )
}
export default Navbar;