// import React from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../../images/logo.svg'



// const ClickHandler = () => {
//     window.scrollTo(10, 0);
// }


// const Footer = (props) => {
   
//     return (
//         <footer className={"" +props.hclass}>
//             <div className="wpo-upper-footer">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
//                             <div className="widget about-widget">
//                                 <div className="logo widget-title">
//                                     <img src={logo} alt="blog" />
//                                 </div>
//                                 <p>Mattis inelit neque quis donec eleifnd amet. Amet sed et cursus eu euismod.
//                                     Egestas
//                                     in morbi tristique.</p>
//                                 <div className="social-widget">
//                                     <ul>
//                                         <li><Link onClick={ClickHandler} to="#"><i className="flaticon-facebook-app-symbol"></i></Link></li>
//                                         <li><Link onClick={ClickHandler} to="#"><i className="flaticon-twitter"></i></Link></li>
//                                         <li><Link onClick={ClickHandler} to="#"><i className="flaticon-linkedin"></i></Link></li>
//                                         <li><Link onClick={ClickHandler} to="#"><i className="flaticon-instagram"></i></Link></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
//                             <div className="widget link-widget">
//                                 <div className="widget-title">
//                                     <h3>Quick Links</h3>
//                                 </div>
//                                 <ul>
//                                     <li><Link onClick={ClickHandler} to="/home">Home</Link></li>
//                                     <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
//                                     <li><Link onClick={ClickHandler} to="/services">Services</Link></li>
//                                     <li><Link onClick={ClickHandler} to="/blog">Latest News</Link></li>
//                                     <li><Link onClick={ClickHandler} to="/doctor">Team</Link></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
//                             <div className="widget link-widget s2">
//                                 <div className="widget-title">
//                                     <h3>Useful Links</h3>
//                                 </div>
//                                 <ul>
//                                     <li><Link onClick={ClickHandler} to="/project">Projects</Link></li>
//                                     <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
//                                     <li><Link onClick={ClickHandler} to="/cart">Cart</Link></li>
//                                     <li><Link onClick={ClickHandler} to="/contact">Contact us</Link></li>
//                                     <li><Link onClick={ClickHandler} to="/faq">Faq</Link></li>
//                                 </ul>
//                             </div>
//                         </div>

//                         <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
//                             <div className="widget contact-widget">
//                                 <div className="widget-title">
//                                     <h3>Contact Us</h3>
//                                 </div>
//                                 <ul>
//                                     <li><i className="flaticon-email"></i><span>medically@gmail.com</span>
//                                     </li>
//                                     <li> <i className="flaticon-telephone"></i><span>(704) 555-0127
//                                         <br />(208) 555-0112</span></li>
//                                     <li><i className="flaticon-location-1"></i><span>4517 Washington Ave. <br/>
//                                         Manchter, Kentucky 495</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="wpo-lower-footer">
//                 <div className="container">
//                     <div className="row g-0">
//                         <div className="col col-lg-6 col-12">
//                             <p className="copyright"> Copyright &copy; 2024 Medically by <Link onClick={ClickHandler} to="/">wpOceans</Link>.
//                                 All
//                                 Rights Reserved.</p>
//                         </div>
//                         <div className="col col-lg-6 col-12">
//                             <ul>
//                                 <li><Link onClick={ClickHandler} to="/privace">Privace & Policy</Link></li>
//                                 <li><Link onClick={ClickHandler} to="/terms">Terms</Link></li>
//                                 <li><Link onClick={ClickHandler} to="/about">About us</Link></li>
//                                 <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}
//             </div></div></div>
//         </footer>
//     )
// }

// export default Footer;



import { FaFacebook, FaYoutube, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaSnapchat, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './style.css'; // Assuming you have a CSS file for styling
const Footer = (props) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer  >
           <div  style={{width: '100%' , display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <div className="">
    <img src={"https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/dEYvd/lBmMUm3zZyt94KtrsYYdL6UrUEOoncu4UJnK9VhR.png"} alt="Company Logo" style={{width:"300px", marginBottom : "20px" }}  />
  </div>
  
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
        </div>
</div>
        </footer>
    );
};

export default Footer;


