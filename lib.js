import React from 'react';
import Navbar from './navbar';
import HomePage from './Home';
import BooksPage from './books';
import AccountPage from './account';
import CartPage from './cart';

const LibraryManagement = () => {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div>
      <Navbar navigateTo={navigateTo} />
      {/* Render the corresponding component based on the current page */}
      {window.location.pathname === '/Home' && <HomePage />}
      {window.location.pathname === '/books' && <BooksPage />}
      {window.location.pathname === '/account' && <AccountPage />}
      {window.location.pathname === '/cart' && <CartPage />}
    </div>
  );
};

export default LibraryManagement;
