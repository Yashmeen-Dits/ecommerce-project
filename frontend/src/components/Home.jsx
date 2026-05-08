import React from 'react'
import SaleBanner from "../assets/sale-banner.png";
import "../styles/landing.css";


function Home() {
  return (
     <section className="home-banner">
      <div className="banner-left">
        <span className="banner-tag">
          New Collection 2026
        </span>

        <h1>
          Discover Premium Shopping
          Experience
        </h1>

        <p>
          Shop the latest fashion,
          electronics and essentials
          all in one place.
        </p>

        <div className="banner-actions">
          <button className="shop-btn">
            Shop Now
          </button>

          <button className="explore-btn">
            Explore
          </button>
        </div>
      </div>

      <div className="banner-right">
        <img 
          src={SaleBanner} alt="50% off Sale"
        />
      </div>
    </section>
   
  );
}

export default Home;