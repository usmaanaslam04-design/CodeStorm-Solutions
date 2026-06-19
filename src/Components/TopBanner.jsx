import { Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";


function TopBanner() {
  return (
    <div className="top-banner">
      
      {/* Left side (Email) */}
      <div className="left-section">
        <a href="#" className="email-link" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Mail size={16} />
          codestormsolutions@gmail.com
        </a>
      </div>

      {/* Right side (Social Icons) */}
      <div className="right-section">
        
      
        <a href="https://www.instagram.com/codestormsolutions/" className="social-icon"><FaInstagram  /></a>
  
        <a href="https://www.linkedin.com/company/codestorm-solutions" className="social-icon"><FaLinkedin  /></a>
      </div>

    </div>
  );
}

export default TopBanner;