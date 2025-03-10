import { features5 } from "@/data/features";
import React from "react";

export default function Service() {
  return (
    <>
      <div
        className="page-section parallax-7 pb-140 bg-dark-1 bg-dark-alpha-90 light-content bg-gray-light-1"
        style={{
          backgroundImage: `url("/assets/images/full-width-images/section-bg-1-img.jpg")`,
        }}>
        <div className="container position-relative">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title mb-30 mb-sm-20">Why choose us?</h2>
              <div className="text-gray">
                Leading the Way in Customs Consulting and Compliance
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-n140 position-relative z-index-1">
        <div className="row mb-n30 justify-content-center">
          {/* Services Item*/}
          {features5.map((elm, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-6 col-xl-4 d-flex align-items-stretch mb-30">
              <div className="services-3-item round text-center services-3-item-black">
                <div className="wow fadeInUpShort" data-wow-offset={50}>
                  <div className="services-3-icon">
                    <img src={elm.imgPath} alt={elm.title} />
                  </div>
                  <h3 className="services-3-title">{elm.title}</h3>
                  <div className="services-3-text ">{elm.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
