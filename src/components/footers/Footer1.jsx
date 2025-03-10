import React from "react";
import { Link } from "react-router-dom";
import { navigationLinks } from "@/data/footer";

export default function Footer1() {
  return (
    <footer className={`page-section footer bg-gray-light-1 pb-30`}>
      <div className="container">
        <div className="row pb-120 pb-sm-80 pb-xs-50">
          <div className="col-md-4 col-lg-3 order-4 order-lg-0 pt-20 pb-20 mb-md-3">
            <img
              src="/assets/images/logo-dark-1.svg"
              width={150}
              height={34}
              className="light-mode-logo"
              alt="Your Company Logo"
            />
            <ul className="fw-menu clearlist text-gray mt-3">
              <li>
                Dubai, Deira, Business Point Building,
                <br /> Office M01
              </li>
              <li>
                +971 4 22 88 555 <br /> +971 56 622 4908
              </li>
              <li>info@tcc-uae.ae </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 ml-auto mt-30 mb-md-3">
            <h3 className="fw-title fw-bold">Services</h3>
            <ul className="fw-menu clearlist local-scroll">
              {navigationLinks.map((elm, i) => (
                <li key={i}>
                  <Link to={elm.href}>{elm.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3 col-lg-3 ml-auto mt-30 mb-md-3">
            <h3 className="fw-title fw-bold">Insights</h3>
            <ul className="fw-menu clearlist">
              <li>
                <Link to={"/blogs"}>Blogs & Articles</Link>
              </li>
              <li>
                <Link to={"/resources"}>Resources</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-lg-3 ml-auto mt-30 mb-md-3">
            <h3 className="fw-title text-decoration-none fw-bold mb-3">
              About Us & Stay Connected
            </h3>

            <ul className="fw-menu clearlist text-gray">
              <li className="mb-2">
                <Link to="/about" className="text-decoration-none fw-semibold">
                  About Us
                </Link>
              </li>
              <li>
                <div className="d-flex gap-3 mt-2 h4">
                  <a
                    href="https://www.facebook.com/tccuae"
                    target="_blank"
                    aria-label="Facebook"
                    className="social-link">
                    <i className="fa-facebook"></i>
                  </a>
                  <a
                    href="https://x.com/tcc_uae"
                    target="_blank"
                    aria-label="Twitter"
                    className="social-link">
                    <i className="fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/tccuae/"
                    target="_blank"
                    aria-label="Instagram"
                    className="social-link">
                    <i className="fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/terminal-customs-consulting/"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="social-link">
                    <i className="fa-linkedin"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="row mt-n30"></div>
          </div>
        </div>
        {/* Footer Text */}
        <div className="row text-gray">
          <b>
            2024 Terminal Customs Consulting. All rights reserved
            {new Date().getFullYear()}.
          </b>
          {/* <div className="col-md-4 col-lg-3">
            
          </div> */}
          {/* <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
            <b>Based in London, United Kingdom.</b> */}
          {/* Back to Top Link */}
          {/* <div className="local-scroll float-end mt-n20 mt-sm-10">
              <a href="#top" className="link-to-top">
                <i className="mi-arrow-up size-24" />
                <span className="visually-hidden">Scroll to top</span>
              </a>
            </div> */}
          {/* End Back to Top Link */}
          {/* </div> */}
        </div>
        {/* End Footer Text */}
      </div>
    </footer>
  );
}
