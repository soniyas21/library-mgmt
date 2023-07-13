import React, { useState } from 'react';
import BooksPage from './books';
import AccountPage from './account';
import CartPage from './cart';
import LoginOrSignupPage from './App1';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  const handleNavigation = (path) => {
    setCurrentPage(path);
  };

  const handleGoBackToLogin = () => {
    setCurrentPage('/App1');
  };

  const renderNavbarContent = () => {
    if (currentPage === '/books') {
      return <BooksPage />;
    } else if (currentPage === '/account') {
      return <AccountPage />;
    } else if (currentPage === '/App1') {
      return <LoginOrSignupPage />;
    } else if (currentPage === '/cart') {
      return <CartPage />;
    } else {
      return (
        <div className="navbar-container">
          <nav className="navbar"> {/* Apply the "navbar" class */}
            <ul>
              <li>
                <button onClick={() => handleNavigation('/books')}>Books</button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/account')}>Account</button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/cart')}>Cart</button>
              </li>
            </ul>
            <button onClick={handleGoBackToLogin}>Back to Login</button>
          </nav>
        </div>
      );
    }
  };

  return <div className="navbar-background">{renderNavbarContent()}</div>;
};

export default Navbar;
