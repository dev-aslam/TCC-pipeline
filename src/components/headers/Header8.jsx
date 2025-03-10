/* eslint-disable react/prop-types */
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";

const links = [
  { href: "#home", text: "Home", className: "active", dataBtnAnimate: "y" },
  { href: "#about", text: "About", dataBtnAnimate: "y" },
  { href: "#services", text: "Services", dataBtnAnimate: "y" },
  { href: "#portfolio", text: "Portfolio", dataBtnAnimate: "y" },
  { href: "#blog", text: "Blog", dataBtnAnimate: "y" },
  { href: "#contact", text: "Contact", dataBtnAnimate: "y" },
];

import LanguageSelect from "./components/LanguageSelect";
import { Link } from "react-router-dom";

export default function Header8({ links }) {
  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap local-scroll">
        <a href="#top" className="logo">
          <img
            src="/assets/images/demo-modern/logo-dark.svg"
            alt="Your Company Logo"
            width={84}
            height={33}
            className="light-mode-logo"
          />
          <img
            src="/assets/images/demo-modern/logo-white.svg"
            alt="Your Company Logo"
            width={84}
            height={33}
            className="dark-mode-logo"
          />
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          <Nav links={links} animateY />
          <li className="desktop-nav-display">
            <div className="vr" />
          </li>
          {/* Languages */}
          <LanguageSelect />
          {/* End Languages */}
          <li>
            {links[0].href.includes("/") ? (
              <Link
                to={links[links.length - 1].href}
                className="opacity-1 no-hover"
              >
                <span
                  className="btn btn-mod btn-border btn-border-white btn-small btn-circle"
                  data-btn-animate="y"
                >
                  Let's Talk
                </span>
              </Link>
            ) : (
              <a href="#contact" className="opacity-1 no-hover">
                <span
                  className="btn btn-mod btn-border btn-border-white btn-small btn-circle"
                  data-btn-animate="y"
                >
                  Let's Talk
                </span>
              </a>
            )}
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
