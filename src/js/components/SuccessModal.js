import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const SuccessModal = ({ show, onClose, message }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 650); // Длительность анимации `animate__fadeOut`
  };

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={`overlay animate__animated ${isClosing ? 'animate__fadeOut' : ''}`}>
      <div className={`success-modal animate__animated animate__fadeIn animate__faster ${isClosing ? 'animate__fadeOut' : ''}`}>
        <div className="success-modal__header">
          <div className="success-modal__icon">
            <img src="/icons/successfulOperation.svg" alt="success" />
          </div>
          <div className="success-modal__title">SUCCESS</div>
        </div>
        <div className="success-modal__footer">
          <div className="success-modal__message">
            {message}
          </div>
          <button className="button_bg" onClick={handleClose}>
            Continue
          </button>
        </div>
      </div>
    </div>,
    document.querySelector('.overlay-container')
  );
};

export default SuccessModal;
