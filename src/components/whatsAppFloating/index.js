import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './SocialMedia.css';

const SocialMedia = () => {
return (
    <div className="floating-whatsapp">
        <a
            href="https://wa.me/966555202417"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            aria-label="الدردشة على واتساب"
        >
            <FaWhatsapp className="whatsapp-icon" />
            <span className="whatsapp-text">تواصل معنا على واتساب</span>
        </a>
    </div>
);
};

export default SocialMedia;