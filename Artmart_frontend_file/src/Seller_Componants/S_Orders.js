import React, { useEffect, useState } from "react";
import Footer from "../PreLogin_Componants/Footer";

function S_Orders() {
  const [orders, setOrders] = useState([]);
  const sellerEmail = localStorage.getItem("userEmail"); // assuming seller is logged in

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    console.log("All Orders:", storedOrders);

    // Show only orders where the seller is involved
    const sellerOrders = storedOrders.filter((order) =>
      order.items.some((item) => item.sellerEmail === sellerEmail)
    );

    setOrders(sellerOrders);
  }, [sellerEmail]);

  return (
    <>
    <div className="container">
      <h1 className="my-4">Seller Orders</h1>
      {orders.length === 0 ? (
        <p>No orders for your products yet.</p>
      ) : (
        orders.map((order, i) => (
          <div key={i} className="order-card card my-3 p-3">
            <div className="row d-flex">
              <div className="col col-12 col-lg-6">
                <h5>Buyer: {order.buyerEmail}</h5>
                <h6>Date: {order.date}</h6>
              </div>
              <div className="col col-12 col-lg-6">
                {order.items
                  .filter((item) => item.sellerEmail === sellerEmail)
                  .map((item, idx) => (
                    <div key={idx} className="d-flex justify-content-between">
                      <div className="col col-12 col-lg-4">
                        <h5>{item.title}</h5>
                        <p>Price: ₹{item.price}</p>
                      </div>
                      <div className="order-img col col-12 col-lg-4">
                        <img src={item.imgurl} alt={item.title} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}

export default S_Orders;
