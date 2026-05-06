import React from 'react';
import {Link} from "react-router-dom";


function ProductPage() {
  return (
    <div className="product-page">
        
      <Link to="/" className="back-btn">
      Back to Home</Link>

      <h1>Products Coming Soon!</h1>
      <p>
        Our latest products will be available here soon.
      </p>
    </div>
    
  );
}

export default ProductPage;