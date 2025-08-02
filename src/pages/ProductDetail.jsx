import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { fetchProducts } from "../redux/productSlice";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items: products } = useSelector((state) => state.products);

  const product = products.find((p) => String(p.id) === id);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (!product) return <Navigate to="/not-found" />;

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.thumbnail || product.images?.[0]} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="rating">
          <strong>Rating:</strong> ⭐ {product.rating || "N/A"}
        </p>
        <button className="add-to-cart" onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
        <p className="description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
