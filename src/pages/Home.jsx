import React from "react";
import "../styles/home.css";  // Make sure path is correct
import iconImage from "../assets/img/icon.png";  // Correct path to image
import appleImage from "../assets/img/apel.png";  // Correct path to image

const Homepage = () => {
  return (
    <div className="container"> {/* This is the container */}
      <div className="header">
        <div className="logo">
          <h1>Homepage</h1>
        </div>
        <div className="nav">
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="left-sidebar">
          <div className="user-profile">
            <img src={iconImage} alt="User Profile" />
          </div>
          <ul className="sidebar-menu">
            <li><a href="#">Account Setting</a></li>
          </ul>
        </div>
        <div className="main-content">
          <div className="section">
            <h3>Best Seller</h3>
          </div>
          <div className="section">
            <img src={appleImage} alt="contoh produk" />
            <h1>Apel Rp 5000</h1>
          </div>
          <div className="section">
            <img src={appleImage} alt="contoh produk" />
            <h1>Apel Rp 5000</h1>
          </div>
          <div className="section">
            <img src={appleImage} alt="contoh produk" />
            <h1>Apel Rp 5000</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
