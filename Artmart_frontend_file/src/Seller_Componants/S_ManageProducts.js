import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ManageProduct.css";
import Footer from "../PreLogin_Componants/Footer";

function S_ManageProducts() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: "",
    title: "",
    description: "",
    category: "",
    price: "",
    status: "",
    imgurl: "",
  });

  const emptyProduct = {
    id: "",
    title: "",
    description: "",
    category: "",
    price: "",
    status: "",
    imgurl: "",
  };
  

  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [res, setRes] = useState("");  //handle submit on click where info successfully store in the database
  
  //Fetch products
  useEffect(() => {
    fetchProducts();
  }, []);


  //For get products posted by the logged in seller from the database
  var [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const email = localStorage.getItem("userEmail");
      const response = await axios.get(`http://localhost:8080/products/seller?email=${email}`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  //handle the change in the input field of the form
  let handleChange = (e) => {
    var { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const sellerEmail = localStorage.getItem("userEmail");

      if (!sellerEmail) {
        setRes("Seller email not found. Please log in again.");
        return;
      }

      if (isEditing) {
        const updatedProduct = { ...product };
      
        // Don't send imgurl when editing if no new image is selected
        if (!selectedFile) {
          delete updatedProduct.imgurl;
        }
      
        await axios.put(`http://localhost:8080/products/${product.id}`, updatedProduct);
      
        // Upload image separately if a new file is selected
        if (selectedFile) {
          const formData = new FormData();
          formData.append("file", selectedFile);
          await axios.post(
            `http://localhost:8080/products/${product.id}/upload`,
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
        }
      
        setRes("Product updated successfully!");
      }
       else {

        const productData = {
          ...product,
          sellerEmail, // Send seller's email
        };
        // Create new product
        const productResponse = await axios.post("http://localhost:8080/products", productData);
        const productId = productResponse.data.id;

        // Upload image if selected
        if (selectedFile) {
          const formData = new FormData();
          formData.append("file", selectedFile);
          await axios.post(
              `http://localhost:8080/products/${productId}/upload`,
              formData,
              { headers: { "Content-Type": "multipart/form-data" } }
          );
      }
        setRes("Product and Image Uploaded Successfully!");
      }

      // Refresh product list & Reset form
      fetchProducts();
      resetForm();
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setRes("Something went wrong!");
    }
  };


  // Function to reset the form
  const resetForm = () => {
    setProduct({ ...emptyProduct });
    setIsEditing(false);
    setSelectedFile(null);
  };

  // Populate form for editing
  const editProduct = (productData) => {
    setProduct({ ...emptyProduct, ...productData });
    setIsEditing(true);
  };



  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/products/${id}`);
      
      alert(response.data); // Show the success message from the backend

      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id)); // Remove from UI

    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container-fluid p-5 my-4 product-form border rounded-5">
        <h1 className="text-center pb-3 fw-bold" style={{ color: "rgb(77, 161, 169)" }}>{isEditing ? "Edit Product" : "Create New Product"}</h1>
        <div className="row" id="create">
          <div className="col col-5 col-sm-6 col-md-5 col-lg-5">
            <label>Enter title</label>
            <input  type="text" className="form-control" placeholder="title" name="title" value={product.title} onChange={handleChange}/>
              <div className="row">
                <div className="col col-5 col-sm-6 col-md-5 col-lg-5">
                  <label>Category</label>
                  <input type="text" className="form-control" placeholder="category" name="category" value={product.category} onChange={handleChange}/>
                </div>
                <div className="col col-7 col-sm-6 col-md-7 col-lg-7">
                  <label>Price</label>
                  <input type="number" className="form-control" placeholder="price" name="price" value={product.price} onChange={handleChange}/>
                </div>
            </div>
          </div>
          <div className="col col-7 col-sm-6 col-md-7 col-lg-7">
            <label>Description</label>
            <textarea type="text" className="form-control" placeholder="description" name="description" value={product.description} onChange={handleChange}/>
          </div>
        </div>
        <div className="row" id="create">
          <div className="col col-5 col-sm-6 col-md-5 col-lg-5">
            <label>Status</label>
            <select className="form-control" name="status" value={product.status} onChange={handleChange}>
              <option value="" className="text-dark">Select Status</option>
              <option value="Available" className="text-dark">Available</option>
              <option value="Unavailable" className="text-dark">Unavailable</option>
            </select>
          </div>
          <div className="col col-7 col-sm-7 col-md-7 col-lg-7">
            <label>Image</label>
            <input id="fileInput" type="file" className="form-control" placeholder="image" name="image" onChange={handleFileChange}/>
          </div>
        </div>
        <div className="row product-submit ">
          <button type="submit" className="btn btn-primary ">{isEditing ? "Update Product" : "Add Product"}</button>
          {isEditing && <button type="button" className="btn btn-secondary" onClick={resetForm}>Cancel</button>}
        </div>
        <p>{res}</p>
      </form>

      <div className="container">
        {products.map((a) => {
          return (
            <div key={a.id} className="card man-card m-3">
              <h4 className="badge bg-success align-self-end">{a.status}</h4>
              <div className="man-img">
                <img src={a.imgurl} alt={a.title}/>
              </div>
              <div className="man-title d-flex justify-content-between align-items-center">
                <h2>{a.title}</h2>
                <h4><i className="bi bi-currency-rupee"></i>{a.price}</h4>
              </div>
              <p>{a.description}</p>
              <h5>{a.category}</h5>
              <div className="card-buttons d-flex justify-content-between align-items-center">
                <button className="btn btn-success" onClick={() => {deleteProduct(a.id);}}>Delete</button>
                <button className="btn btn-success" onClick={() => {editProduct(a);}}>Edit</button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Footer/>
      </div>
    </>

  );
}

export default S_ManageProducts;
