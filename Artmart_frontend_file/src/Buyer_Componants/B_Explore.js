import React from "react";
import "./B_Main.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../PreLogin_Componants/Footer";

function B_Explore() {
  const arrofDiscover = [
    "All",
    "Canvas",
    "Abstract",
    "Sketch",
    "Caricature",
    "Sculpture",
    "Object",
    "Digital Art",
    "Illustration",
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  axios.get("http://localhost:8080/products").then((r) => {
      const updatedProducts = r.data.map((p) => ({
        ...p,
        sellerEmail: p.seller?.email || null,
      }));
      setProducts(updatedProducts);
    })
    .catch((er) => {
      console.log(er);
    });

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already in cart
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      alert("Item already in cart");
      return;
    }

    // Ensure sellerEmail is present (from backend or mapped manually)
    const itemWithSeller = {
      ...product,
      sellerEmail: product.sellerEmail || product.seller?.email || null,
    };

    if (!itemWithSeller.sellerEmail) {
      alert("Seller information is missing for this product.");
      return;
    }

    cartItems.push(itemWithSeller);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Item added to cart");
  };

  useEffect(() => {
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (prod) =>
            prod.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  const columns = [[], [], [], []];
  filteredProducts.forEach((prod, index) => {
    columns[index % 4].push(prod);
  });

  return (
    <>
      <div className="container-fluid" id="art-types">
        {arrofDiscover.map((category) => (
          <div key={category}>
            <button
              className="btn btn-primary p-2 px-3 mx-4"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="row">
          {columns.map((col, colIndex) => (
            <div className="col-md-3" key={colIndex}>
              {col.map((prod) => (
                <div key={prod.id} className="card ex-card m-3">
                  <h4
                    className={`badge align-self-end ${
                      prod.status?.toLowerCase() === "unavailable"
                        ? "bg-danger"
                        : "bg-success"
                    }`}
                  >
                    {prod.status}
                  </h4>

                  <div className="ex-img">
                    <img src={prod.imgurl} alt={prod.title} />
                  </div>
                  <h2>{prod.title}</h2>
                  <p>{prod.description}</p>
                  <div className="ex-title d-flex justify-content-between align-items-center">
                    <h6>{prod.category}</h6>
                    <h4>
                      <i className="bi bi-currency-rupee"></i>
                      {prod.price}
                    </h4>
                  </div>
                  {prod.status?.toLowerCase() === "unavailable" ? (
                    <button className="btn btn-danger" disabled>
                      Sold Out
                    </button>
                  ) : (
                    <button
                      className="btn btn-success"
                      onClick={() => handleAddToCart(prod)}
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default B_Explore;
