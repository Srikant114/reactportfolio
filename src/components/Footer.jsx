import React from "react";
import "../components/Footer.css";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Bangalore.</p>
              <p>India.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +91-9876543210
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              info@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About The Company</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Aut quas,minima soluta commodi 
            perferendis aperiam voluptate provident,
          </p>
          <div className="social">
          <FaFacebook size={20} style={{color:"white", marginRight:"2rem"}}/>
          <FaTwitter size={20} style={{color:"white", marginRight:"2rem"}}/>
          <FaLinkedin size={20} style={{color:"white", marginRight:"2rem"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
