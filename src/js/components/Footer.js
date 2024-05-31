import React from 'react';

const Footer = () => {
  return (
      <div className="container">
        <div className="footer__header">
          <div className="footer__logo">
            <span className="footer__logo_maintext">Tech Shop</span>
            <span className="footer__logo_opttext">Best Tech Store</span>
          </div>
          <div className="footer__menu">
            <div className="footer__menu_item"><a href="/index.html">Home</a></div>
            <div className="footer__menu_item"><a href="#">About</a></div>
            <div className="footer__menu_item"><a href="#">Contact us</a></div>
            <div className="footer__menu_item"><a href="#">Blog</a></div>
          </div>
        </div>
        <hr />
        <div className="footer__footer">
          <div className="footer__copyright">
            <span className="footer__copyright_main">Copyright © 2023 Tech Shop. All rights reserved</span>
            <span className="footer__copyright_privacy">Privacy Policy</span>
            <span className="footer__copyright_terms">Terms of Use</span>
          </div>
          <div className="footer__social">
            <img src="/icons/facebook.svg" alt="facebook" />
            <img src="/icons/telegram.svg" alt="telegram" />
            <img src="/icons/instagram.svg" alt="instagram" />
          </div>
        </div>
      </div>
  );
};

export default Footer;
