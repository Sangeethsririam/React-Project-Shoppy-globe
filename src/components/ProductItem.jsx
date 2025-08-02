import React from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`} className="view-details">
  View Details
</Link>

    </div>
  );
};

export default ProductItem;
