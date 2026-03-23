
import CartSide from "../components/CartSide"
import ProductCard from "../components/ProductCard";
import useDebounce from "../hooks/useDebounce";
import useFetch from "../hooks/useFetch";
import { useState } from "react";


function Home({search}) {

   const [showCart, setShowCart] = useState(false)
    const { data, loading, error } = useFetch("https://dummyjson.com/products");
   const debouncedValue = useDebounce(search,500);

    if (loading) {
        return <h2 className="text-center">Loading...</h2>
    }

    if (error) {
        return <h2 className="text-center">{error}</h2>
    }
    // const products = data.products || [];
    const filteredProducts = debouncedValue ? data.products.filter(item =>
       item.title?.toLowerCase().includes(debouncedValue?.toLowerCase())
    )
    : data.products;

    return (
        <div className="container mt-4">
            <h2 className="mb-4"> Featured Products</h2>
            <div className="row">
                <div className={showCart ? "col-md-10" : "col-md-12"}>
                    <div className="row">
                        
                        {filteredProducts.map(item => (
                            <div className="col-md-3 mb-4" key={item.id}>
                                <ProductCard item={item} setShowCart={setShowCart} />
                               
                            </div>

                        ))}



                    </div>
                </div>

                {showCart && (<div className="col-md-2 border-start">
                    <CartSide/>
                    </div>
                    )}
            </div>

        </div>
    )
}

export default Home;