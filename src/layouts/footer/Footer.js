import React from "react";
import KasaWhiteLogo from "../../assets/images/kasa-white.svg";
import "./Footer.css";
/**
 * Component to handle footer layout
 *
 * @component
 */

function Footer() {
  return <section className="footer">
  <div className="footer-logo">
      <img src={KasaWhiteLogo} alt="Kasa Logo" />
  </div>
  <p>© 2020 Kasa. All rights reserved
</p>
</section>;
}

export default Footer;






