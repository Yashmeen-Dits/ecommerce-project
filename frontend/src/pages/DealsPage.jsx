import React from "react";
import { Link } from "react-router-dom";

function DealsPage() {
  return (
    <div className="deals-page">
      <Link to="/" className="back-btn">
        Back to Home
      </Link>

      <h1>Hot Deals</h1>
      <p>Exclusive offers and discounts available now.</p>
    </div>
  );
}

export default DealsPage;