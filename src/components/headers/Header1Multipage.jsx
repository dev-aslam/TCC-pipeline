import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import { Link } from "react-router-dom";
import React from "react";
import Nav2 from "./components/Nav2";

export default function Header1Multipage({ links }) {
  return (
    <div className="main-nav-sub container mx-auto full-wrapper">
      <div className="nav-logo-wrap local-scroll">
        <Link to={`/`} className="logo">
          <img
            src="/assets/images/logo-dark-1-nav.svg"
            alt="Termianl Customs Consulting Logo"
            width={200}
            height={34}
            className="light-mode-logo"
          />
          <img
            src="/assets/images/logo-dark-1-nav.png"
            alt="Your Company Logo"
            width={200}
            height={34}
            className="dark-mode-logo"
          />
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}>
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist local-scroll text-black">
          {/* Item With Sub */}

          <Nav2 links={links} />
          {/* End Item With Sub */}
        </ul>
        <ul className="items-end clearlist">
          <li>
            <Link to="/contact-us" className="opacity-1 no-hover">
              <span className="link-hover-anim underline" data-link-animate="y">
                <span className="link-strong link-strong-unhovered">
                  Contact us
                </span>
                <span
                  className="link-strong link-strong-hovered"
                  aria-hidden="true">
                  Contact us
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
