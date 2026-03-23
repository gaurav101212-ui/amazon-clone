
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import CartProvider from './context/CartProvider';
import { useState } from 'react';
import Products from './pages/Products';
import ProtectedRoute from './components/ProtectedRoute';
import Checkout from './pages/Checkout';
import Success from './pages/Success';


function App() {

  const [search, setSearch] = useState("");

  return (
    <CartProvider>
    <BrowserRouter>
    <Navbar search={search} setSearch={setSearch}/>

    <Routes>
      <Route path="/" element={<Home search={search}/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
      <Route path="/product/:id" element={<Products/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/success" element={<Success/>}/>

    </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
