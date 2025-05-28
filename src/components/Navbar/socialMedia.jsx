import React from "react";
import "./ContactBar.css";
import { FaFacebook, FaYoutube, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaSnapchat, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactBar = () => {
  return (
    <div className="contact-bar">
      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://www.facebook.com/masters.clinicn/" target="_blank" rel="noopener noreferrer" className="social-icon-button">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.youtube.com/channel/UCAy80cOsDrVqfQLM0HNP_sw" target="_blank" rel="noopener noreferrer" className="social-icon-button">
          <FaYoutube size={24} />
        </a>
        <a href="https://x.com/i/flow/login?redirect_after_login=%2Fmasters_clinic" target="_blank" rel="noopener noreferrer" className="social-icon-button">
          <FaXTwitter size={24} />
        </a>
        <a href="https://www.instagram.com/masters.clinic/" target="_blank" rel="noopener noreferrer" className="social-icon-button">
          <FaInstagram size={24} />
        </a>  
        <a href="https://www.snapchat.com/add/masters.clinic" target="_blank" rel="noopener noreferrer" className="social-icon-button">
          <FaSnapchat size={24} />
        </a>
        <a href="https://www.tiktok.com/@mastersclinics" target="_blank" rel="noopener noreferrer" className="social-icon-button">
          <FaTiktok size={24} />
        </a>
      </div>

      {/* Contact Info */}
    {/* Contact Info */}
<div className="contact-info">
  <div className="contact-item">
    <FaEnvelope size={20} />
    <a href="mailto:info@masters.clinic">info@masters.clinic</a>
  </div>
  <div className="contact-item">
    <FaPhone size={20} />
    <a href="tel:8002440181">8002440181</a>
  </div>
</div>

    </div>
  );
};

export default ContactBar;
