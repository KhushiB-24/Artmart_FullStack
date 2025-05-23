import React, { useEffect, useState } from "react";
import Footer from "../PreLogin_Componants/Footer";

function B_Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
  
    // Filter only orders for the logged-in user
    const userOrders = storedOrders.filter(order => order.buyerEmail === userEmail);
  
    setOrders(userOrders);
  }, []);
  

  return (
    <>
    <div className="orders-container">
      <h1 className="orders-heading">Your Orders</h1>
      {orders.length === 0 ? (
        <p className="no-orders-msg">No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-card">
            <div className="order-items-grid"> <h5 className="order-title">Order #{index + 1}</h5></div>
            <div className="order-item-card">
            <h6 className="order-info"><br/>
              <strong>Date:</strong> {order.date}
            </h6>
            <h6 className="order-info">
              <strong>Buyer:</strong> {order.buyerEmail}
            </h6>
            </div>
            <div className="order-items-grid">
              {order.items.map((item, i) => (
                <div key={i} className="order-item-card">
                  <div className="order-img">
                  <img src={item.imgurl} alt={item.title} />
                  </div>
                  <div className="content">
                  <h5>{item.title}</h5>
                  <p>
                    <i className="bi bi-currency-rupee"></i>
                    {item.price}
                  </p>
                  <p>
                    <strong>Seller:</strong> {item.sellerEmail}
                  </p>
                </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
    <Footer />
  </>
  );
}

export default B_Orders;
