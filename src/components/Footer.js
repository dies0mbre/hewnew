import React from 'react';
import styles from "./Footer.module.css";

const Footer = () => (
    <footer id="footer" className={styles.footer}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className={styles.credits}> dies0mbre@gmail.com Privacy Policy
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;