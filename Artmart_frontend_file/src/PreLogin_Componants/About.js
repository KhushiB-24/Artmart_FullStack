import React from "react";
import "./About.css";
import Footer from "./Footer";

const About = () => {
  const arrOfMembers = [{}];

  const platformStatistics = [
    { title: "Artists", value: "1,200" },
    { title: "Assets", value: "5,000" },
    { title: "Sales", value: "2,500" },
    { title: "Reviews", value: "1,800" },
  ];

  const keyFeatures = [
    {
      icon: <i class="bi bi-play"></i>,
      title: "Easy to Use",
      description: "Intuitive interface for artists and buyers.",
    },
    {
      icon: <i class="bi bi-shield"></i>,
      title: "Secure Transactions",
      description: "Safe and secure payment processing.",
    },
    {
      icon: <i class="bi bi-people"></i>,
      title: "Community Driven",
      description: "Join a vibrant community of artists and buyers.",
    },
    {
      icon: <i class="bi bi-clock"></i>,
      title: "24/7 Support",
      description: "Available anytime, anywhere.",
    },
  ];

  return (
    <>
      <div className="container-fluid text-light">
        <div className="row text-start intro-block py-5 my-5">
        <div className="col col-12 col-lg-6">
          <h1>About ArtMart</h1>
            <p>
              At ArtMart, we believe every piece of art has a story, and every
            artist deserves a platform to share their vision with the world.
            Founded in 2025, we've created a vibrant marketplace where artists
            and art enthusiasts come together to celebrate creativity in its
            purest form.
            </p>
          </div>
          <div className="col col-12 col-lg-6">
          <h1 className="">Our Mission & Vision</h1>
          <p>
            We're on a mission to democratize the art world by making original
            sketches and drawings accessible to everyone while ensuring artists
            receive fair compensation for their work. Our platform bridges the
            gap between talented artists and passionate collectors, creating
            meaningful connections through art.
          </p>
          </div>
        </div>

        <div className="row text-center stat-block">
          <h2>Platform Statistics</h2>
          <div className="stat-box">
            {platformStatistics.map((stat, index) => (
              <div key={index} className="text-center stat-cards">
                <h3 className="">{stat.value}</h3>
                <p className="">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="row text-center">
          <h2>Key Features</h2>
          <div className="keyF-box">
            {keyFeatures.map((features, index) => (
              <div key={index} className="text-center key-cards">
                <h2>{features.icon}</h2>
                <h3 className="">{features.title}</h3>
                <p>{features.description}</p>
              </div>
            ))}
          </div>
        </div>


        {/* <div className="row text-center">
          <h1>Meet The Team</h1>
          <div className="row members">
            <div className="col col-12 col-sm-12 col-md-4 col-lg-4">
              <h6>Manager</h6>
            </div>
            <div className="col col-12 col-sm-12 col-md-4 col-lg-4">
              <h6>Admin</h6>
            </div>
            <div className="col col-12 col-sm-12 col-md-4 col-lg-4">
              <h6>Assistance</h6>
            </div>
          </div>
        </div> */}
      </div>

      <Footer/>
    </>
  );
};

export default About;
