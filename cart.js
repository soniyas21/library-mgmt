import React, { useState } from 'react';
import Navbar from './navbar';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [navigateToNavbar, setNavigateToNavbar] = useState(false);

  const handleRemoveFromCart = (itemId) => {
    // Remove the item from the cart
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleCheckout = () => {
    // Implement your logic for the checkout process
    console.log('Checkout process initiated');
  };

  const handleGoToNavbar = () => {
    setNavigateToNavbar(true);
  };

  if (navigateToNavbar) {
    return <Navbar />;
  }

  return (
    <div>
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <h4>{item.title}</h4>
              <p>Author: {item.author}</p>
              <button className="remove-from-cart" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <button id="checkout" onClick={handleCheckout}>Checkout</button>
        </div>
      )}

      <button onClick={handleGoToNavbar}>Go Home</button>
    </div>
  );
};

export default CartPage;
