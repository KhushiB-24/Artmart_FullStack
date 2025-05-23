import React from "react";
import { useState, useEffect } from "react";
import Footer from "../PreLogin_Componants/Footer";

function B_Cart({ cartItems: initialCartItems }) {
  const [cartItems, setCartItem] = useState(initialCartItems);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItem(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItem(storedCart);
  }, []);

  const handlePlaceOrder = () => {
    const buyerEmail = localStorage.getItem("userEmail");

    // Add sellerEmail to every item (MUST HAVE sellerEmail inside the product earlier)
    const itemsWithSellerEmail = cartItems.map((item) => {
      const sellerEmail =
        item.sellerEmail || item.seller?.email || "unknown@seller.com";
      return { ...item, sellerEmail };
    });

    const newOrder = {
      buyerEmail,
      items: itemsWithSellerEmail,
      date: new Date().toLocaleString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    alert("Order placed successfully!");
    setCartItem([]);
    localStorage.removeItem("cart");
  };

  return (
    <>
      <div className="container">
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="row">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-card card">
                <div className="row">
                  <div className="cart-img col col-12 col-lg-3">
                    {" "}
                    <img
                      className="cart-img"
                      src={item.imgurl}
                      alt={item.title}
                    />
                  </div>
                  <div className="col col-12 col-lg-3">
                    {" "}
                    <h3>{item.title}</h3>
                  </div>
                  <div className="col col-12 col-lg-3">
                    {" "}
                    <h3>
                      <i className="bi bi-currency-rupee"></i>
                      {item.price}
                    </h3>
                  </div>
                  <div className="col col-12 col-lg-3">
                    {" "}
                    <button
                      className="btn btn-success"
                      onClick={() => removeItem(index)}
                    >
                      Remove From Cart
                    </button>
                  </div>
                </div>

                <br />
              </div>
            ))}
            <div className="d-flex">
              <h4 className="d-inline px-3 m-5">
                Total: <i className="bi bi-currency-rupee"></i>
                {totalPrice.toFixed(2)}
              </h4>
              <button
                className="btn btn-success px-5 m-5"
                style={{ width: "300px", height: "60px" }}
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default B_Cart;
