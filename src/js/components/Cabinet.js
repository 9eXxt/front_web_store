import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Cabinet = ({ closeModal, show, userData, updateUserData }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [initialData, setInitialData] = useState({
    first_name: '',
    last_name: '',
    address: '',
    phone_number: '',
    email: ''
  });
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (show && userData) {
      const userInitialData = {
        first_name: userData?.first_name || '',
        last_name: userData?.last_name || '',
        address: userData?.address || '',
        phone_number: userData?.phone_number || '',
        email: userData?.email || ''
      };
      setInitialData(userInitialData);
      setFormData(userInitialData);
    }
  }, [show, userData]);

  if (!show) return null;

  const handleLogout = async () => {
    try {
      const response = await fetch('https://192.168.1.173:8080/api/v1/logout', {
        method: 'POST',
        credentials: 'include'
      });

      if (response.ok) {
        console.log('Logout successful');
        handleClose();
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsEditing(false); // Сброс состояния редактирования
      closeModal();
    }, 500); // Длительность анимации `animate__fadeOut`
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://192.168.1.173:8080/api/v1/customers/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include', // Включите учетные данные для CORS
      });

      if (response.ok) {
        const updatedUserData = await response.json();
        console.log('Update successful');
        updateUserData(updatedUserData); // Обновление данных в родительском компоненте
        setIsEditing(false); // Выход из режима редактирования после успешного обновления
      } else {
        const errorData = await response.json();
        setErrors(errorData);
        console.error('Update failed:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancel = () => {
    setFormData(initialData); // Восстановление исходных данных
    setIsEditing(false);
    setErrors({});
  };

  const renderData = (label, value, name, isEditable, onChangeHandler, error) => (
    <div className="cabinet__data">
      <div className="cabinet__data_text">{label}:</div>
      {isEditable ? (
        <>
          <input
            type="text"
            name={name}
            value={value}
            onChange={onChangeHandler}
            className={`cabinet__data_input ${error ? 'cabinet__data_input--error' : ''}`}
          />
          {error && <div className="cabinet__error">{error}</div>}
        </>
      ) : (
        <div className="cabinet__data_info">{value || 'empty'}</div>
      )}
    </div>
  );

  return ReactDOM.createPortal(
    <div
      className={`overlay animate__animated animate__faster animate__fadeIn ${isClosing ? 'animate__fadeOut' : ''}`}
    >
      <div
        className={`cabinet animate__animated animate__fadeIn animate__faster ${isClosing ? 'animate__fadeOut' : ''}`}
      >
        <div className="cabinet__content">
          <div className="remove" onClick={handleClose}></div>
          <div className="cabinet__title">Personal Data</div>
          {renderData('First name', formData.first_name, 'first_name', isEditing, handleChange, errors.first_name)}
          {renderData('Last name', formData.last_name, 'last_name', isEditing, handleChange, errors.last_name)}
          {renderData('Phone number', formData.phone_number, 'phone_number', isEditing, handleChange, errors.phone_number)}
          {renderData('Email', formData.email, 'email', isEditing, handleChange, errors.email)}
          {renderData('Address(Optional)', formData.address, 'address', isEditing, handleChange, errors.address)}
        </div>
        <div className="cabinet__buttons">
          {isEditing ? (
            <>
              <button className="button_bg" onClick={handleCancel}>Cancel</button>
              <button className="button_bg" onClick={handleSubmit}>Submit</button>
            </>
          ) : (
            <>
              <button className="button_bg" onClick={handleLogout}>Quit</button>
              <button className="button_bg" onClick={() => setIsEditing(true)}>Change</button>
            </>
          )}
        </div>
      </div>
    </div>,
    document.querySelector('.overlay-container')
  );
};

export default Cabinet;
