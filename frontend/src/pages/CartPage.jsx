import React from 'react';
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <div className="cart-page">

        <Link to="/" className="back-btn">
         Back to Home
      </Link>

      <h1>Your Cart</h1>

      <p>Your selected items will appear here.</p>




    </div>
  )
}

export default CartPage;