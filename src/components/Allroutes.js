import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Homepage from "./pages/HomePage/Homepage";
import Loginpage from "./pages/LoginPage/Loginpage";

// import PrivateRoute from "./privateRoute";
import Products from "./pages/ProductsPage/Products";
import CartPage from "./pages/CartPage/CartPage";
import Product from "./pages/Product/Product";
import CheckoutPage1 from "./pages/CheckoutPage/CheckoutPage1";
import MyOrderPage from "./pages/MyOrderPage/MyOrderPage";
import { useNavigate } from "react-router-dom";

function Allroutes({ setLogin }) {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/login" element={<Loginpage setLogin={setLogin} />} />
      <Route path="/" element={<Loginpage setLogin={setLogin} />} />

      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/checkout1" element={<CheckoutPage1 />} />
      {/* <Route path="/" element={navigate("/login")} /> */}
      <Route path="/myorders" element={<MyOrderPage />} />
    </Routes>
  );
}

export default Allroutes;
