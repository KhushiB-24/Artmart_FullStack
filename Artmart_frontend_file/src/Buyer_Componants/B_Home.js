import React, { useState, useEffect } from "react";
import "./B_Main.css";
import B_Navbar from "./B_Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../PreLogin_Componants/Footer";

function B_Home({addToCart}) {
  const categorycards = [
    {
      cat_img:
        "https://i.pinimg.com/736x/21/52/05/215205fa5fedbcbb0d0cdfe2f09a76f4.jpg",
      cat_name: "Canvas",
    },
    {
      cat_img:
        "https://i.pinimg.com/474x/bf/32/58/bf32586dddaf192af57ddd7e17379195.jpg",
      cat_name: "Watercolor",
    },
    {
      cat_img:
        "https://i.pinimg.com/474x/64/67/e7/6467e739a1c55be5a47ee21d0ceb299f.jpg",
      cat_name: "Illustrations",
    },
    {
      cat_img:
        "https://i.pinimg.com/474x/c0/70/32/c07032deca3805bb907f296fc1e59b6b.jpg",
      cat_name: "Caricature",
    },
    {
      cat_img:
        "https://i.pinimg.com/474x/69/db/6e/69db6e9f1f82698ca4c7c2e40225cbab.jpg",
      cat_name: "Sktech",
    },
    {
      cat_img:
        "https://i.pinimg.com/474x/ff/aa/4c/ffaa4c23dedf3efaa2c7f6a81d57b062.jpg",
      cat_name: "Abstract",
    },
  ];

  const navigate = useNavigate();
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
  


  const handleCardClick = (catName) => {
    navigate("/b_explore", { state: { selectedCategory: catName } });
  };  

  return (
    <div>

      <div>
        
      </div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.pinimg.com/736x/da/6d/ab/da6dabb52177fd95a39019b87ec27c7f.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.pinimg.com/736x/4c/8d/85/4c8d85c3b7feaf58ea2108fc19b2660c.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.pinimg.com/474x/af/13/3c/af133cdfbdf462b527b9153ac6e22862.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {}
      <div className="container-fluid">
        <div className="row" >
          <h1 className="text-center pt-5 mb-5">Categories</h1>
          
            {categorycards.map((cat, index) => (
              <div className="col col-12 col-sm-6 col-md-4 col-lg-2" onClick={() => handleCardClick(categorycards.cat_name)}>
              <div class="card cat-card">
                <img
                  src={cat.cat_img}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {cat.cat_name}
                  </h5>
                </div>
              </div>
              </div>
            ))}
          </div>

      </div>

      <div className="container-fluid text-center fs-2">
        <div className="row">
          <p className=" p-5 my-5">Wallpaper</p>
        </div>
      </div>

      <div className="container-fluid third-item ">
        <div className="row">
          <div className="col col-12 col-sm-6 col-md-6 col-lg-4 column-1">
            <img
              src="https://i.pinimg.com/736x/8d/53/40/8d534020e63ea0c97204d3409b03b35b.jpg"
              class="card-img-top border border-dark border-5 rounded-4"
              alt="..."
            />
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-8 column-2">
            <div className="row">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-3">
                <img
                  src="https://i.pinimg.com/474x/47/83/97/478397091ee41e152b79bb2927bb1842.jpg"
                  className="card-img-top border border-dark border-5 rounded-4"
                  alt="..."
                  onClick={() => {
                    navigate("/b_explore");
                  }}
                />

                <img
                  src="https://i.pinimg.com/474x/cc/cc/13/cccc13719471e8cee51fb156e718e804.jpg"
                  className="card-img-top border border-dark border-5 rounded-4"
                  alt="..."
                />

                <img
                  src="https://i.pinimg.com/736x/9d/46/8a/9d468a80ac772aa0a76cd32afc05d8f9.jpg"
                  className="card-img-top border border-dark border-5 rounded-4"
                  alt="..."
                  style={{ height: "180px" }}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-5">
                <img
                  src="https://i.pinimg.com/474x/b8/51/9d/b8519d0964f4cc9773ceb8ad012086f8.jpg"
                  className="card-img-top border border-dark border-5 rounded-4"
                  alt="..."
                />
                <button
                  className="btn  w-100 rounded-4"
                  style={{
                    height: "90px",
                    marginTop: "20px",
                    backgroundColor: "#3d48485b",
                    color: "white",
                  }} onClick={()=> navigate("/b_explore")}
                >
                  Explore More
                </button>
                <img
                  src="https://i.pinimg.com/474x/cb/ae/54/cbae5474f67ad5dc89687d0f0e3e3ace.jpg"
                  className="card-img-top border border-dark border-5 rounded-4"
                  alt="..."
                  style={{ height: "400px" }}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-4">
                <img
                  src="https://i.pinimg.com/474x/3e/79/b7/3e79b732134784450bb25f8171911a93.jpg"
                  className="card-img-top border border-dark border-5 rounded-4"
                  alt="..."
                />
                <img
                  src="https://i.pinimg.com/736x/c3/01/20/c30120bc382ae1746657fce3e7970ae6.jpg"
                  className="card-img-top border border-dark border-5 rounded-4"
                  alt="..."
                  style={{ height: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>
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
      <Footer/>
    </div>
  );
}

export default B_Home;
