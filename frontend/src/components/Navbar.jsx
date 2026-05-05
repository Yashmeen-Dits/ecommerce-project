import React from 'react'

function Navbar() {
  return (
   <nav className="navbar">
    <h2 className="logo">ShopEase</h2>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Categories</a>
        <a href="#">Contact</a>
      </div>

      <button className="nav-btn">
        Login
      </button>
    </nav>

  );
}

export default Navbar