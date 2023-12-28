import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_logo from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from  '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
<div className="footer_logo">
    <img src={footer_logo} alt="" srcset="" />
    <p>HAPPY SHOPPY</p>
</div>
<ul className='footer_links'>
<li>Company</li>
<li>Products</li>
<li>Offices</li>
<li>About</li>
<li>Contact</li>
</ul>
<div className="footer_social_icons">
    <div className="footer_icons_container">
        <img src={instagram_logo} alt="" srcset="" />
    </div>
    <div className="footer_icons_container">
        <img src={pintester_icon} alt="" srcset="" />
    </div>
    <div className="footer_icons_container">
        <img src={whatsapp_icon} alt="" srcset="" />
    </div>
</div>
<div className="footer_copyright">
    <hr/>
    <p>Copyrights &copy; 2023 - All rights reserved by Rana Mujeeb Shahaid </p>
</div>
    </div>
  )
}

export default Footer