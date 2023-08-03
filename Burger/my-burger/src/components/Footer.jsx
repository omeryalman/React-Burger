import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css';

function Footer() {
    return ( <div className="footer">
      <div className="iconList">
      <FacebookIcon className="icon"/>
      <InstagramIcon className="icon"/>
      <TwitterIcon className="icon"/>
      </div>

      <a>Tüm hakları saklıdır | Burger Yiyelim</a>
    </div> );
    
}

export default Footer;