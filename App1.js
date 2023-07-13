import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaMobile , FaFacebook , FaGoogle } from 'react-icons/fa';
import Navbar from './navbar';

const LoginOrSignupPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [otp, setOtp] = useState('');
  const [showMobileVerification, setShowMobileVerification] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showMobileVerifySection, setShowMobileVerifySection] = useState(false);

  const handleAuthentication = () => {
    // Perform authentication logic
    // Assuming authentication is successful
    setIsLoggedIn(true);
  };

  const handleEmailLogin = () => {
    // Handle email login logic
    // Assuming the email login process sends an OTP to the provided email
    // and verifies it against the entered OTP
    if (otp === '123456') {
      handleAuthentication();
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleGmailLogin = () => {
    // Handle Gmail login logic
    handleAuthentication();
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login logic
    handleAuthentication();
  };

  const handleLogin = () => {
    // Handle login logic
    setShowLogin(true);
    setShowSignup(false);
    setShowMobileVerifySection(false);
  };

  const handleSignup = () => {
    // Handle signup logic
    setShowLogin(false);
    setShowSignup(true);
    setShowMobileVerifySection(false);
  };

  const handleMobileVerification = () => {
    setShowLogin(false);
    setShowSignup(false);
    setShowMobileVerifySection(true);
  };
  const handleMobile = () => {
    setShowLogin(false);
    setShowSignup(false);
    setShowMobileVerifySection(false);
  };

  const handleVerify = () => {
    // Perform verification logic here
    setIsLoggedIn(true);
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <div className="form-container ">
          <h2 className="title">Login or Sign Up</h2>
          {!showLogin && !showSignup && !showMobileVerifySection && (
            <div className="buttons">
              <button className="login-button" onClick={handleLogin}>Login</button>
              <button className="signup-button" onClick={handleSignup}>Sign Up</button>
              <button className="mobile-verify-button" onClick={handleMobileVerification}>Verify with Mobile</button>
            </div>
          )}
          {showLogin && (
            <div className="form">
              <h3>Login</h3>
              <form onSubmit={handleLogin}>
                <div className="input-container">
                  <FaEnvelope className="input-icon" />
                  <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-container">
                  <FaLock className="input-icon" />
                  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" onClick={handleVerify}>Sign In</button>
              </form>
                            <button className="login-button" onClick={handleMobile}>Go Back</button>

            </div>
          )}
          {showSignup && (
            <div className="form">
              <h3>Sign Up</h3>
              <form onSubmit={handleSignup}>
                <div className="input-container">
                  <FaEnvelope className="input-icon" />
                  <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-container">
                  <FaLock className="input-icon" />
                  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-container">
                  <FaUser className="input-icon" />
                  <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <button type="submit" onClick={handleVerify}>Sign Up</button>
              </form>
                            <button className="login-button" onClick={handleMobile}>Go Back</button>

            </div>
          )}
          {showMobileVerifySection && (
            <div className="form">
              <h3>Mobile Verification</h3>
              <div className="input-container">
                <FaMobile className="input-icon" />
                <input type="text" placeholder="Enter Mobile Number" />
              </div>
              <div className="input-container">
                <FaLock className="input-icon" />
                <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
              </div>
              <button onClick={handleEmailLogin}>Verify</button>
              <button className="login-button" onClick={handleMobile}>Go Back</button>
            </div>
          )}
          <div className="external-logins">
            <button className="external-login-button" onClick={handleGmailLogin}>
              <FaGoogle className="external-login-icon" /> Log in with Gmail
            </button>
            <div className="btnFacebook">
              <button className="external-login-button" onClick={handleFacebookLogin}>
                <FaFacebook className="external-login-icon" /> Log in with Facebook
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Navbar />
      )}
    </div>
  );
};

export default LoginOrSignupPage;
