import React, { useState, useEffect } from 'react';
import LoginModal from './Login';
import RegistrationModal from './Registration';
import Cabinet from './Cabinet';

const Header = ({ sectionClass }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showCabinetModal, setShowCabinetModal] = useState(false);
  const [animateLogin, setAnimateLogin] = useState(false);
  const [userData, setUserData] = useState(null); // Добавлено состояние для данных пользователя

  useEffect(() => {
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const category = document.querySelector('.category');
    const section = document.querySelector(`.${sectionClass}`);

    function addLockScroll() {
      document.body.classList.add('lock-scroll');
    }

    function removeLockScroll() {
      document.body.classList.remove('lock-scroll');
    }

    function initializeMenuHamburger() {
      if (header && hamburger) {
        hamburger.addEventListener('click', function () {
          hamburger.classList.toggle('hamburger_active');
          category.classList.toggle('category_active');
          if ('ontouchstart' in window) {
            document.body.classList.toggle('lock-scroll');
          }
        });

        category.addEventListener('mouseenter', function () {
          if (category.classList.contains('category_active')) {
            addLockScroll();
          }
        });

        category.addEventListener('mouseleave', removeLockScroll);
      }
    }

    function updateMargin(section, value) {
      section.style.setProperty('--margin-top', `${value}px`);
    }

    function updateMargins() {
      if (section && header && category) {
        updateMargin(section, header.offsetHeight);
        updateMargin(category, header.offsetHeight);
      }
    }

    function addOrDeleteClass(screenWidth, requiredWidth, item) {
      if (screenWidth < requiredWidth) {
        item.classList.add('header__menu_item_non_visible');
      } else {
        item.classList.remove('header__menu_item_non_visible');
      }
    }

    function handleResize() {
      let screenWidth = window.innerWidth;
      let menuItems = document.querySelectorAll('.header__menu_item');
      let lastMenuItem = menuItems[menuItems.length - 1];
      let secondMenuItem = menuItems[1];

      addOrDeleteClass(screenWidth, 1260, lastMenuItem);
      addOrDeleteClass(screenWidth, 1165, secondMenuItem);

      updateMargins();
    }

    initializeMenuHamburger();
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      if (hamburger) {
        hamburger.removeEventListener('click', initializeMenuHamburger);
        category.removeEventListener('mouseenter', addLockScroll);
        category.removeEventListener('mouseleave', removeLockScroll);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [sectionClass]);

  const updateUserData = (data) => {
    setUserData(data);
  };

  const handleIconClick = async () => {
    try {
      const response = await fetch('https://192.168.1.173:8080/api/v1/check-auth', {
        method: 'GET',
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data); // Устанавливаем данные пользователя
        setShowCabinetModal(true);
      } else {
        setShowLoginModal(true);
      }
    } catch (error) {
      console.error('Error checking auth:', error);
      setShowLoginModal(true);
    }
  };

  const handleShowLogin = (withAnimation = true) => {
    setShowLoginModal(true);
    setAnimateLogin(withAnimation);
  };

  const handleShowRegistration = () => {
    setShowLoginModal(false);
    setShowRegistrationModal(true);
  };

  return (
    <div className="full-container">
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <a href="/index.html" className="header__title">Tech shop</a>
      <div className="searcher">
        <img src="../icons/Search.svg" alt="icon_search" />
        <span>Search</span>
      </div>
      <div className="header__menu">
        <div className="header__menu_item header__menu_item_active"><a href="#">Home</a></div>
        <div className="header__menu_item"><a href="#">About</a></div>
        <div className="header__menu_item"><a href="#">Contact us</a></div>
        <div className="header__menu_item"><a href="#">Blog</a></div>
      </div>
      <div className="header__icons">
        <a href="/html/Wishlist.html" className="header__icon">
          <svg width="32" height="33" viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 7.5C8.239 7.5 6 9.716 6 12.45C6 14.657 6.875 19.895 15.488 25.19C15.6423 25.2839 15.8194 25.3335 16 25.3335C16.1806 25.3335 16.3577 25.2839 16.512 25.19C25.125 19.895 26 14.657 26 12.45C26 9.716 23.761 7.5 21 7.5C18.239 7.5 16 10.5 16 10.5C16 10.5 13.761 7.5 11 7.5Z" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg_animate" />
          </svg>
        </a>
        <a href="/html/ShoppingCart.html" className="header__icon">
          <svg width="32" height="33" viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5.5H7L10 22.5H26M10 17.1667H25.59C25.7056 17.1667 25.8177 17.1267 25.9072 17.0535C25.9966 16.9802 26.0579 16.8782 26.0806 16.7648L27.8806 7.76479C27.8951 7.69222 27.8934 7.61733 27.8755 7.54552C27.8575 7.47372 27.8239 7.40679 27.7769 7.34956C27.73 7.29234 27.6709 7.24625 27.604 7.21462C27.5371 7.18299 27.464 7.16662 27.39 7.16667H8M12 26.5C12 27.0523 11.5523 27.5 11 27.5C10.4477 27.5 10 27.0523 10 26.5C10 25.9477 10.4477 25.5 11 25.5C11.5523 25.5 12 25.9477 12 26.5ZM26 26.5C26 27.0523 25.5523 27.5 25 27.5C24.4477 27.5 24 27.0523 24 26.5C24 25.9477 24.4477 25.5 25 25.5C25.5523 25.5 26 25.9477 26 26.5Z" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg_animate" />
          </svg>
        </a>
        <div className="header__icon" onClick={handleIconClick}>
          <svg width="32" height="33" viewBox="0 0 32 33" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 27.5V24.8333C24 23.4188 23.5224 22.0623 22.6722 21.0621C21.8221 20.0619 20.669 19.5 19.4667 19.5H11.5333C10.331 19.5 9.17795 20.0619 8.32778 21.0621C7.47762 22.0623 7 23.4188 7 24.8333V27.5M21 10C21 12.4853 18.9853 14.5 16.5 14.5C14.0147 14.5 12 12.4853 12 10C12 7.51472 14.0147 5.5 16.5 5.5C18.9853 5.5 21 7.51472 21 10Z" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svg_animate" />
          </svg>
        </div>
      </div>
      <div className="header__language">
        <div className="header__language_item header__language_active">EN</div>
        <div>|</div>
        <div className="header__language_item">UA</div>
      </div>
      <LoginModal show={showLoginModal} onClose={() => setShowLoginModal(false)} onShowRegistration={handleShowRegistration} animate={animateLogin} />
      <RegistrationModal show={showRegistrationModal} onClose={() => setShowRegistrationModal(false)} onShowLogin={handleShowLogin} />
      <Cabinet closeModal={() => setShowCabinetModal(false)} show={showCabinetModal} userData={userData} updateUserData={updateUserData} /> {/* Передаем данные пользователя */}
    </div>
  );
};

export default Header;
