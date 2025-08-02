import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  const imageSrc = item.image || item.images?.[0]; 

  return (
    <div className="cart-item">
      <img src={imageSrc} alt={item.title} className="cart-img" />
      <div className="cart-item-details">
        <h4>{item.title}</h4>
        <p>${item.price.toFixed(2)}</p>
        <div className="quantity-box">
          <button onClick={() => onDecrease(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrease(item.id)}>+</button>
        </div>
      </div>
      <button className="remove-btn" onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
