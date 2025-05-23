import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./PreLogin_Componants/Home";
import About from "./PreLogin_Componants/About";
import Contact from "./PreLogin_Componants/Contact";
import SignIn from "./PreLogin_Componants/SignIn";
import SignUp from "./PreLogin_Componants/SignUp";
import B_Home from "./Buyer_Componants/B_Home";
import B_Explore from "./Buyer_Componants/B_Explore";
import S_Home from "./Seller_Componants/S_Dashboard";
import { useState } from "react";
import { useEffect } from "react";
import B_Navbar from "./Buyer_Componants/B_Navbar";
import S_Navbar from "./Seller_Componants/S_Navbar";
import S_Dashboard from "./Seller_Componants/S_Dashboard";
import S_ManageProducts from "./Seller_Componants/S_ManageProducts";
import S_Earning from "./Seller_Componants/S_Earning";
import S_Profile from "./Seller_Componants/S_Profile";
import S_Orders from "./Seller_Componants/S_Orders";
import B_Cart from "./Buyer_Componants/B_Cart";
import B_Orders from "./Buyer_Componants/B_Orders";

function App() {
  const [userType, setUserType] = useState();

  useEffect(() => {
    const type = localStorage.getItem("userType");
    setUserType(type);
  }, []);


  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems)=>[...prevItems, product]);
  };


  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (product) => {
    setOrderItems((prevItems)=>[...prevItems, product]);
  };

  return (
    <div className="main-app">
      <BrowserRouter>

        {userType === "Buyer" ? (
          <B_Navbar />
        ) : userType === "Seller" ? (
          <S_Navbar />
        ) : (
          <Navbar/>
        )}
        <Routes>
          <>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          </>
        {userType == "Buyer" && (
          <>
            <Route path="/b_home" element={<B_Home addToCart={addToCart} />} />
            <Route path="/b_explore" element={<B_Explore addToCart={addToCart}/>} />
            <Route path="/b_about" element={<About />} />
            <Route path="/b_contact" element={<Contact />} />
            <Route path="b_cart" element={<B_Cart cartItems={cartItems} addToOrder = {addToOrder}/>} />
            <Route path="/b_orders" element={<B_Orders />} />
            </>
        )}

        {userType == "Seller" && (
          <>
            <Route path="/s_home" element={<S_Dashboard />} />
            <Route path="/s_dashboard" element={<S_Dashboard />} />
            <Route path="/s_manage_products" element={<S_ManageProducts />} />
            <Route path="/s_orders" element={<S_Orders orderItems={orderItems}/>} />
            <Route path="/s_earnings" element={<S_Earning />} />
            <Route path="/s_profile" element={<S_Profile />} />
            </>
        )}

        {userType === "Seller" && (
          <Route path="*" element={<Navigate to="/s_dashboard" />} />
        )}
        {userType === "Buyer" && (
          <Route path="*" element={<Navigate to="/b_home" />} />
        )}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
