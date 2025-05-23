import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../PreLogin_Componants/Footer";

function S_Dashboard() {
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [activeListings, setActiveListings] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  const sellerEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch orders from localStorage
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        let earnings = 0;
        let orderCount = 0;

        orders.forEach((order) => {
          const sellerItems = order.items.filter(
            (item) => item.sellerEmail === sellerEmail
          );
          if (sellerItems.length > 0) {
            orderCount++;
            sellerItems.forEach((item) => {
              earnings += item.price;
            });
          }
        });

        setTotalEarnings(earnings);
        setTotalOrders(orderCount);

        // Fetch seller products from backend
        const res = await axios.get(
          `http://localhost:8080/products/seller?email=${sellerEmail}`
        );
        const products = res.data;

        const active = products.filter((p) =>
          p.status?.toLowerCase() === "available"
        );
        
        setActiveListings(active.length);
      } catch (error) {
        console.error("Dashboard data error:", error);
      }
    };

    fetchDashboardData();
  }, [sellerEmail]);

  return (
    <>
    <div className="container my-4">
      <h1 className="mb-4">Seller Dashboard</h1>

      <div className="row">
        <div className="col-md-4">
          <div className="card dash-card p-4 shadow text-center">
            <h2>Total Earnings</h2>
            <h6>All-time revenue</h6>
            <h1 className="text-success mt-3">₹{totalEarnings}</h1>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card dash-card p-4 shadow text-center">
            <h2>Active Listings</h2>
            <h6>Available Products</h6>
            <h1 className="text-primary mt-3">{activeListings}</h1>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card dash-card p-4 shadow text-center">
            <h2>Total Orders</h2>
            <h6>Orders with your products</h6>
            <h1 className="text-warning mt-3">{totalOrders}</h1>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}

export default S_Dashboard;
