import React from 'react'

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
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Product Banner"
        />
      </div>
    </section>
   
  );
}

export default Home