import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../styles/landing.css";


function Navbar() {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
   <nav className="navbar">
    <h2 className="logo">ShopEase</h2>

      <div className={`nav-links ${menuOpen? "active" : ""}`}>
       <Link to="/">Home</Link>
       <Link to="/products">Products</Link>
       <a href="#categories">Category</a>
      <Link to ="/cart">Cart</Link>
      <Link to="/deals">Deals</Link>
      </div>


      <button className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
         ☰
      </button>

      <button className="nav-btn">
        Login
      </button>
    </nav>

  );
}

export default Navbar