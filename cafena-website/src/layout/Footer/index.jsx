import React from "react";
import { FaPaperPlane, FaTwitter, FaFacebookF, FaYoutube, FaGooglePlusG, FaInstagram} from "react-icons/fa";
import "./index.scss";
import { Link } from "react-router-dom"

const Footer = () => {
  const openInNewTab = (to) => {
    const newWindow = window.open(to, '_blank');
    newWindow.focus();
  };
  return (
    <footer id="footerSection">
      <div className="container">
        <div className="topFooter">
          <div className="phone">
            <div className="phoneImg">
              <img
                src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ft-phone.png"
                alt=""
              />
            </div>
            <div className="phoneContent">
              <span className="phoneText">PHONE :</span>
              <span className="number"> +88019 339 702 520</span>
            </div>
          </div>
          <div className="location">
            <div className="locationImg">
              <img
                src="https://xpressrow.com/html/cafena/cafena/assets/images/icons/ft-map-marker.png"
                alt=""
              />
            </div>
            <div className="locationContent">
              <span className="locationText">Address :</span>
              <span className="address"> 30 North West New</span>
            </div>
          </div>
          <div className="subscribe">
            <form>
              <input
                type="email"
                name="email"
                className="email"
                placeholder="Enter your email here..."
              />
              <button type="submit" className="subscribeBtn">
                Subscribe
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
        <div className="midFooter">
          <div className="container">
            <div className="logo">
              <div className="logoImg">
                <img
                  src="https://xpressrow.com/html/cafena/cafena/assets/images/logo/logo.png"
                  alt=""
                />
              </div>
              <div className="logoDesc">
                <p className="description">
                  Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut
                  quam quis quam venenatis fringilla. Morbi vestibulum
                </p>
              </div>
            </div>
            <div className="socialLinks">
            <Link onClick={() => openInNewTab('https://twitter.com/elonmusk')}>
            <FaTwitter />
            </Link>
            <Link onClick={() => openInNewTab('https://www.facebook.com/elon.musk.555')}>
            <FaFacebookF />
            </Link>
            <Link onClick={() => openInNewTab(' https://www.youtube.com/@SpaceX')}>
               <FaYoutube />
            </Link>
           <Link onClick={() => openInNewTab('https://youtu.be/SegaPbTyFrQ?si=UZv3VXVxlVGnFdhH')}>
            <FaGooglePlusG />
           </Link>
            <Link onClick={() => openInNewTab('https://www.instagram.com/spacex/')}>
            <FaInstagram />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
