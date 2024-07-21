import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import your CSS file

function Footer() {
  const [contactInfo, setContactInfo] = useState('');

  const handleWhatsappClick = () => {
    // Replace this URL with the WhatsApp URL for your business
    window.location.href = 'https://wa.me/1234567890'; 
  };

  const handleInstagramClick = () => {
    // Replace this URL with the Instagram URL for your business
    window.location.href = 'https://www.instagram.com/example';
  };

  const handlePhoneClick = () => {
    // Replace this URL with the phone number URL scheme for your business
    window.location.href = 'tel:+1234567890';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:example@example.com'; // Replace this with your email address
  };

  return (
    <div className="footer-container">
      <footer>
        {/* Footer content */}
        <div className="footer-content">
          <div>
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Kurti</a></li>
            </ul>
          </div>
          <div>
            <h3>Need Help</h3>
            <ul>
              <li><a href="#">Track Your Order</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#" onClick={handleWhatsappClick}>Chat on WhatsApp</a></li>
              <li><a href="#" onClick={handlePhoneClick}>Call Us</a></li>
              <li><a href="#" onClick={handleEmailClick}>Email Us</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        {/* Get in touch section */}
        <div className="get-in-touch">
          <p>Get in touch:</p>
          <FontAwesomeIcon icon={faWhatsapp} onClick={handleWhatsappClick} />
          <FontAwesomeIcon icon={faInstagram} onClick={handleInstagramClick} />
          <FontAwesomeIcon icon={faPhone} onClick={handlePhoneClick} />
          <FontAwesomeIcon icon={faEnvelope} onClick={handleEmailClick} />
        </div>
        {/* Render contact info */}
        <p className="footer-text">{contactInfo}</p>
        <p className="footer-text">© 2023 LADOS . All Rights Reserved by TM Pvt. Ltd.</p>
      </footer>
    </div>
  );
}

export default Footer;
