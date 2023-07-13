import React, { useState } from 'react';
import Navbar from './navbar';
import './acc.css';

const AccountPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [navigateToNavbar, setNavigateToNavbar] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUpdateAccount = (e) => {
    e.preventDefault();
    console.log('Account updated successfully');
  };

  const handleGoToNavbar = () => {
    setNavigateToNavbar(true);
  };

  if (navigateToNavbar) {
    return <Navbar />;
  }

  return (
    <div className="account-page">
      <h2>Account</h2>

      <form onSubmit={handleUpdateAccount}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />

        <button type="submit">Update Account</button>
      </form>

      <button onClick={handleGoToNavbar}>Go Home</button>
    </div>
  );
};

export default AccountPage;
