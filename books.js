import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BooksPage.css';
import Navbar from './navbar';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [navigateToNavbar, setNavigateToNavbar] = useState(false);

  useEffect(() => {
    // Fetch the list of books from an API endpoint
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=javascript')
      .then(response => {
        setBooks(response.data.items.map(item => item.volumeInfo));
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const handleAddToCart = book => {
    setCartItems([...cartItems, book]);
  };

  const handleGoToNavbar = () => {
    setNavigateToNavbar(true);
  };

  if (navigateToNavbar) {
    return <Navbar />;
  }

  return (
    <div className="books-page">
     <button className="go-home-button" onClick={handleGoToNavbar}>Go Home</button>

      <div className="books-container">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          books.map(book => (
            <div className={`book ${book.title}`} key={book.title}>
              <div className="book-box">
                <img
                  className="book-image"
                  src={book.imageLinks?.thumbnail}
                  alt={book.title}
                />
                <div className="book-details">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">
                    Author: {book.authors?.join(', ')}
                  </p>
                  <p className="book-publisher">Publisher: {book.publisher}</p>
                  <p className="book-publishedDate">
                    Published Date: {book.publishedDate}
                  </p>
                  <p className="book-availability">
                    Availability: {book.available ? (
                      <span className="available">Available</span>
                    ) : (
                      <span className="unavailable">Unavailable</span>
                    )}
                  </p>
                  <p className="book-copies">Copies: {book.copies}</p>
                  <button
                    className="add-to-cart"
                    onClick={() => handleAddToCart(book)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BooksPage;
