import React from "react";
import "./Footer.css";
// Import social media icons (you can use react-icons or your own image files)

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="#">HOME</a>
                <a href="#">CHECK MAIL</a>
                <a href="#">RTT</a>
                <a href="#">GALLERY</a>
                <a href="#">SEARCH HOSPITALS</a>
                <a href="#">CONTACT US</a>
                <a href="#">SITEMAP</a>
            </div>

            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.wbhealth.gov.in/images/facebook.png" alt="Facebook" className="social-icon" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.wbhealth.gov.in/images/twitter.png" alt="Twitter" className="social-icon" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.wbhealth.gov.in/images/youtube.png" alt="YouTube" className="social-icon" />
                </a>
            </div>

            <div className="footer-bottom">
                <p>Designed & Developed by Department of Health & Family Welfare (GOvT. of WB)</p>
                <p className="visitor-counter"><strong>Visitor Counter: 64269032</strong></p>
            </div>
        </footer>
    );
};

export default Footer;