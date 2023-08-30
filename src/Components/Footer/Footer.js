
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer-container">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} GitHub Explorer. All rights reserved.</p>
                    <p>Developed by <a href="https://bento.me/yohannes" target="_blank" rel="noopener noreferrer">Yohannes</a></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
