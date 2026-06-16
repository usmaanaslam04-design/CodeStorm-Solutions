import { Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";


function TopBanner() {
  return (
    <div className="top-banner">
      
      {/* Left side (Email) */}
      <div className="left-section">
        <a href="#" className="email-link" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Mail size={16} />
          info@cuspidoo.com
        </a>
      </div>

      {/* Right side (Social Icons) */}
      <div className="right-section">
        
      
        <a href="https://www.instagram.com/cuspidooinstruments?igsh=MmpkM2NhY25rNmZh" className="social-icon"><FaInstagram  /></a>
  
        <a href="https://www.linkedin.com/in/usman-cuspidoo-5b7b70373?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="social-icon"><FaLinkedin  /></a>
      </div>

    </div>
  );
}

export default TopBanner;