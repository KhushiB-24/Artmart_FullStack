import React, { useEffect, useState } from "react";
import Footer from "../PreLogin_Componants/Footer";

function S_Earning() {
  const [totalEarnings, setTotalEarnings] = useState(0);
  const sellerEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    let earnings = 0;

    storedOrders.forEach((order) => {
      order.items.forEach((item) => {
        if (item.sellerEmail === sellerEmail) {
          earnings += item.price;
        }
      });
    });

    setTotalEarnings(earnings);
  }, [sellerEmail]);

  return (
    <div>
    <div className="container text-center my-5">
      <h1 className="mb-4">Seller Earnings</h1>
      <div className="card p-4 shadow" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h2 className="text-success">₹{totalEarnings}</h2>
        <p className="text-muted">Total earnings from your product sales</p>
      </div>
    </div>
    <div>
      <Footer/>
      </div>
    </div>
  );
}

export default S_Earning;
