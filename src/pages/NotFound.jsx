import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404 - Product Not Found</h1>
        <p>The product you're looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
