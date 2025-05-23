 import React from "react";
import "./Home.css";
import img1 from "../Images/Handimage.jpg";
import img2 from "../Images/pinknature.jpg";
import img3 from "../Images/boatview.jpeg";
import { Route, useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import B_Home from "../Buyer_Componants/B_Home";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";

const Home = () => {

  const navigate = useNavigate();

  const handleSubmit = ()=>{
    navigate("/signin")
  }

  const arrofDiscover = ["Paintings", "Abstract art", "Featured", "Landscape", "Sculpture", "Object", "Digital Art", "Illustration"]


  var [products, setProducts] = useState([]);

   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        const limitedProducts = response.data.slice(0, 7); // Limit to 5 products
        setProducts(limitedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, []);
  



  return (
    <>
      <div className="container-fluid" id="main-body">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-7 p-0 ">
            <img src={img1} id="img1hand" />
            <img src={img2} id="img2pink" />
            <img src={img3} id="img3boat"/>
          </div>
          <div
            className="col col-12 col-sm-12 col-md-12 col-lg-5"
            id="right-discrip"
          >
            <span>
              DISCOVER UNIQUE ART. SELL YOUR <small>CREATIVITY</small>.
            </span>
             <p>
              “Buy, sell, and explore a world of sketches, paintings, and
              masterpieces crafted by artists worldwide.”
            </p>
            <button type="submit" className="" onClick={handleSubmit}>
              For More
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-center text-light m-4">Discover More</h3>

      <div className="container-fluid" id="art-types">

        {arrofDiscover.map((a)=>{
          return(
            <div>
                <span className="card p-3 mx-4">
                  <a href="#">{a}</a>
                </span>
            </div>
          )
        })}
       
      </div>

      <div className="container">
        <h1  className="text-center pt-5 mb-5">Sketches and Paintings</h1>
          {products.map((prod) => (
            <div key={prod.id} className="card pre-card align-middle m-3">
              <p className="badge border fw-lighter align-self-end">{prod.status}</p>
              <div className="ex-img">
                <img src={prod.imgurl} alt={prod.title} />
              </div>
                <h6>{prod.title}</h6>
              <div className="ex-title d-flex justify-content-between align-items-center">
              <p>{prod.category}</p>
                <p>
                  <i className="bi bi-currency-rupee"></i>
                  {prod.price}
                </p>
              </div>
              <button
                className="btn btn-success"
                onClick={() =>  {alert("Sign In to your account / Create Your Account"); navigate("/signin")}}
              >
                Buy Now
              </button>
            </div>
            
          ))}
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
