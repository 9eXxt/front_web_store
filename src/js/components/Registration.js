import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SuccessModal from './SuccessModal';

const RegistrationModal = ({ show, onClose, onShowLogin }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    password: '',
    address: ''
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false); // Добавляем состояние для SuccessModal
  const [isClosing, setIsClosing] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { phone_number, email, password } = formData;
    setIsFormValid(
      phone_number.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== ''
    );
  }, [formData]);

  const resetFields = () => {
    setFormData({
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      password: '',
      address: ''
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      resetFields();
      onClose();
    }, 650); // Длительность анимации `animate__fadeOut`
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://192.168.1.173:8080/api/v1/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('User registered:', result);
        setShowSuccess(true); // Показываем SuccessModal
        resetFields();
        onClose(); // Закрываем окно регистрации
      } else {
        const result = await response.json();
        setErrors(result); // Устанавливаем ошибки
        console.error('Registration failed:', result);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onShowLogin(false); // Переход к окну входа без анимации
  };

  if (!show && !showSuccess) {
    return null;
  }

  return (
    <>
      {show && ReactDOM.createPortal(
        <div className={`overlay ${isClosing ? 'animate__animated animate__fadeOut' : ''}`}>
          <div className={`registration animate__animated animate__fadeIn animate__faster ${isClosing ? 'animate__fadeOut' : ''}`}>
            <form className="registration__content" onSubmit={handleSubmit}>
              <div className="remove" onClick={handleClose}></div>
              <div className="registration__title">Registration</div>
              <div className="registration__data">
                <div className="registration__data_text">Phone number:</div>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
                {errors.phone_number && (
                  <div className="registration__error">{errors.phone_number}</div>
                )}
              </div>
              <div className="registration__data">
                <div className="registration__data_text">Email:</div>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="registration__error">{errors.email}</div>
                )}
              </div>
              <div className="registration__data">
                <div className="registration__data_text">Password:</div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className="registration__error">{errors.password}</div>
                )}
              </div>
              <div className="registration__subtitle">Optional data</div>
              <div className="registration__data">
                <div className="registration__data_text">First name:</div>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
                {errors.first_name && (
                  <div className="registration__error">{errors.first_name}</div>
                )}
              </div>
              <div className="registration__data">
                <div className="registration__data_text">Last name:</div>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
                {errors.last_name && (
                  <div className="registration__error">{errors.last_name}</div>
                )}
              </div>
              <div className="registration__data">
                <div className="registration__data_text">Address:</div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && (
                  <div className="registration__error">{errors.address}</div>
                )}
              </div>
              <div className="registration__button">
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
      {showSuccess && (
        <SuccessModal show={showSuccess} onClose={handleSuccessClose} />
      )}
    </>
  );
};

export default RegistrationModal;
