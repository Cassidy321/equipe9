import React from 'react';
import './Footer.css'; 

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer-links">
                <li><a href="/FAQ">FAQ</a></li>
                <li><a href="/Propos">À propos</a></li>
                <li><a href="/contact">Contactez-nous</a></li>
            </ul>
            <div className="footer-copyright">
                &copy; {new Date().getFullYear()}. Tous droits réservés.
            </div>
        </footer>
    );
}