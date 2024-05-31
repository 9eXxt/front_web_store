import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SuccessModal from './SuccessModal';

const LoginModal = ({ show, onClose, onShowRegistration, animate }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isClosingModal, setIsClosingModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(username.trim() !== '' && password.trim() !== '');
  }, [username, password]);

  const resetFields = () => {
    setUsername('');
    setPassword('');
    setErrorMessage('');
  };

  const handleClose = () => {
    setIsClosing(true);
    setIsClosingModal(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsClosingModal(false);
      resetFields();
      onClose();
    }, 650); // Длительность анимации `animate__fadeOut`
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://192.168.1.173:8080/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
        credentials: 'include'
      });

      if (response.ok) {
        console.log("Login successful");
        setSuccessMessage('You have successfully logged in!');
        setIsClosingModal(true);
        setTimeout(() => {
          setIsClosingModal(false);
          resetFields();
          onClose();
          setShowSuccessModal(true);
        }, 500);
      } else {
        const errorText = await response.text();
        setErrorMessage(errorText);
        console.error('Login failed:', errorText);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
  };

  if (!show && !showSuccessModal) {
    return null;
  }

  return (
    <>
      {show && ReactDOM.createPortal(
        <div className={`overlay animate__animated animate__faster ${animate ? 'animate__fadeIn' : ''} ${isClosing ? 'animate__fadeOut' : ''}`}>
          <div className={`login animate__animated animate__fadeIn animate__faster ${isClosingModal ? 'animate__fadeOut' : ''}`}>
            <form className="login__content" onSubmit={handleLogin}>
              <div className="remove" onClick={handleClose}></div>
              <div className="login__title">Login</div>
              <div className="login__data">
                <div className="login__data_text">Email</div>
                <input 
                  type="text" 
                  required
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
              </div>
              <div className="login__data">
                <div className="login__data_text">Password</div>
                <input 
                  type="password" 
                  required
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              {errorMessage && (
                <div className="login__error" style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>
              )}
              <div className="login__buttons">
                <button className="button_bg" type="button" onClick={onShowRegistration}>Registration</button>
                <button 
                  className={`button_bg ${!isFormValid ? 'button_bg_non_available' : ''}`} 
                  type="submit" 
                  disabled={!isFormValid}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.querySelector('.overlay-container')
      )}
      <SuccessModal show={showSuccessModal} onClose={handleSuccessClose} message={successMessage} />
    </>
  );
};

export default LoginModal;
