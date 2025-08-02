
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import ProductItem from "../components/ProductItem";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items: products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (
      !loading &&
      products.length > 0 &&
      searchTerm.trim() &&
      filteredProducts.length === 0
    ) {
      navigate("/not-found");
    }
  }, [loading, products.length, searchTerm, filteredProducts.length, navigate]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>Error: {error}</p>;

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
